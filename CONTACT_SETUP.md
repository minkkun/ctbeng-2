# Contact Form Email Setup

## Overview
The contact form has been cleaned up and now includes proper email functionality. Here are the setup options:

## Option 1: Custom API with Nodemailer (Recommended)

### Setup Steps:

1. **Create Environment Variables**
   Create a `.env.local` file in your project root with:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CONTACT_EMAIL=your-email@gmail.com
   ```

2. **Gmail Setup (Recommended)**
   - Enable 2-factor authentication on your Gmail account
   - Generate an app password: Google Account → Security → App passwords
   - Use the app password in `EMAIL_PASS`

3. **Other Email Services**
   You can modify the transporter in `/src/pages/api/contact.ts` to use other services like:
   - Outlook/Hotmail
   - Yahoo
   - Custom SMTP servers

## Option 2: Formspree (Free Service)

1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Replace the fetch URL in `ContactUs.tsx`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

## Option 3: EmailJS (Client-side)

1. Install EmailJS: `npm install emailjs-com`
2. Sign up at [EmailJS.com](https://www.emailjs.com)
3. Configure your email service
4. Update the ContactUs component to use EmailJS

## Features Added:

✅ **Removed Google Maps** - Cleaner, faster loading
✅ **Modern Form Design** - Better UX with proper validation
✅ **Form State Management** - Loading states and success/error messages
✅ **Email Functionality** - Multiple options for sending emails
✅ **Responsive Design** - Works on all devices
✅ **Contact Information** - Clean display of business details
✅ **Business Hours** - Added business hours section

## Customization:

- Update contact information in the `contactInfo` array
- Modify business hours in the component
- Change email template in `/src/pages/api/contact.ts`
- Update styling by modifying CSS classes

The form is now much cleaner and more functional! 