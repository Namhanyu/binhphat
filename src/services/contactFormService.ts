import { GOOGLE_SHEETS_CONFIG } from '../config/googleSheets';

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  address?: string;
  message?: string;
}

export interface SubmissionData extends ContactFormData {
  timestamp: string;
  source: string;
}

export class ContactFormService {
  private static validateData(data: ContactFormData): void {
    if (!data.name?.trim()) {
      throw new Error('Vui lòng nhập họ tên');
    }
    
    if (!data.phone?.trim()) {
      throw new Error('Vui lòng nhập số điện thoại');
    }
    
    if (!data.email?.trim()) {
      throw new Error('Vui lòng nhập email');
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Email không hợp lệ');
    }
    
    // Basic phone validation (Vietnamese phone numbers)
    const phoneRegex = /^(\+84|84|0)?[1-9]\d{8,9}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
      throw new Error('Số điện thoại không hợp lệ');
    }
  }

  static async submitForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // Validate data
      this.validateData(data);

      // Prepare submission data
      const submissionData: SubmissionData = {
        ...data,
        timestamp: new Date().toISOString(),
        source: GOOGLE_SHEETS_CONFIG.DEFAULT_SOURCE
      };

      // Create timeout promise
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), GOOGLE_SHEETS_CONFIG.TIMEOUT);
      });

      // Submit to Google Sheets
      const submitPromise = fetch(GOOGLE_SHEETS_CONFIG.SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      // Race between submit and timeout
      await Promise.race([submitPromise, timeoutPromise]);

      // Since mode is 'no-cors', we can't read the response
      // We'll assume success if no error is thrown
      return {
        success: true,
        message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.'
      };

    } catch (error) {
      console.error('Error submitting contact form:', error);
      
      if (error instanceof Error) {
        if (error.message === 'Timeout') {
          return {
            success: false,
            message: 'Yêu cầu bị timeout. Vui lòng thử lại sau.'
          };
        }
        return {
          success: false,
          message: error.message
        };
      }
      
      return {
        success: false,
        message: 'Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.'
      };
    }
  }

  static async submitFormWithRetry(data: ContactFormData, retries = GOOGLE_SHEETS_CONFIG.MAX_RETRIES): Promise<{ success: boolean; message: string }> {
    for (let i = 0; i < retries; i++) {
      try {
        const result = await this.submitForm(data);
        if (result.success) {
          return result;
        }
        
        // If it's a validation error, don't retry
        if (result.message.includes('không hợp lệ') || result.message.includes('Vui lòng nhập')) {
          return result;
        }
        
        // If it's the last retry, return the error
        if (i === retries - 1) {
          return result;
        }
        
      } catch (error) {
        // If it's the last retry, throw the error
        if (i === retries - 1) {
          throw error;
        }
        
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
    
    return {
      success: false,
      message: 'Không thể gửi thông tin sau nhiều lần thử. Vui lòng thử lại sau.'
    };
  }
}