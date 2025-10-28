const MarkdownPreview = ({ markdown }: { markdown: string }) => {
  const convertMarkdown = (md: string) => {
    let html = md

    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre><code class="language-${
        lang || 'text'
      }">${code.trim()}</code></pre>`
    })

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>')

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')
    html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>')

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')

    // Images
    html = html.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" />'
    )

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')

    // Lists
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>')
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>')
    html = html.replace(/(<li>[\s\S]*<\/li>)/, '<ul>$1</ul>')

    // Tables
    const tableRegex = /\|(.+)\|\n\|[-:\s|]+\|\n((?:\|.+\|\n?)+)/g
    html = html.replace(tableRegex, (match, header, rows) => {
      const headerCells = header
        .split('|')
        .filter(Boolean)
        .map((cell: string) => `<th>${cell.trim()}</th>`)
        .join('')

      const rowCells = rows
        .trim()
        .split('\n')
        .map((row: string) => {
          const cells = row
            .split('|')
            .filter(Boolean)
            .map((cell) => `<td>${cell.trim()}</td>`)
            .join('')
          return `<tr>${cells}</tr>`
        })
        .join('')

      return `<table><thead><tr>${headerCells}</tr></thead><tbody>${rowCells}</tbody></table>`
    })

    // Paragraphs
    html = html.replace(/\n\n/g, '</p><p>')
    html = '<p>' + html + '</p>'
    html = html.replace(/<p><\/p>/g, '')
    html = html.replace(/<p>(<h[1-6]>)/g, '$1')
    html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1')
    html = html.replace(/<p>(<ul>)/g, '$1')
    html = html.replace(/(<\/ul>)<\/p>/g, '$1')
    html = html.replace(/<p>(<table>)/g, '$1')
    html = html.replace(/(<\/table>)<\/p>/g, '$1')
    html = html.replace(/<p>(<pre>)/g, '$1')
    html = html.replace(/(<\/pre>)<\/p>/g, '$1')

    return html
  }

  return (
    <div
      className='markdown-body'
      dangerouslySetInnerHTML={{ __html: convertMarkdown(markdown) }}
    />
  )
}

export default MarkdownPreview
