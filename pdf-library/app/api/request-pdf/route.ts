import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, category, urgency, userEmail, userId } = body

    // Validate required fields
    if (!title || !description || !userEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const emailContent = `
New PDF Request Submitted

Title: ${title}
Description: ${description}
Category: ${category || 'Not specified'}
Urgency: ${urgency || 'Normal'}
User Email: ${userEmail}
User ID: ${userId}
Submitted: ${new Date().toISOString()}

Please review this request and add the PDF to the library if appropriate.
    `.trim()

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New PDF Request: ${title}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    })

    // TODO: Store request in database for tracking
    // This would typically go to Supabase or your database

    return NextResponse.json(
      { message: 'PDF request submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing PDF request:', error)
    return NextResponse.json(
      { error: 'Failed to submit PDF request' },
      { status: 500 }
    )
  }
}
