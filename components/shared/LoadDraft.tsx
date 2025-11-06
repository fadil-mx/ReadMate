'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { Check, Clock, FolderOpen, X } from 'lucide-react'
import hookdDraft from '@/hooks/draft-hook'
import { Input } from '../ui/input'
import { formatTimeAgo } from '@/lib/utils'
import { DraftItemType } from '@/types/types'

type LoadDraftProps = {
  onLoadDraft: (draftdata: DraftItemType) => void
}

const LoadDraft = ({ onLoadDraft }: LoadDraftProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [renamingId, setRenamingId] = useState('')
  const [newName, setNewName] = useState('')
  const [open, setOpen] = useState(false)
  const {
    datas: { draft },
    deleteDraft,
    updateDraft,
    loaddraft,
  } = hookdDraft()

  const drafts = draft.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleLoadDraft = (draftId: string) => {
    loaddraft(draftId)
    const newdraft = draft.find((d) => d.id === draftId)
    if (newdraft) {
      onLoadDraft(newdraft)
      console.log(newdraft)
      setOpen(false)
    } else {
      window.alert('Loaded draft not found for id:' + draftId)
    }
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className=' px-4 py-2 cursor-pointer bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2 shadow-sm relative'>
            <FolderOpen className='w-4 h-4' />
            My Drafts
            {draft.length > 0 && (
              <span className='absolute -top-1.5 -right-1.5 font-bold bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                {draft.length}
              </span>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className='max-h-11/12  overflow-hidden'>
          <DialogHeader>
            <DialogTitle>
              <div className=''>
                <h2 className=' font-bold text-gray-800 flex items-center gap-2'>
                  <FolderOpen className='w-5 h-5' />
                  My Drafts {draft.length}
                </h2>
              </div>
            </DialogTitle>
            <DialogDescription asChild>
              <div className='mt-3'>
                <Input
                  className='text-black w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Search drafts...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className=''>
                  {drafts.length === 0 ? (
                    <div className='text-center py-8 text-gray-500'>
                      <FolderOpen className='w-12 h-12 mx-auto mb-2 opacity-50' />
                      <p>No drafts found</p>
                    </div>
                  ) : (
                    <div className='mt-5 overflow-y-auto max-h-[378px]  pr-2'>
                      {drafts.map((draft) => (
                        <div key={draft.id} className=''>
                          {renamingId === draft.id ? (
                            <div className='flex gap-2 mb-2 mt-4 border border-gray-300 py-3 px-2 rounded-lg items-center bg-white shadow-sm'>
                              <Input
                                type='text'
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                className='flex-1 text-gray-800 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                autoFocus
                              />

                              <Button
                                onClick={() => {
                                  updateDraft(draft.id, newName)
                                  setRenamingId('')
                                  setNewName('')
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    updateDraft(draft.id, newName)
                                    setRenamingId('')
                                    setNewName('')
                                  }
                                }}
                                className='px-3 py-2 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'
                              >
                                <Check className='w-4 h-4' />
                              </Button>

                              <Button
                                onClick={() => {
                                  setRenamingId('')
                                  setNewName('')
                                }}
                                className='px-3 py-2 cursor-pointer bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors'
                              >
                                <X className='w-4 h-4' />
                              </Button>
                            </div>
                          ) : (
                            <div className='mt-5 border  p-2 rounded-lg flex  justify-between items-center cursor-pointer hover:bg-gray-100'>
                              <div className=''>
                                <div className='flex gap-3 items-center'>
                                  <span className='text-2xl'>📝</span>
                                  <h1 className='text-black font-semibold text-lg truncate max-w-[150px]'>
                                    {draft.name}
                                  </h1>
                                </div>

                                <p className='text-sm text-gray-500 flex items-center gap-1 mt-1'>
                                  <Clock className='w-3 h-3' />
                                  Updated:
                                  {formatTimeAgo(draft.updatedAt)}
                                </p>
                              </div>
                              <div className=' flex gap-2'>
                                <Button
                                  onClick={() => handleLoadDraft(draft.id)}
                                  className=' bg-blue-600 cursor-pointer text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium'
                                >
                                  Load
                                </Button>
                                <Button
                                  onClick={() => {
                                    setRenamingId(draft.id)
                                    setNewName(draft.name)
                                  }}
                                  className=' bg-gray-200 cursor-pointer text-gray-700 rounded-lg hover:bg-gray-300 transition-colors'
                                >
                                  Edit{' '}
                                </Button>

                                <Button
                                  onClick={() => deleteDraft(draft.id)}
                                  className='px-3 py-1.5 cursor-pointer bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors'
                                >
                                  Delete
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default LoadDraft
