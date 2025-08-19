import type { NextApiRequest, NextApiResponse } from 'next';

type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message }: ContactData = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Log the contact form data (for testing purposes)
    console.log('📧 Contact Form Submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Return success response
    res.status(200).json({ 
      message: 'Email sent successfully (test mode)',
      data: { name, email, subject, message }
    });
  } catch (error) {
    console.error('Error in test contact form:', error);
    res.status(500).json({ message: 'Failed to process contact form' });
  }
} 