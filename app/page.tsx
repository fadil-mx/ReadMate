'use client'
import { useState } from 'react'
import { Plus, Trash2, GripVertical } from 'lucide-react'
import Header from '@/components/header'
import { EN_Markdown } from '@/lib/data'
import MarkdownPreview from '@/components/markdown/Markdown'

export default function ReadmeBuilder() {
  const [sections, setSections] = useState(EN_Markdown.slice(0, 3))
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const [view, setView] = useState('split')
  const [copied, setCopied] = useState(false)

  const activeContent = sections.find((s) => s.id === activeSection)

  const updateSection = (id: string, newMarkdown: string) => {
    setSections(
      sections.map((s) => (s.id === id ? { ...s, markdown: newMarkdown } : s))
    )
  }

  const addSection = (template: {
    id: string
    name: string
    icon: string
    markdown: string
  }) => {
    const newSection = { ...template, id: `${template.id}-${Date.now()}` }
    setSections([...sections, newSection])
    setActiveSection(newSection.id)
  }

  const removeSection = (id?: string) => {
    const newSections = sections.filter((s) => s.id !== id)
    setSections(newSections)
    if (activeSection === id && newSections.length > 0) {
      const len = newSections.length
      setActiveSection(newSections[len - 1].id)
    }
  }
  //to get all readmefiles
  const getFullMarkdown = sections.map((s) => s.markdown).join('\n')

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getFullMarkdown)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadMarkdown = () => {
    const blob = new Blob([getFullMarkdown], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'README.md'
    a.click()
  }
  //selecting only the data availale to show in the availbale sections
  const availableSections = EN_Markdown.filter(
    (template) => !sections.some((s) => s.name === template.name)
  )

  return (
    <div className='h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      {/* GitHub Markdown CSS */}
      <style>{`
        .markdown-body {
          box-sizing: border-box;
          min-width: 200px;
          max-width: 980px;
          margin: 0 auto;
          padding: 45px;
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
          font-size: 16px;
          line-height: 1.5;
          word-wrap: break-word;
        }

        .markdown-body h1 {
          padding-bottom: .3em;
          font-size: 2em;
          border-bottom: 1px solid #d0d7de;
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: 600;
          line-height: 1.25;
        }

        .markdown-body h2 {
          padding-bottom: .3em;
          font-size: 1.5em;
          border-bottom: 1px solid #d0d7de;
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: 600;
          line-height: 1.25;
        }

        .markdown-body h3 {
          font-size: 1.25em;
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: 600;
          line-height: 1.25;
        }

        .markdown-body h4 {
          font-size: 1em;
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: 600;
          line-height: 1.25;
        }

        .markdown-body p {
          margin-top: 0;
          margin-bottom: 16px;
        }

        .markdown-body code {
          padding: .2em .4em;
          margin: 0;
          font-size: 85%;
          white-space: break-spaces;
          background-color: rgba(175,184,193,0.2);
          border-radius: 6px;
          font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
        }

        .markdown-body pre {
          padding: 16px;
          overflow: auto;
          font-size: 85%;
          line-height: 1.45;
          background-color: #f6f8fa;
          border-radius: 6px;
          margin-top: 0;
          margin-bottom: 16px;
        }

        .markdown-body pre code {
          display: inline;
          padding: 0;
          margin: 0;
          overflow: visible;
          line-height: inherit;
          word-wrap: normal;
          background-color: transparent;
          border: 0;
        }

        .markdown-body ul, .markdown-body ol {
          padding-left: 2em;
          margin-top: 0;
          margin-bottom: 16px;
        }

        .markdown-body li {
          margin-top: .25em;
        }

        .markdown-body a {
          color: #0969da;
          text-decoration: none;
        }

        .markdown-body a:hover {
          text-decoration: underline;
        }

        .markdown-body img {
          max-width: 100%;
          box-sizing: content-box;
          background-color: #ffffff;
          border-style: none;
        }

        .markdown-body table {
          border-spacing: 0;
          border-collapse: collapse;
          display: block;
          width: max-content;
          max-width: 100%;
          overflow: auto;
          margin-top: 0;
          margin-bottom: 16px;
        }

        .markdown-body table th {
          font-weight: 600;
          padding: 6px 13px;
          border: 1px solid #d0d7de;
          background-color: #f6f8fa;
        }

        .markdown-body table td {
          padding: 6px 13px;
          border: 1px solid #d0d7de;
        }

        .markdown-body table tr {
          background-color: #ffffff;
          border-top: 1px solid hsla(210,18%,87%,1);
        }

        .markdown-body strong {
          font-weight: 600;
        }

        .markdown-body em {
          font-style: italic;
        }
      `}</style>

      {/* Header */}
      <Header
        setView={setView}
        copyToClipboard={copyToClipboard}
        downloadMarkdown={downloadMarkdown}
        view={view}
        copied={copied}
      />

      <div className='flex-1 flex overflow-hidden'>
        {/* Sidebar */}
        <aside className='w-64 bg-white border-r border-gray-200 flex flex-col overflow-y-auto'>
          <div className='p-4 border-b border-gray-200'>
            <h2 className='font-semibold text-gray-700 mb-3'>Your Sections</h2>
            <div className='space-y-1'>
              {sections.map((section) => (
                <div
                  key={section.name}
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${
                    activeSection === section.id
                      ? 'bg-blue-100 border border-blue-300'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <div className='flex items-center gap-2 flex-1'>
                    <GripVertical className='w-4 h-4 text-gray-400' />
                    <span className='text-lg'>{section.icon}</span>
                    <span className='text-sm font-medium text-gray-700'>
                      {section.name}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeSection(section.id)
                    }}
                    className='text-gray-400 hover:text-red-500 transition-colors'
                  >
                    <Trash2 className='w-4 h-4' />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {availableSections.length > 0 && (
            <div className='p-4 flex-1 '>
              <h3 className='font-semibold text-gray-700 mb-3 flex items-center gap-2'>
                <Plus className='w-4 h-4' />
                Add Section
              </h3>
              <div className='space-y-1'>
                {availableSections.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => addSection(template)}
                    className='w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-all text-left'
                  >
                    <span className='text-lg'>{template.icon}</span>
                    <span className='text-sm text-gray-700'>
                      {template.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className='flex-1 flex overflow-hidden'>
          {/* Editor */}
          {view !== 'preview' && (
            <div className='flex-1 flex flex-col bg-white border-r border-gray-200'>
              <div className='p-4 border-b border-gray-200 bg-gray-50'>
                <h3 className='font-semibold text-gray-700 flex items-center gap-2'>
                  <span className='text-lg'>{activeContent?.icon}</span>
                  {activeContent?.name}
                </h3>
              </div>
              <textarea
                value={activeContent?.markdown || ''}
                onChange={(e) => {
                  if (!activeSection) return
                  updateSection(activeSection, e.target.value)
                }}
                className='flex-1 p-6 font-mono text-sm resize-none focus:outline-none'
                placeholder='Start typing your markdown...'
              />
            </div>
          )}

          {/* Preview */}
          {view !== 'edit' && (
            <div className='flex-1 overflow-y-auto bg-white'>
              <MarkdownPreview markdown={getFullMarkdown} />
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
