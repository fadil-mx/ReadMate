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
  updateDraft: () => void
  loaddraft: () => void
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
        const { draft } = get().datas
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
      },
      updateDraft: () => {},
      loaddraft: () => {},
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
      clearDraft: () => {},
    }),
    { name: 'draft-hook' }
  )
)

export default hookdDraft
