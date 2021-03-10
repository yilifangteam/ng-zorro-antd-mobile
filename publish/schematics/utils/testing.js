"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestApp = void 0;
const path_1 = require("path");
const testing_1 = require("@angular-devkit/schematics/testing");
const collectionPath = path_1.join('./node_modules/@schematics/angular/collection.json');
/**
 * Create a base app used for testing.
 */
function createTestApp() {
    return __awaiter(this, void 0, void 0, function* () {
        const baseRunner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        return yield baseRunner
            .runSchematicAsync('application', {
            directory: '',
            name: 'app',
            prefix: 'app',
            sourceDir: 'src',
            inlineStyle: false,
            inlineTemplate: false,
            viewEncapsulation: 'None',
            version: '1.2.3',
            routing: true,
            style: 'scss',
            skipTests: false,
            minimal: false
        })
            .toPromise();
    });
}
exports.createTestApp = createTestApp;
//# sourceMappingURL=testing.js.map