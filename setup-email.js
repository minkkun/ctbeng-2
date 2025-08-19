const fs = require('fs');
const path = require('path');

const envContent = `# Email Configuration
# Replace these placeholder values with your actual email credentials

# Your Gmail address
EMAIL_USER=your-email@gmail.com

# Your Gmail app password (NOT your regular password)
# To get an app password:
# 1. Enable 2-factor authentication on your Google account
# 2. Go to Google Account → Security → App passwords
# 3. Generate a new app password for "Mail"
EMAIL_PASS=your-app-password-here

# Email where you want to receive contact form inquiries
# (can be the same as EMAIL_USER or different)
CONTACT_EMAIL=your-email@gmail.com
`;

const envPath = path.join(__dirname, '.env.local');

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local file with email configuration template');
  console.log('📧 Please edit .env.local and add your actual email credentials');
  console.log('🔐 Remember to use an app password, not your regular Gmail password');
} else {
  console.log('⚠️  .env.local already exists. Please check if it contains the required email variables:');
  console.log('   - EMAIL_USER');
  console.log('   - EMAIL_PASS');
  console.log('   - CONTACT_EMAIL');
} 