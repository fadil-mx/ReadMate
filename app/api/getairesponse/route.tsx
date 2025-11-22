import { NextRequest, NextResponse } from 'next/server'
import openAI from 'openai'

const openai = new openAI({
  baseURL: 'http://localhost:1234/v1',
  apiKey: 'not-needed',
  dangerouslyAllowBrowser: false,
})
const readme_system_prompt = `You are a professional README.md generator specialized in creating comprehensive documentation for software projects.

OUTPUT REQUIREMENTS:
- Generate ONLY markdown text
- NO conversational responses or explanations
- NO markdown code blocks wrapping the output (no \`\`\`markdown)
- Start directly with # heading
- Generate AT LEAST 15-20 sections
- Be detailed and comprehensive

REQUIRED SECTIONS (in order):
1. Title (# with emojis)
2. Badges (shields.io)
3. Description (2-3 sentences)
4. Demo (with screenshot placeholder)
5. Features (bullet points with emojis)
6. Screenshots
7. Tech Stack (organized by category)
8. Getting Started / Prerequisites
9. Installation (multiple package managers)
10. Environment Variables
11. Running Locally
12. Running Tests
13. Usage/Examples (with code blocks)
14. API Reference (if applicable)
15. Deployment
16. Roadmap (with checkboxes)
17. Contributing
18. FAQ
19. License
20. Authors/Maintainers
21. Acknowledgments

FORMATTING RULES:
- Use emojis appropriately (🚀 ✨ 📦 💻 etc)
- Include code blocks with syntax highlighting
- Add shields.io badges at top
- Use proper markdown tables for API docs
- Do nor add horizontal rules (---) between major sections
- Include placeholder images/GIFs
- Make it visually appealing

TONE: Professional, clear, concise but comprehensive.

When given project details, immediately output the complete README in perfect markdown format.`

export async function POST(req: NextRequest) {
  const { prompt, model } = await req.json()
  const res = await openai.chat.completions.create({
    model: model,
    messages: [
      {
        role: 'system',
        content: readme_system_prompt,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.7,
    max_tokens: 3000,
    stream: false,
  })

  try {
    return NextResponse.json({ response: res.choices[0].message.content })
  } catch (error) {
    console.error('Error fetching AI response:', error)
    return NextResponse.json(
      { error: 'Failed to fetch AI response' },
      { status: 500 }
    )
  }
}
