#!/usr/bin/env node

// Libraries
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import { table } from 'table';

// API
import api from './api';

// Interfaces
import { CsvRow } from './interfaces';

// Utils
import { exportToCsv } from './utils/file';
import { parseArguments } from './utils/parser';

/**
 * Run main CLI process.
 */
async function main() {
  clear();
  const title: string = figlet.textSync('Weather CLI');
  console.log(chalk.cyan(title));
  const { city, export_, filename } = parseArguments(process.argv.slice(2));
  const rows: CsvRow[] = await api.getCurrentWeather(city);

  if (!rows.length) process.exit();

  console.log(table(rows));

  if (export_) {
    exportToCsv(rows, filename);
  }
}

main();
