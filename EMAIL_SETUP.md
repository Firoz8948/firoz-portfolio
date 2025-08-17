# Email Setup Guide

## How to Receive Contact Form Messages

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Set Up Gmail App Password

**Important:** You need to use an "App Password" for Gmail, not your regular password.

1. **Enable 2-Factor Authentication** on your Google account
2. Go to **Google Account settings** > **Security** > **App passwords**
3. Generate a new app password for "Mail"
4. Copy the generated password

### 3. Create Environment File

Create a `.env` file in your project root:

```env
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password-here
```

### 4. Update Your Email in app.py

In `app.py`, update the default email:

```python
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', 'your-actual-email@gmail.com')
```

### 5. Test the Contact Form

1. Run your Flask app: `python app.py`
2. Fill out the contact form on your website
3. Check your email for the message

### Alternative Email Providers

If you don't want to use Gmail, you can use other providers:

**Outlook/Hotmail:**
```python
app.config['MAIL_SERVER'] = 'smtp-mail.outlook.com'
app.config['MAIL_PORT'] = 587
```

**Yahoo:**
```python
app.config['MAIL_SERVER'] = 'smtp.mail.yahoo.com'
app.config['MAIL_PORT'] = 587
```

### Security Notes

- Never commit your `.env` file to version control
- Use app passwords, not regular passwords
- Consider using environment variables in production

