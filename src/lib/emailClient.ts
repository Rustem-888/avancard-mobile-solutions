
import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_91fucbj";
const EMAILJS_TEMPLATE_ID = "template_ev9m8qk";
const EMAILJS_PUBLIC_KEY = "inLZxKxQHdmID6jKJ";

export interface EmailData {
  name: string;
  phone: string;
  message: string;
  [key: string]: string; // Add index signature to make it compatible with Record<string, unknown>
}

// Initialize EmailJS only on first function call
let isInitialized = false;

export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  try {
    // Initialize EmailJS only once
    if (!isInitialized) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      isInitialized = true;
    }
    
    console.log("Sending email with data:", data);
    
    // Send email directly from the client
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      data
    );
    
    console.log("Email sent successfully:", result.text);
    return { success: true, message: "Сообщение успешно отправлено" };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, message: "Ошибка отправки сообщения" };
  }
}
