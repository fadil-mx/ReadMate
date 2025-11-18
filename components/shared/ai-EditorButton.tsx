import { cn } from '@/lib/utils'
import React from 'react'

const EditorButton = ({
  aiActivated,
  setAiActivated,
}: {
  aiActivated: boolean
  setAiActivated: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <div className='relative flex w-fit bg-gray-200 rounded-lg p-1 font-medium'>
      {/* Sliding highlight */}
      <div
        className={cn(
          'absolute top-1 bottom-1 left-0 w-1/2 rounded-md bg-white shadow-sm transition-all duration-300',
          aiActivated ? 'translate-x-full' : 'translate-x-0'
        )}
      />

      <button
        onClick={() => setAiActivated(false)}
        className={cn(
          'relative z-10 px-4 py-1 text-sm transition-colors ',
          !aiActivated ? 'text-blue-600' : 'text-gray-500'
        )}
      >
        Editor
      </button>

      <button
        onClick={() => setAiActivated(true)}
        className={cn(
          'relative z-10 px-4 py-1 text-sm transition-colors',
          aiActivated ? 'text-blue-600' : 'text-gray-500'
        )}
      >
        AI Chat
      </button>
    </div>
  )
}

export default EditorButton
