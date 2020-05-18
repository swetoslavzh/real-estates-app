export default {
  development: {
    port: process.env.PORT || 5000,
    path: 'mongodb://localhost:27017/real-estates',
    uploadDIR: './uploads/'
  },
  production: { }
} as any