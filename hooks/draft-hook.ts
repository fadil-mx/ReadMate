import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Section = {
  id: string
  name: string
  icon: string
  markdown: string
}

type DraftItem = {
  id: string
  name: string
  sections: Section[]
  activesection: string
  createdAt: string
  updatedAt: string
}

type Datas = {
  draft: DraftItem[]
  currentDraftid: string | null
}

interface DraftStore {
  datas: Datas
  saveDraft: (sections: Section[], activesection: string, name: string) => void
  updateDraft: (id: string, name: string) => void
  loaddraft: (draftId: string) => void
  deleteDraft: (id: string) => void
  clearDraft: () => void
}

const inintialData: Datas = {
  draft: [],
  currentDraftid: null,
}

const hookdDraft = create(
  persist<DraftStore>(
    (set, get) => ({
      datas: inintialData,
      saveDraft: (sections: Section[], activesection: string, name: string) => {
        const { draft, currentDraftid } = get().datas
        const existingDraft = draft.find((d) => d.id === currentDraftid)
        if (existingDraft) {
          const updatedDrafts = draft.map((d) =>
            d.id === currentDraftid
              ? {
                  ...d,
                  name,
                  sections,
                  activesection,
                  updatedAt: new Date().toISOString(),
                }
              : d
          )

          set({
            datas: {
              ...get().datas,
              draft: updatedDrafts,
            },
          })
        } else {
          const newdraft = {
            id: `draft-${Date.now()}`,
            name,
            sections,
            activesection,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }

          set({
            datas: {
              ...get().datas,
              draft: [...draft, newdraft],
              currentDraftid: newdraft.id,
            },
          })
        }
      },
      updateDraft: (id: string, name: string) => {
        const { draft } = get().datas
        const updatedDrafts = draft.map((item) =>
          item.id === id
            ? {
                ...item,
                name,
                updatedAt: new Date().toISOString(),
              }
            : item
        )
        set({
          datas: {
            ...get().datas,
            draft: updatedDrafts,
          },
        })
      },
      deleteDraft: (id: string) => {
        const { draft } = get().datas
        const updatedDrafts = draft.filter((d) => d.id !== id)
        set({
          datas: {
            ...get().datas,
            draft: updatedDrafts,
          },
        })
      },
      loaddraft: (draftId: string) => {
        const { draft } = get().datas
        const draftToLoad = draft.find((d) => d.id === draftId) || null
        if (draftToLoad) {
          set({
            datas: {
              ...get().datas,
              currentDraftid: draftToLoad.id,
            },
          })
        }
        return draftToLoad
      },

      clearDraft: () => {
        set({
          datas: {
            ...get().datas,
            currentDraftid: null,
          },
        })
      },
    }),
    { name: 'draft-hook' }
  )
)

export default hookdDraft
