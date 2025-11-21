import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('http://localhost:1234/v1/models')
    const data = await res.json()
    return NextResponse.json({
      success: true,
      models: data,
    })
  } catch (error) {
    console.error('Error fetching models:', error)
  }
}
