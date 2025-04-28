// const themeDir = __dirname; // Dòng này không còn cần thiết theo cách cũ

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    // Đường dẫn bây giờ là file config ở thư mục gốc
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer')(
      // Bỏ path nếu không cần thiết hoặc để __dirname nếu autoprefixer cần biết vị trí hiện tại
      // { path: [__dirname] }
    )
  ]
}

module.exports = config