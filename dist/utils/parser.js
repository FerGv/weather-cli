"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showHelp = exports.parseArguments = void 0;
// Libraries
var minimist_1 = __importDefault(require("minimist"));
// Utils
var logging_1 = require("./logging");
/**
 * Process arguments and return an object with parsed options.
 *
 * @param argv - The list of arguments.
 */
function parseArguments(argv) {
    var parsedArgv = minimist_1.default(argv);
    var city = parsedArgv.c || parsedArgv.city || 'Dallas';
    var export_ = parsedArgv.e || parsedArgv.export || false;
    var filename = parsedArgv.f || parsedArgv.filename || 'weather.csv';
    var help = parsedArgv.h || parsedArgv.help || false;
    if (!help) {
        logging_1.logInfo("\n      Running with following options:\n        - City: " + city + "\n        - Export file: " + export_ + "\n        - Filename: " + filename + "\n\n      Run -h, --help for a quick help.\n    ");
    }
    return {
        city: city,
        export_: export_,
        filename: filename,
        help: help,
    };
}
exports.parseArguments = parseArguments;
/**
 * Show help about CLI options.
 */
function showHelp() {
    console.log("\n    Weather CLI\n\n    Options:\n    -c, --city          Set city to look for weather information. Default: Dallas.\n    -e, --export        Export weather information as a CSV file called 'weather.csv'.\n    -f, --filename      Name for exported file. Only available when export option is set. Default: weather.csv\n\n    Examples:\n    $ node dist/index.js -c Mexico City\n    $ weather-cli --city Mexico City\n  ");
}
exports.showHelp = showHelp;
