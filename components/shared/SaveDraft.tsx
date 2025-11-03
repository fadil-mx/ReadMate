'use cleint'
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
import { Save } from 'lucide-react'
import hookdDraft from '@/hooks/draft-hook'
import { Input } from '../ui/input'
import { sectionType } from '@/types/types'

type saveDraft = {
  sections: sectionType[]
  activeSection: string
}

const SaveDraft = ({ sections, activeSection }: saveDraft) => {
  const [name, setName] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  const { saveDraft } = hookdDraft()

  const handleSave = () => {
    saveDraft(sections, activeSection, name)
    setOpen(false)
    setName('')
  }
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all flex items-center gap-2 shadow-sm'>
            <Save className='w-4 h-4' />
            Save Draft
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle> Draft Name</DialogTitle>
            <DialogDescription asChild>
              <div className=''>
                <div className='mt-3'>
                  <Input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                    placeholder='E-commerce Project README'
                    className='text-black w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    autoFocus
                  />
                </div>
                <div className=' flex justify-end gap-2 mt-4'>
                  <Button
                    variant='outline'
                    className='text-red-600
                  '
                    onClick={() => {
                      setOpen(false)
                      setName('')
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleSave()}
                    className='bg-green-600 text-white hover:bg-green-700 flex items-center gap-2'
                  >
                    <Save className='w-4 h-4' />
                    Save
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SaveDraft
