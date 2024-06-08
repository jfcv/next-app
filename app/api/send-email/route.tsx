import { NextResponse } from 'next/server'
import WelcomeTemplate from '@/emails/WelcomeTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: '...',
        to: 'juan.cuadros@pm.me',
        subject: 'Next.js Send Emails section',
        react: <WelcomeTemplate name='Mosh' />
    });

    return NextResponse.json({});
}