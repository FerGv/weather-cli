// Libraries
import minimist from 'minimist';

// Interfaces
import { Argv, MinimistArgv } from '../interfaces';

// Utils
import { logInfo } from './logging';

/**
 * Process arguments and return an object with parsed options.
 *
 * @param argv - The list of arguments.
 */
export function parseArguments(argv: string[]): Argv {
  const parsedArgv: MinimistArgv = minimist(argv);
  const city: string = parsedArgv.c || parsedArgv.city || 'Dallas';
  const export_: boolean = parsedArgv.e || parsedArgv.export || false;
  const filename: string = parsedArgv.f || parsedArgv.filename || 'weather.csv';
  const help: boolean = parsedArgv.h || parsedArgv.help || false;

  if (!help) {
    logInfo(`
      Running with following options:
        - City: ${city}
        - Export file: ${export_}
        - Filename: ${filename}

      Run -h, --help for a quick help.
    `);
  }

  return {
    city,
    export_,
    filename,
    help,
  };
}

/**
 * Show help about CLI options.
 */
export function showHelp(): void {
  console.log(`
    Weather CLI

    Options:
    -c, --city          Set city to look for weather information. Default: Dallas.
    -e, --export        Export weather information as a CSV file called 'weather.csv'.
    -f, --filename      Name for exported file. Only available when export option is set. Default: weather.csv

    Examples:
    $ node dist/index.js -c Mexico City
    $ weather-cli --city Mexico City
  `);
}
