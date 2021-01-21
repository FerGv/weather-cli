// Libraries
import dotenv from 'dotenv';

dotenv.config();

export default {
  API_KEY: process.env.WEATHER_API_KEY,
  API_URL: 'http://api.weatherapi.com/v1/',
};
