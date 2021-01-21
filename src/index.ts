// Libraries
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import minimist from 'minimist';
import { table } from 'table';

// API
import api from './api';

// Interfaces
import { Argv, CsvRow } from './interfaces';

// Utils
import { exportToCsv } from './utils/file';

/**
 * Run main CLI process.
 */
async function main() {
  clear();
  const title: string = figlet.textSync('Weather CLI');
  console.log(chalk.cyan(title));
  const argv: Argv = minimist(process.argv.slice(2));
  const city: string = argv.c || argv.city || 'Dallas';
  const export_: boolean = argv.e || argv.export || false;
  const rows: CsvRow[] = await api.getCurrentWeather(city);

  if (!rows.length) process.exit();

  console.log(table(rows));

  if (export_) {
    exportToCsv(rows);
  }
}

main();
