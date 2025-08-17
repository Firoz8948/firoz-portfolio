from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv
from datetime import datetime

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', 'firoz8948@gmail.com')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD', 'your-app-password')

mail = Mail(app)

# Portfolio data
portfolio_data = {
            "personal_info": {
            "name": "FIROZ KHAN",
            "title": "Software Developer",
            "email": "firoz8948@gmail.com",
            "phone": "Please contact me for my phone number",
            "location": "Mumbai, India",
            "github": "https://github.com/firoz8948",
            "linkedin": "https://linkedin.com/in/firoz8948",
            "summary": "Passionate software developer with expertise in full-stack development, specializing in modern web technologies and creating innovative solutions."
        },
    "skills": {
        "programming_languages": ["JavaScript", "Python", "TypeScript", "C++"],
        "frontend": ["HTML5", "CSS3", "Angular", "Vue.js", "Bootstrap"],
        "backend": ["Flask", "Node.js", "FastAPI"],
        "databases": ["PostgreSQL", "MySQL", "SQLite"],
        "tools": ["Git", "AWS", "VS Code", "Postman"]
    },
    "experience": [
        {
            "company": "Sandhya Technology Solutions and Operations LLP",
            "position": "Senior Software Developer",
            "duration": "2025 - Present",
            "description": "Development of web applications using Angular and Flask. Implemented CI/CD pipelines",
            "technologies": ["HTML5", "CSS3", "Vue.js", "Angular", "Flask", "PostgreSQL", "AWS"]
        },
        # {
        #     "company": "Startup XYZ",
        #     "position": "Full Stack Developer",
        #     "duration": "2020 - 2022",
        #     "description": "Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality software.",
        #     "technologies": ["JavaScript", "Python", "React", "Node.js", "MongoDB"]
        # },
        # {
        #     "company": "Digital Solutions",
        #     "position": "Junior Developer",
        #     "duration": "2018 - 2020",
        #     "description": "Built responsive web interfaces and implemented backend APIs. Participated in code reviews and agile development processes.",
        #     "technologies": ["HTML", "CSS", "JavaScript", "Python", "MySQL"]
        # }
    ],
    "projects": [
        {
            "title": "Gym Management System",
            "description": "A secure Flask-based Gym Management System with admin-controlled member registration, auto-generated unique codes, and real-time subscription tracking.",
            "technologies": ["Angular", "Flask", "PostgreSQL", "HTML5", "CSS3"],
            "github": "https://github.com/yourusername/ecommerce-platform",
            "live": "https://ecommerce-demo.com"
        },
        {
            "title": "My Portfolio",
            "description": "A collaborative task management application with real-time updates and team collaboration features.",
            "technologies": ["React", "Node.js", "Socket.io", "MongoDB"],
            "github": "https://github.com/yourusername/task-manager",
            "live": "https://task-manager-demo.com"
        },
        {
            "title": "Weather Dashboard",
            "description": "A weather application that displays current weather and forecasts using external APIs.",
            "technologies": ["JavaScript", "HTML", "CSS", "Weather API"],
            "github": "https://github.com/yourusername/weather-app",
            "live": "https://weather-demo.com"
        }
    ],
    "education": [
        {
            "degree": "Bachelor of Engineering in Computer Science",
            "institution": "DY Patil College Of Engineering",
            "duration": "2021 - 2024",
            "description": "7.9 CGPA"
        },
        {
            "degree": "Diploma in Computer Science",
            "institution": "Sou. Venutai Chavan Polytechnic",
            "duration": "2019 - 2021",
            "description": "Percentage = 83%"
        },
        # {
        #     "degree": "HSC (12th), Science",
        #     "institution": "Pt. Nagesh Dutt Public School",
        #     "duration": "2017 - 2018",
        #     # "description": "Percentage = 83%"
        # },
        # {
        #     "degree": "SSC (10th)",
        #     "institution": "Pt. Nagesh Dutt Public School",
        #     "duration": "2015 - 2016",
        #     "description": "10 CGPA"
        # }
    ],
    "certifications": [
        {
            "name": "Quasar Hackathon",
            "issuer": "Vasantdada Patil Pratishthan's College of Engineering",
            "year": "2023"
        },
        # {
        #     "name": "Angular Developer Certification",
        #     "issuer": "Google",
        #     "year": "2022"
        # }
    ]
}

# Store contact messages (simple in-memory storage)
contact_messages = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/portfolio')
def get_portfolio():
    return jsonify(portfolio_data)

@app.route('/api/personal-info')
def get_personal_info():
    return jsonify(portfolio_data['personal_info'])

@app.route('/api/skills')
def get_skills():
    return jsonify(portfolio_data['skills'])

@app.route('/api/experience')
def get_experience():
    return jsonify(portfolio_data['experience'])

@app.route('/api/projects')
def get_projects():
    return jsonify(portfolio_data['projects'])

@app.route('/api/education')
def get_education():
    return jsonify(portfolio_data['education'])

@app.route('/api/certifications')
def get_certifications():
    return jsonify(portfolio_data['certifications'])

@app.route('/api/contact', methods=['POST'])
def handle_contact_form():
    try:
        data = request.get_json()
        
        # Extract form data
        name = data.get('name', '')
        email = data.get('email', '')
        subject = data.get('subject', '')
        message = data.get('message', '')
        
        # Validate required fields
        if not all([name, email, subject, message]):
            return jsonify({'success': False, 'message': 'All fields are required'}), 400
        
        # Store the message (in production, you'd save to a database)
        contact_data = {
            'name': name,
            'email': email,
            'subject': subject,
            'message': message,
            'timestamp': datetime.now().isoformat()
        }
        contact_messages.append(contact_data)
        
        # Log the contact form submission
        print(f"New contact form submission: {name} ({email}) - {subject}")
        
        return jsonify({
            'success': True, 
            'message': 'Thank you! Your message has been received. I will get back to you soon!'
        })
        
    except Exception as e:
        print(f"Error handling contact form: {e}")
        return jsonify({
            'success': False, 
            'message': 'Thank you for your message! I have received it and will respond soon.'
        }), 200

# Add route to view contact messages (for admin purposes)
@app.route('/api/contact-messages')
def get_contact_messages():
    return jsonify(contact_messages)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
