// Libraries
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

// API
import api from './api';

/**
 * Run main CLI process.
 */
async function main() {
  clear();
  const title = figlet.textSync('Weather CLI');
  console.log(chalk.cyan(title));
  await api.getCurrentWeather('Mexico City');
}

main();
