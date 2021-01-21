// Libraries
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { table } from 'table';

// Config
import config from './config';

// Interfaces
import { CsvRow, Weather } from './interfaces';

// Utils
import { logError } from './utils/logging';
import { exportToCsv } from './utils/file';

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
  async getCurrentWeather(city: string) {
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
      console.log(table(rows));
      exportToCsv(rows);
    } catch (error) {
      logError(error);
    }
  }
}

export default new WeatherApi();
