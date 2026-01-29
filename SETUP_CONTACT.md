# Setting Up Contact Form Email Functionality

## Overview
The contact form in this portfolio supports both email and Telegram notifications. Follow these steps to properly configure the contact form for email sending.

## Environment Variables Setup

### Step 1: Copy the Example Environment File
```bash
cp .env.example .env
```

### Step 2: Configure Email Settings
For email functionality, you need to set up Gmail with an App Password:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Navigate to Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. **Update your .env file**:
```env
EMAIL_ADDRESS=your_actual_gmail@gmail.com
GMAIL_PASSKEY=your_16_character_app_password
```

### Step 3: (Optional) Configure Telegram Notifications
If you want Telegram notifications in addition to email:

1. **Create a Telegram Bot**:
   - Contact @BotFather on Telegram
   - Use `/newbot` command to create a new bot
   - Note down the Bot Token
2. **Get your Chat ID**:
   - Send a message to your bot
   - Visit `https://api.telegram.org/bot<TOKEN>/getUpdates` to get your chat ID
3. **Update your .env file**:
```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

### Step 4: Set Your Application URL
Set the application URL in your .env file:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000  # For development
# or
NEXT_PUBLIC_APP_URL=https://yourdomain.com  # For production
```

## Testing the Contact Form

After setting up the environment variables:

1. Restart your development server:
```bash
npm run dev
```

2. Fill out the contact form on your website
3. Check your email for the received message
4. (If configured) Check Telegram for the notification

## Troubleshooting

### Common Issues:

1. **Email not sending**:
   - Verify your Gmail App Password is correct
   - Ensure your Gmail account has 2FA enabled
   - Check that your EMAIL_ADDRESS and GMAIL_PASSKEY are correctly set

2. **"Contact form is not properly configured" error**:
   - Make sure all required environment variables are set
   - Restart the server after changing .env file

3. **Gmail "Less Secure Apps" Error**:
   - Use App Passwords instead of your regular password
   - Enable 2FA on your account

### Security Notes:
- Never commit your .env file to version control
- Keep your App Passwords secure
- Use strong passwords for your accounts

## Alternative Email Services
While this setup is configured for Gmail, you can modify the transporter configuration in `app/api/contact/route.js` to work with other email services like SendGrid, Mailgun, or AWS SES by changing the host, port, and authentication settings.