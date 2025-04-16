
import { Request, Response } from 'express';
import { sendEmail, EmailData } from '../../lib/emailService';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Метод не разрешен' });
  }

  try {
    const data = req.body as EmailData;
    
    // Проверка обязательных полей
    if (!data.from_name || !data.phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Отсутствуют обязательные поля (имя и телефон)' 
      });
    }
    
    // Установка значения по умолчанию для сообщения
    if (!data.message) {
      data.message = 'Без комментария';
    }
    
    const result = await sendEmail(data);
    
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
