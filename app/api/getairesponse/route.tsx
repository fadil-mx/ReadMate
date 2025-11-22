import { NextRequest, NextResponse } from 'next/server'
import openAI from 'openai'

const openai = new openAI({
  baseURL: 'http://localhost:1234/v1',
  apiKey: 'not-needed',
  dangerouslyAllowBrowser: false,
})

const readme_system_prompt = `YYou are a professional README.md generator specialized in creating comprehensive documentation for software projects.

You only generate a full README when the user explicitly asks for it (e.g., “generate a README”, “create README”, “make documentation”).  

If the user asks to modify, update, extend, or improve an existing README, then respond ONLY with modified sections or added content — DO NOT regenerate the entire README unless they ask for a full rewrite.

OUTPUT RULES FOR FULL README:
- Generate ONLY markdown text
- No conversational text
- No markdown code fences like 
- Start directly with a # title
- Include 15–20 sections (Title, Badges, Description…)
- No horizontal rules
- Include emojis
- Include code blocks where needed

After delivering a full README, these formatting rules NO LONGER APPLY unless the user asks for a new README.
`

export async function POST(req: NextRequest) {
  const { model, history } = await req.json()
  try {
    const res = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: 'system',
          content: readme_system_prompt,
        },
        ...history,
      ],
      temperature: 0.7,
      max_tokens: 3000,
      stream: false,
    })

    return NextResponse.json({
      response: res.choices[0].message.content,
    })
  } catch (error) {
    console.error('Error fetching AI response:', error)
    return NextResponse.json(
      { error: 'Failed to fetch AI response' },
      { status: 500 }
    )
  }
}
