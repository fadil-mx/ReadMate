import { NextRequest, NextResponse } from 'next/server'
import openAI from 'openai'

const openai = new openAI({
  baseURL: 'http://localhost:1234/v1',
  apiKey: 'not-needed',
  dangerouslyAllowBrowser: false,
})

export async function POST(req: NextRequest) {
  const { prompt, model } = await req.json()
  const res = await openai.chat.completions.create({
    model: model,
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.7,
    max_tokens: 2000,
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
