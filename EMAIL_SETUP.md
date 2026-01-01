# Email Setup Guide

Your forms are now configured to send emails through a Next.js API route. Follow these steps to set up email functionality:

## Step 1: Install Dependencies

Run the following command to install the required packages:

```bash
npm install
```

## Step 2: Configure Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here
CONTACT_EMAIL=rana.margt339@gmail.com
```

### For Gmail Users:

1. Enable 2-Step Verification on your Google account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for "Mail"
4. Use this app password (not your regular password) in `SMTP_PASSWORD`

### For Other Email Providers:

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

**Yahoo:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

**Custom SMTP Server:**
Update `SMTP_HOST` and `SMTP_PORT` according to your email provider's settings.

## Step 3: Test the Forms

1. Start your development server: `npm run dev`
2. Fill out a contact form on your website
3. Check the email address specified in `CONTACT_EMAIL` for the form submission

## Troubleshooting

- **"Authentication failed"**: Make sure you're using an App Password for Gmail, not your regular password
- **"Connection timeout"**: Check your SMTP host and port settings
- **"Email not received"**: Check your spam folder and verify `CONTACT_EMAIL` is correct

## Alternative: Using Email Services

If you prefer not to use SMTP, you can use services like:
- **Resend** (recommended): https://resend.com
- **SendGrid**: https://sendgrid.com
- **Mailgun**: https://mailgun.com

These services provide API keys instead of SMTP credentials and are often more reliable.

