"use client";

import emailjs from "@emailjs/browser";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration missing");
      return false;
    }

    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        name: data.name,
        email: data.email,
        message: data.message,
        to_name: "Ben Ko",
      },
      publicKey
    );

    return result.status === 200;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};