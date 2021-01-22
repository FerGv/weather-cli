// Libraries
import chalk from 'chalk';

/**
 * Log an error into console.
 *
 * @param error - The raised error.
 */
export function logError(error: string): void {
  console.log(chalk.red(error));
}

/**
 * Log a info message into console.
 *
 * @param text - The raised text.
 */
export function logInfo(text: string): void {
  console.log(chalk.blue(text));
}

/**
 * Log a success message into console.
 *
 * @param text - The raised text.
 */
export function logSuccess(text: string): void {
  console.log(chalk.green(text));
}
