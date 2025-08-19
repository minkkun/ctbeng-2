import React, { useState } from "react";
import SectionHeading from '@/components/shared/SectionHeading';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactUs = (props: Props) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using our custom API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "ti-home",
      title: "Our Location",
      content: "123 Business Street, City, State 12345",
      link: null
    },
    {
      icon: "ti-tablet",
      title: "Phone Number",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "ti-email",
      title: "Email Address",
      content: "info@yourcompany.com",
      link: "mailto:info@yourcompany.com"
    }
  ];

  return (
    <section className="contact-section area-padding">
      <div className="container">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible." 
        />
        
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="form-contact contact_form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        type="text"
                        placeholder="Subject *"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        rows={6}
                        placeholder="Your Message *"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="form-group mt-4">
                  <button 
                    type="submit" 
                    className="button button-contactForm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-3">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-3">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="contact-info-wrapper">
              <h4 className="mb-4">Contact Information</h4>
              {contactInfo.map((info, index) => (
                <div key={index} className="media contact-info mb-4">
                  <span className="contact-info__icon">
                    <i className={info.icon}></i>
                  </span>
                  <div className="media-body">
                    <h5>{info.title}</h5>
                    {info.link ? (
                      <a href={info.link}>{info.content}</a>
                    ) : (
                      <p>{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="business-hours mt-5">
                <h5>Business Hours</h5>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
