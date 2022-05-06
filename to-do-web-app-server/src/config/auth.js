import 'dotenv/config';

export default {
  jwt: {
    secret: process.env.SECRET_TOKEN,
    expiresIn: '1d'
  }
}