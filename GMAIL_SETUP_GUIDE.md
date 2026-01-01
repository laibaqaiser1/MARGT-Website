# Gmail Setup Guide for Email Sending

Follow these steps to configure Gmail to send emails from your Next.js project.

## Prerequisites
- A Gmail account (rana.margt339@gmail.com)
- Access to your Gmail account settings

## Step 1: Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", find **2-Step Verification**
4. Click on it and follow the prompts to enable 2-Step Verification
   - You'll need to verify your phone number
   - Google will send you a verification code
5. Complete the setup process

**Why this is needed:** Gmail requires 2-Step Verification to be enabled before you can generate App Passwords.

## Step 2: Generate an App Password

1. Go to Google App Passwords: https://myaccount.google.com/apppasswords
   - Or navigate: Google Account → Security → 2-Step Verification → App passwords
2. You may be asked to sign in again
3. Under "Select app", choose **Mail**
4. Under "Select device", choose **Other (Custom name)**
5. Type a name like "MARGT Website" or "Next.js Project"
6. Click **Generate**
7. **IMPORTANT:** Copy the 16-character password that appears (it will look like: `abcd efgh ijkl mnop`)
   - You won't be able to see this password again!
   - Remove the spaces when using it (it should be 16 characters without spaces)

## Step 3: Create Environment Variables File

1. In your project root directory (`/home/laiba/margt/margt-site/`), create a file named `.env.local`
   - This file is already in `.gitignore`, so it won't be committed to git

2. Add the following content to `.env.local`:

```env
# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=rana.margt339@gmail.com
SMTP_PASSWORD=your-16-character-app-password-here

# Email address where form submissions will be sent
CONTACT_EMAIL=rana.margt339@gmail.com
```

3. Replace `your-16-character-app-password-here` with the App Password you generated in Step 2
   - Make sure to remove any spaces from the password

**Example:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=rana.margt339@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
CONTACT_EMAIL=rana.margt339@gmail.com
```

## Step 4: Install Dependencies

Make sure you have the required packages installed:

```bash
npm install
```

This will install `nodemailer` and other dependencies if they're not already installed.

## Step 5: Test the Email Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your website in a browser (usually http://localhost:3000)

3. Fill out a contact form on your website

4. Submit the form

5. Check your Gmail inbox (rana.margt339@gmail.com) for the form submission email

6. Also check your **Spam/Junk folder** if you don't see it in your inbox

## Troubleshooting

### "Authentication failed" Error
- **Problem:** Wrong password or 2-Step Verification not enabled
- **Solution:** 
  - Verify 2-Step Verification is enabled
  - Generate a new App Password
  - Make sure you're using the App Password (not your regular Gmail password)
  - Check that there are no spaces in the password in `.env.local`

### "Connection timeout" Error
- **Problem:** Network or firewall blocking SMTP
- **Solution:**
  - Check your internet connection
  - Try using port 465 with `secure: true` (see alternative configuration below)

### "Email not received"
- **Problem:** Email might be in spam or wrong email address
- **Solution:**
  - Check spam/junk folder
  - Verify `CONTACT_EMAIL` in `.env.local` is correct
  - Check server console for error messages

### "Less secure app access" Error
- **Problem:** This shouldn't happen with App Passwords, but if it does:
- **Solution:** Make sure you're using an App Password, not your regular password

## Alternative Configuration (Port 465 - SSL)

If port 587 doesn't work, you can use port 465 with SSL:

In `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=rana.margt339@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=rana.margt339@gmail.com
```

Then update `pages/api/send-email.ts`:
- Change `secure: false` to `secure: true` (for port 465)

## Security Notes

⚠️ **Important Security Tips:**

1. **Never commit `.env.local` to git** - It's already in `.gitignore`
2. **Never share your App Password** - Treat it like your regular password
3. **If you suspect your App Password is compromised:**
   - Go to https://myaccount.google.com/apppasswords
   - Revoke the compromised password
   - Generate a new one
4. **For production:** Consider using environment variables provided by your hosting platform (Vercel, Netlify, etc.) instead of `.env.local`

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Go to your hosting platform's dashboard
2. Navigate to Environment Variables settings
3. Add the same variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `CONTACT_EMAIL`
4. Use the same values as in your `.env.local` file
5. Redeploy your application

## Quick Reference

- **Gmail SMTP Settings:**
  - Host: `smtp.gmail.com`
  - Port: `587` (TLS) or `465` (SSL)
  - Username: Your Gmail address
  - Password: App Password (not regular password)

- **App Password Generation:** https://myaccount.google.com/apppasswords
- **2-Step Verification:** https://myaccount.google.com/security

## Need Help?

If you encounter issues:
1. Check the server console for error messages
2. Verify all environment variables are set correctly
3. Test with a simple email first
4. Check Gmail's security settings

