"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportToCsv = exports.getDefaultFilePath = exports.createFile = void 0;
// Node
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
// Utils
var logging_1 = require("./logging");
/**
 * Create and write content into a file.
 *
 * @param filepath - The file's path.
 * @param content - File's content as string.
 */
function createFile(filepath, content) {
    try {
        fs_1.default.writeFileSync(filepath, content);
        logging_1.logSuccess("File was created in " + filepath);
    }
    catch (error) {
        logging_1.logError("File could not be created in " + filepath);
        logging_1.logError(error);
    }
}
exports.createFile = createFile;
/**
 * Return a path to current working directory.
 *
 * @param filename - The file's name.
 */
function getDefaultFilePath(filename) {
    return path_1.default.join(process.cwd(), filename);
}
exports.getDefaultFilePath = getDefaultFilePath;
/**
 * Export data as a CSV file.
 *
 * @param rows - The CSV data.
 */
function exportToCsv(rows, filename) {
    var fileContent = rows.map(function (row) { return row.join(','); }).join('\n');
    var filePath = getDefaultFilePath(filename);
    createFile(filePath, fileContent);
}
exports.exportToCsv = exportToCsv;
