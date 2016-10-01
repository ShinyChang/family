const config = {
  port: process.env.PORT || 80,
  is_production:  process.env.NODE_ENV === 'production',
  facebook_app_id: process.env.FACEBOOK_APP_ID || '304098793298503',
  api_server: process.env.API_URL || 'localhost:3001'
};
export default config;
