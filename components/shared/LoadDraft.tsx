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

const LoadDraft = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [renamingId, setRenamingId] = useState(null)
  const [newName, setNewName] = useState('')
  const [open, setOpen] = useState(true)
  const {
    datas: { draft },
    deleteDraft,
  } = hookdDraft()

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className=' px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2 shadow-sm relative'>
            <FolderOpen className='w-4 h-4' />
            My Drafts
            {draft.length > 0 && (
              <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
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
                  {draft.length === 0 ? (
                    <div className='text-center py-8 text-gray-500'>
                      <FolderOpen className='w-12 h-12 mx-auto mb-2 opacity-50' />
                      <p>No drafts found</p>
                    </div>
                  ) : (
                    <div className='mt-5 overflow-y-auto max-h-[378px]  pr-2'>
                      {draft.map((draft) => (
                        <div key={draft.id} className=''>
                          {renamingId === draft.id ? (
                            <div className='flex gap-2 mb-2'>
                              <Input
                                type='text'
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                //   onKeyPress={(e) => e.key === 'Enter' && handleRename(draft.id)}
                                className='flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                                autoFocus
                              />
                              <button
                                //   onClick={() => handleRename(draft.id)}
                                className='px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700'
                              >
                                <Check className='w-4 h-4' />
                              </button>
                              <button
                                onClick={() => {
                                  setRenamingId(null)
                                  setNewName('')
                                }}
                                className='px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300'
                              >
                                <X className='w-4 h-4' />
                              </button>
                            </div>
                          ) : (
                            <div className='mt-5 border  p-2 rounded-lg flex  justify-between items-center cursor-pointer hover:bg-gray-100'>
                              <div className=''>
                                <div className=' flex gap-3 '>
                                  <span className=' text-2xl'>📝</span>
                                  <h1 className='text-black font-semibold text-lg'>
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
                                <Button className=' px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium'>
                                  Load
                                </Button>
                                <Button className='px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors'>
                                  Edit{' '}
                                </Button>

                                <Button
                                  onClick={() => deleteDraft(draft.id)}
                                  className='px-3 py-1.5 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors'
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
