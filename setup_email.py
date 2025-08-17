#!/usr/bin/env python3
"""
Email Setup Script for Portfolio Contact Form
"""

import os
import sys

def create_env_file():
    """Create .env file with email configuration"""
    
    print("=== Portfolio Email Setup ===")
    print("\nThis script will help you set up email functionality for your contact form.")
    print("\nYou'll need:")
    print("1. A Gmail account")
    print("2. 2-Factor Authentication enabled on your Gmail")
    print("3. An App Password generated for 'Mail'")
    
    print("\n" + "="*50)
    
    # Get email credentials
    email = input("\nEnter your Gmail address: ").strip()
    if not email or '@gmail.com' not in email:
        print("❌ Please enter a valid Gmail address")
        return False
    
    password = input("Enter your Gmail App Password: ").strip()
    if not password:
        print("❌ Please enter your App Password")
        return False
    
    # Create .env file content
    env_content = f"""# Email Configuration
MAIL_USERNAME={email}
MAIL_PASSWORD={password}

# Note: This file contains sensitive information
# Never commit this file to version control
"""
    
    # Write .env file
    try:
        with open('.env', 'w') as f:
            f.write(env_content)
        print("\n✅ .env file created successfully!")
        return True
    except Exception as e:
        print(f"❌ Error creating .env file: {e}")
        return False

def update_app_py():
    """Update app.py with the user's email"""
    
    print("\n" + "="*50)
    print("Updating app.py with your email...")
    
    try:
        # Read current app.py
        with open('app.py', 'r') as f:
            content = f.read()
        
        # Update the default email
        email = input("Enter your email again for app.py default: ").strip()
        if not email:
            print("❌ Please enter your email")
            return False
        
        # Replace the default email in app.py
        old_line = "app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', 'your-email@gmail.com')"
        new_line = f"app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', '{email}')"
        
        content = content.replace(old_line, new_line)
        
        # Write updated app.py
        with open('app.py', 'w') as f:
            f.write(content)
        
        print("✅ app.py updated successfully!")
        return True
        
    except Exception as e:
        print(f"❌ Error updating app.py: {e}")
        return False

def install_dependencies():
    """Install required dependencies"""
    
    print("\n" + "="*50)
    print("Installing dependencies...")
    
    try:
        import subprocess
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'Flask-Mail==0.9.1'])
        print("✅ Flask-Mail installed successfully!")
        return True
    except Exception as e:
        print(f"❌ Error installing dependencies: {e}")
        print("Please run: pip install Flask-Mail==0.9.1")
        return False

def main():
    """Main setup function"""
    
    print("🚀 Setting up email functionality for your portfolio...")
    
    # Step 1: Install dependencies
    if not install_dependencies():
        return
    
    # Step 2: Create .env file
    if not create_env_file():
        return
    
    # Step 3: Update app.py
    if not update_app_py():
        return
    
    print("\n" + "="*50)
    print("🎉 Setup completed successfully!")
    print("\nNext steps:")
    print("1. Make sure your .env file is in your project root")
    print("2. Run your Flask app: python app.py")
    print("3. Test the contact form on your website")
    print("4. Check your email for messages")
    
    print("\n⚠️  Important:")
    print("- Never commit your .env file to version control")
    print("- Keep your App Password secure")
    print("- The .env file is already added to .gitignore")

if __name__ == "__main__":
    main()

