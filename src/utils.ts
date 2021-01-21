// Libraries
import chalk from 'chalk';
import figlet from 'figlet';

/**
 * Log an error into console.
 *
 * @param error - The raised error.
 */
export function logError(error: string): void {
  console.log(chalk.red(error));
}

/**
 * Transform a text into its ASCII representation.
 *
 * @param text - The text to transform.
 */
export function asciiText(text: string): Promise<string> {
  return new Promise((resolve) => {
    figlet(text, (err, data = '') => {
      if (err) resolve(text);

      resolve(data);
    });
  });
}
