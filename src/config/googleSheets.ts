// Configuration for Google Sheets integration
export const GOOGLE_SHEETS_CONFIG = {
  // Thay URL này bằng URL từ Google Apps Script deployment của bạn
  // Xem hướng dẫn trong file GOOGLE_SHEETS_SETUP.md
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbyfNgD2rPKlE3xrFH3LRiYK_z7h8EBFXdpgGBzb_tA3Z8gBn_DzCk0c5gEe6WVZ-jX3/exec',
  
  // Timeout cho request (milliseconds)
  TIMEOUT: 10000,
  
  // Retry attempts
  MAX_RETRIES: 3,
  
  // Default form values
  DEFAULT_SOURCE: 'Website Contact Form',
};