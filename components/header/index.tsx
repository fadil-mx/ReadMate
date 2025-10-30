'use client'
import { Check, Code, Copy, Download, Eye, GitMerge, User } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'

type header = {
  setView: React.Dispatch<React.SetStateAction<string>>
  copyToClipboard: () => void
  downloadMarkdown: () => void
  copied: boolean
  view: string
}

const Header = ({
  setView,
  copyToClipboard,
  downloadMarkdown,
  copied,
  view,
}: header) => {
  const [login, setlogin] = useState<boolean>(false)
  return (
    <div className='bg-white border-b border-gray-200 shadow-sm'>
      <div className='px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg'>
            <GitMerge className='w-6 h-6 text-white' />
          </div>
          <div>
            <h1 className='text-2xl  font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              ReadMate
            </h1>
            <p className='text-sm text-gray-500'>
              Build elegant, developer-friendly GitHub docs
            </p>
          </div>
        </div>
        <div className='flex  items-center gap-3'>
          <div className='flex bg-gray-100 rounded-lg p-1'>
            <button
              onClick={() => setView('split')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                view === 'split'
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-gray-600'
              }`}
            >
              <Code className='w-4 h-4 inline mr-1' />
              Split
            </button>
            <button
              onClick={() => setView('preview')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                view === 'preview'
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-gray-600'
              }`}
            >
              <Eye className='w-4 h-4 inline mr-1' />
              Preview
            </button>
          </div>
          <div className=''>
            <Button
              onClick={copyToClipboard}
              className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-sm'
            >
              {copied ? (
                <Check className='w-4 h-4' />
              ) : (
                <Copy className='w-4 h-4' />
              )}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className=''>
            <Button
              onClick={downloadMarkdown}
              className='px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2 shadow-sm'
            >
              <Download className='w-4 h-4' />
              Download
            </Button>
          </div>
          {/* <div className=''>
            <Button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-sm'>
              <User className='w-4 h-4' />

              {login ? 'logout' : 'Sign-in'}
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Header
