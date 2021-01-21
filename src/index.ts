// Libraries
import chalk from 'chalk';
import clear from 'clear';

// API
import api from './api';

// Utils
import { asciiText } from './utils';

/**
 * Run main CLI process.
 */
async function main() {
  clear();
  const title = await asciiText('Weather CLI');
  console.log(chalk.cyan(title));
  await api.getCurrentWeather('Mexico City');
}

main();
