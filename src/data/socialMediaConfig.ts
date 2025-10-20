// Cấu hình cho Social Media Float Widget
export const socialMediaConfig = {
  // Liên kết Zalo - thay số điện thoại thực tế
  zalo: {
    link: "https://zalo.me/0987538455",
    enabled: true
  },
  
  // Liên kết Facebook Page - thay tên page thực tế  
  facebook: {
    link: "https://facebook.com/binhphatcon/",
    enabled: true
  },
  
  // Cấu hình hiển thị
  display: {
    position: "bottom-right", // bottom-right, bottom-left, top-right, top-left
    showPulseEffect: true, // Hiệu ứng pulse khi load trang
    showOnMobile: true, // Hiển thị trên mobile
    hideOnScroll: false // Ẩn khi scroll down
  }
};

// Thông tin liên hệ khác (có thể mở rộng thêm)
export const contactInfo = {
  phone: "0123 456 789",
  email: "info@binhphat.com",
  address: "Địa chỉ công ty Bình Phát"
};