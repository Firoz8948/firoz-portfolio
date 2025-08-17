# Quick Email Setup Guide

## 🚀 Manual Setup (if Python/pip issues)

### Step 1: Install Flask-Mail
If you have Python working, run:
```bash
pip install Flask-Mail==0.9.1
```

### Step 2: Get Gmail App Password
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security > App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### Step 3: Create .env File
Create a file named `.env` in your project root with:
```env
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-16-character-app-password
```

### Step 4: Update app.py
In `app.py`, find this line:
```python
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', 'your-email@gmail.com')
```

Change `'your-email@gmail.com'` to your actual Gmail address.

### Step 5: Test
1. Run: `python app.py`
2. Fill out the contact form
3. Check your email!

## 🔧 Alternative: Use the Setup Script
If Python is working, run:
```bash
python setup_email.py
```

This will guide you through the setup interactively.

## 📧 What You'll Receive
When someone fills your contact form, you'll get an email with:
- Their name, email, subject, and message
- Professional formatting
- Clear identification that it's from your portfolio

## 🛡️ Security Notes
- The .env file is automatically ignored by git
- Never share your App Password
- Use App Passwords, not regular passwords

