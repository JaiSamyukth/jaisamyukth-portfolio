// EmailJS wrapper for contact form
import emailjs from '@emailjs/browser';

interface ContactPayload {
  name: string;
  email: string;
  idea: string;
}

export async function sendContact(payload: ContactPayload): Promise<boolean> {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS configuration missing. Using mock success for development.');
      // Mock success for development
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: payload.name,
        from_email: payload.email,
        message: payload.idea,
        to_name: 'Samyukth',
      },
      publicKey
    );

    return response.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateContactForm(payload: ContactPayload): string | null {
  if (!payload.name || payload.name.length < 2 || payload.name.length > 60) {
    return 'Name must be between 2 and 60 characters';
  }

  if (!validateEmail(payload.email)) {
    return 'Please enter a valid email address';
  }

  if (!payload.idea || payload.idea.length < 20 || payload.idea.length > 1000) {
    return 'Idea must be between 20 and 1000 characters';
  }

  return null;
}
