import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface AuditRequest {
  name: string
  company: string
  website: string
  contact: string
  message: string
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AuditRequest

    const name = body.name?.trim()
    const company = body.company?.trim()
    const website = body.website?.trim()
    const contact = body.contact?.trim()
    const message = body.message?.trim()

    if (!name || !contact) {
      return NextResponse.json(
        {
          success: false,
          message: 'Заполните имя и контакт.',
        },
        { status: 400 },
      )
    }

    await transporter.sendMail({
      from: `"ЖД-ПРОГ" <${process.env.SMTP_USER}>`,
      to: process.env.AUDIT_EMAIL,
      replyTo: contact.includes('@') ? contact : undefined,
      subject: `Новая заявка на аудит — ${company || name}`,
      text: [
        `Новая заявка на бесплатный аудит`,
        '',
        `Имя: ${name}`,
        `Компания: ${company || 'Не указана'}`,
        `Сайт: ${website || 'Не указан'}`,
        `Контакт: ${contact}`,
        '',
        `Что хотят улучшить:`,
        message || 'Не указано',
      ].join('\n'),
      html: `
        <h2>Новая заявка на бесплатный аудит</h2>

        <p><strong>Имя:</strong> ${escapeHtml(name)}</p>
        <p><strong>Компания:</strong> ${escapeHtml(company || 'Не указана')}</p>
        <p><strong>Сайт:</strong> ${escapeHtml(website || 'Не указан')}</p>
        <p><strong>Контакт:</strong> ${escapeHtml(contact)}</p>

        <hr />

        <p><strong>Что хотят улучшить:</strong></p>
        <p>${escapeHtml(message || 'Не указано').replace(/\n/g, '<br />')}</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Заявка успешно отправлена.',
    })
  } catch (error) {
    console.error('Audit request error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Не удалось отправить заявку.',
      },
      { status: 500 },
    )
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}