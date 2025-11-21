'use client'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from '@/components/ui/select'
import { ArrowUp, Globe, Loader2, Paperclip, Sparkles } from 'lucide-react'
import { Textarea } from '../ui/textarea'

type Message = {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}
type models = {
  id: string
  object: string
  created: number
}

const LocalAiEditor = () => {
  const [model, setModel] = useState<string>('qwen/qwen3-4b-2507')
  const [models, setModels] = useState<models[]>([])
  const [input, setInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  //   const [error, setError] = useState('')
  //   const [streamedResponse, setStreamedResponse] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const fetchModels = async () => {
      const res = await fetch('/api/getModels')
      const data = await res.json()
      setModels(data.models.data)
    }
    fetchModels()
  }, [])

  // handle scrolling when new data arrives
  const chatEndRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleGenerate = async () => {
    if (!input.trim() || isGenerating) return
    setIsGenerating(true)

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')

    const res = await fetch('/api/getairesponse', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ prompt: input, model }),
    })
    const data = await res.json()

    const aiMessage: Message = {
      role: 'assistant',
      content: data.response,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, aiMessage])
    setIsGenerating(false)
  }

  return (
    <div className=' flex-1  overflow-hidden flex flex-col bg-white border-r border-gray-200'>
      <div className='custom-scroll flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 '>
        {messages.length === 0 ? (
          // Empty state
          <div className='flex flex-col items-center justify-center h-full text-center px-4'>
            <Sparkles className='w-16 h-16 text-purple-300 mb-4' />
            <h4 className='text-lg font-semibold text-gray-700 mb-2'>
              Start a Conversation
            </h4>
            <p className='text-sm text-gray-500 mb-6 max-w-md'>
              Describe your project and I&apos;ll generate a professional README
              for you
            </p>

            {/* Example prompts */}
            <div className='space-y-2 w-full max-w-md'>
              <p className='text-xs font-semibold uppercase text-gray-400 mb-3'>
                Try these examples:
              </p>
              <button
                onClick={() =>
                  setInput(
                    'Generate README for a weather app using Next.js and TypeScript with OpenWeatherMap API'
                  )
                }
                className='w-full text-left px-4 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg text-sm transition-all hover:shadow-md'
              >
                <span className='text-purple-600 font-semibold'>💡</span>{' '}
                Generate README for a weather app...
              </button>
              <button
                onClick={() =>
                  setInput('Add more details to the Features section')
                }
                className='w-full text-left px-4 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg text-sm transition-all hover:shadow-md'
              >
                <span className='text-blue-600 font-semibold'>✨</span> Add more
                details to Features...
              </button>
            </div>
          </div>
        ) : (
          // Messages
          <>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                } animate-in fade-in slide-in-from-bottom-2 duration-300 w-full`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <div className='flex items-center gap-2 mb-1'>
                    <span
                      className={`text-xs font-bold uppercase tracking-wide ${
                        msg.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}
                    >
                      {msg.role === 'user' ? '🧑 You' : '🤖 AI'}
                    </span>
                    <span
                      className={`text-xs ${
                        msg.role === 'user' ? 'text-blue-100' : 'text-gray-400'
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>

                  <div className='text-sm leading-relaxed whitespace-pre-wrap break-words'>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}

            {/* Loading  sign*/}
            {isGenerating && (
              <div className='flex justify-start animate-in fade-in slide-in-from-bottom-2'>
                <div className='bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm'>
                  <div className='flex items-center gap-2'>
                    <Loader2 className='w-4 h-4 animate-spin text-purple-600' />
                    <span className='text-sm text-gray-600'>
                      AI is thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </>
        )}
      </div>

      <div className='   w-full bottom-0 flex flex-col gap-4 p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-purple-50'>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Describe your project...
            Example:
            - Tech stack: Next.js, TypeScript, Tailwind
            - Features: User auth, real-time chat, file upload
            - Purpose: Social media app for developers'
          className=' min-h-[85px] max-h-48 resize-none'
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleGenerate()
            }
          }}
          disabled={isGenerating}
        />
        <div className=' flex justify-between items-center'>
          <div className='flex gap-5'>
            <Select
              value={model}
              onValueChange={(e) => {
                setModel(e)
              }}
            >
              <SelectTrigger className='w-[200px] bg-purple-600 hover:bg-purple-700 text-white justify-center overflow-hidden'>
                <span className='text-white block truncate max-w-[160px] text-center'>
                  {model}
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className='text-violet-600 font-bold'>
                    models
                  </SelectLabel>

                  {models.map((modelName, index) => (
                    <SelectItem
                      key={index}
                      value={modelName.id}
                      className='cursor-pointer focus:bg-purple-100 data-[state=checked]:bg-purple-200'
                    >
                      {modelName.id}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className='bg-purple-600 hover:bg-purple-700 rounded-full  justify-center'>
              <Globe className='w-5 h-5 mr-2' />
              Search
            </Button>
            <Button className='bg-purple-600 hover:bg-purple-700 rounded-full  justify-center'>
              <Paperclip className='w-5 h-5 mr-2' />
              Attach
            </Button>
          </div>
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            className='bg-purple-600 hover:bg-purple-700 rounded-full  justify-center'
          >
            <ArrowUp className='w-5 h-5 ' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LocalAiEditor
