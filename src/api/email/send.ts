
/*
import { Request, Response } from 'express';
import { sendEmail, EmailData } from '../../lib/emailService';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не разрешен' });
  }

  try {
    const data = req.body;
    console.log("Received email request with data:", data);
    
    // Check for required fields
    if (!data.name || !data.phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Отсутствуют обязательные поля (имя и телефон)' 
      });
    }
    
    // Set default value for message if not provided
    if (!data.message) {
      data.message = 'Без комментария';
    }
    
    const result = await sendEmail(data as EmailData);
    
    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json(result);
    }
  } catch (error) {
    console.error('Ошибка API отправки email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Внутренняя ошибка сервера при отправке email'
    });
  }
}
*/

// Этот API файл больше не используется.
// Отправка писем перенесена на клиентскую сторону с использованием emailClient.ts

