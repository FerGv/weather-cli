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

  logInfo(`
    Running with following options:
      - City: ${city}
      - Export file: ${export_}
      - Filename: ${filename}

    Run -h, --help for a quick help.
  `);

  return {
    city,
    export_,
    filename,
  };
}
