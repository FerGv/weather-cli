// Node
import fs from 'fs';
import path from 'path';

// Interfaces
import { CsvRow } from '../interfaces';

// Utils
import { logError, logSuccess } from './logging';

/**
 * Create and write content into a file.
 *
 * @param filepath - The file's path.
 * @param content - File's content as string.
 */
export function createFile(filepath: string, content: string): void {
  try {
    fs.writeFileSync(filepath, content);
    logSuccess(`File was created in ${filepath}`);
  } catch (error) {
    logError(`File could not be created in ${filepath}`);
    logError(error);
  }
}

/**
 * Return a path to current working directory.
 *
 * @param filename - The file's name.
 */
export function getDefaultFilePath(filename: string): string {
  return path.join(process.cwd(), filename);
}

/**
 * Export data as a CSV file.
 *
 * @param rows - The CSV data.
 */
export function exportToCsv(rows: CsvRow[], filename: string): void {
  const fileContent = rows.map((row) => row.join(',')).join('\n');
  const filePath = getDefaultFilePath(filename);
  createFile(filePath, fileContent);
}
