#!/usr/bin/env python3
"""
Test Email Configuration
"""

import os
from dotenv import load_dotenv

def test_env_loading():
    """Test if environment variables are loaded correctly"""
    
    print("=== Email Configuration Test ===")
    
    # Load environment variables
    load_dotenv()
    
    # Check if .env file exists
    if not os.path.exists('.env'):
        print("❌ .env file not found!")
        print("Please create a .env file with your email credentials.")
        return False
    
    # Check email credentials
    username = os.environ.get('MAIL_USERNAME')
    password = os.environ.get('MAIL_PASSWORD')
    
    print(f"📧 Email: {username}")
    print(f"🔑 Password: {'***' if password else 'NOT SET'}")
    
    if not username or username == 'your-email@gmail.com':
        print("❌ Email not configured properly")
        return False
    
    if not password or password == 'your-app-password':
        print("❌ App Password not configured")
        return False
    
    print("✅ Environment variables loaded successfully!")
    return True

def test_flask_mail():
    """Test Flask-Mail configuration"""
    
    print("\n=== Flask-Mail Test ===")
    
    try:
        from flask import Flask
        from flask_mail import Mail
        
        # Create test app
        app = Flask(__name__)
        
        # Email configuration
        app.config['MAIL_SERVER'] = 'smtp.gmail.com'
        app.config['MAIL_PORT'] = 587
        app.config['MAIL_USE_TLS'] = True
        app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
        app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
        
        # Initialize mail
        mail = Mail(app)
        
        print("✅ Flask-Mail configured successfully!")
        print(f"📧 Server: {app.config['MAIL_SERVER']}")
        print(f"🔌 Port: {app.config['MAIL_PORT']}")
        print(f"🔒 TLS: {app.config['MAIL_USE_TLS']}")
        
        return True
        
    except ImportError as e:
        print(f"❌ Flask-Mail not installed: {e}")
        print("Please run: pip install Flask-Mail==0.9.1")
        return False
    except Exception as e:
        print(f"❌ Flask-Mail configuration error: {e}")
        return False

def main():
    """Main test function"""
    
    print("🧪 Testing email configuration...\n")
    
    # Test 1: Environment variables
    env_ok = test_env_loading()
    
    if not env_ok:
        print("\n📝 To fix this:")
        print("1. Create a .env file in your project root")
        print("2. Add your Gmail credentials:")
        print("   MAIL_USERNAME=your-email@gmail.com")
        print("   MAIL_PASSWORD=your-app-password")
        print("3. Get an App Password from Google Account settings")
        return
    
    # Test 2: Flask-Mail
    mail_ok = test_flask_mail()
    
    if mail_ok:
        print("\n🎉 All tests passed!")
        print("Your email configuration should work now.")
        print("\nNext steps:")
        print("1. Run: python app.py")
        print("2. Test the contact form")
        print("3. Check your email for messages")
    else:
        print("\n❌ Some tests failed. Please fix the issues above.")

if __name__ == "__main__":
    main()

