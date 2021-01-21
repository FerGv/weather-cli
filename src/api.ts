// Libraries
import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Config
import config from './config';

// Interfaces
import { CsvRow, Weather } from './interfaces';

// Utils
import { logError } from './utils/logging';

/**
 * Consume 'Weather API'.
 */
class WeatherApi {
  request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: config.API_URL,
    });
  }

  /**
   * Get weather information about the provided city.
   *
   * @param city - The city's name to look for weather information.
   */
  async getCurrentWeather(city: string): Promise<CsvRow[]> {
    try {
      const res: AxiosResponse<Weather> = await this.request.get('current.json', {
        params: {
          key: config.API_KEY,
          q: city,
        },
      });
      const { location, current } = res.data;
      const rows: CsvRow[] = [
        ['Location', 'Temperature', 'Units', 'Precipitation'],
        [location.name, current.temp_c, 'C', !!current.precip_mm]
      ];

      return rows;
    } catch (error) {
      logError(error);
    }

    return [];
  }
}

export default new WeatherApi();
