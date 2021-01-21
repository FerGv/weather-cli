// Libraries
import chalk from 'chalk';

// API
import api from './api';

/**
 * Run main CLI process.
 */
async function main() {
  console.log(chalk.cyan('Weather API'));
  await api.getCurrentWeather('Mexico City');
}

main();
