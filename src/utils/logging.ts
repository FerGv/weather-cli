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
 * Log a success message into console.
 *
 * @param error - The raised error.
 */
export function logSuccess(error: string): void {
  console.log(chalk.green(error));
}
