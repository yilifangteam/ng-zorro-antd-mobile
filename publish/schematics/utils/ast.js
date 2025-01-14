"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findModuleFromOptions = exports.getStylesPath = exports.getIndexHtmlPath = exports.addModuleImportToModule = exports.addModuleImportToRootModule = exports.getSourceFile = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const ts = require("typescript");
const ast_utils_1 = require("./devkit-utils/ast-utils");
const change_1 = require("./devkit-utils/change");
const config_1 = require("./devkit-utils/config");
const ng_ast_utils_1 = require("./devkit-utils/ng-ast-utils");
const find_module_1 = require("./devkit-utils/find-module");
const project_main_file_1 = require("./project-main-file");
const project_targets_1 = require("./project-targets");
/** Reads file given path and returns TypeScript source file. */
function getSourceFile(host, path) {
    const buffer = host.read(path);
    if (!buffer) {
        throw new schematics_1.SchematicsException(`Could not find file for path: ${path}`);
    }
    const content = buffer.toString();
    return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
}
exports.getSourceFile = getSourceFile;
/** Import and add module to root app module. */
function addModuleImportToRootModule(host, moduleName, src, project) {
    const modulePath = ng_ast_utils_1.getAppModulePath(host, project_main_file_1.getProjectMainFile(project));
    addModuleImportToModule(host, modulePath, moduleName, src);
}
exports.addModuleImportToRootModule = addModuleImportToRootModule;
/**
 * Import and add module to specific module path.
 * @param host the tree we are updating
 * @param modulePath src location of the module to import
 * @param moduleName name of module to import
 * @param src src location to import
 */
function addModuleImportToModule(host, modulePath, moduleName, src) {
    const moduleSource = getSourceFile(host, modulePath);
    if (!moduleSource) {
        throw new schematics_1.SchematicsException(`Module not found: ${modulePath}`);
    }
    const changes = ast_utils_1.addImportToModule(moduleSource, modulePath, moduleName, src);
    const recorder = host.beginUpdate(modulePath);
    changes.forEach((change) => {
        if (change instanceof change_1.InsertChange) {
            recorder.insertLeft(change.pos, change.toAdd);
        }
    });
    host.commitUpdate(recorder);
}
exports.addModuleImportToModule = addModuleImportToModule;
/** Gets the app index.html file */
function getIndexHtmlPath(host, project) {
    const buildOptions = project_targets_1.getProjectTargetOptions(project, 'build');
    if (buildOptions.index && buildOptions.index.endsWith('index.html')) {
        return buildOptions.index;
    }
    throw new schematics_1.SchematicsException('No index.html file was found.');
}
exports.getIndexHtmlPath = getIndexHtmlPath;
/** Get the root stylesheet file. */
function getStylesPath(host, project) {
    const buildOptions = project_targets_1.getProjectTargetOptions(project, 'build');
    if (buildOptions && buildOptions.styles && buildOptions.styles.length) {
        const styles = buildOptions.styles.map(s => typeof s === 'string' ? s : s.input);
        // First, see if any of the assets is called "styles.(le|sc|c)ss", which is the default
        // "main" style sheet.
        const defaultMainStylePath = styles.find(a => /styles\.(c|le|sc)ss/.test(a));
        if (defaultMainStylePath) {
            return core_1.normalize(defaultMainStylePath);
        }
        // If there was no obvious default file, use the first style asset.
        const fallbackStylePath = styles.find(a => /\.(c|le|sc)ss/.test(a));
        if (fallbackStylePath) {
            return core_1.normalize(fallbackStylePath);
        }
    }
    throw new schematics_1.SchematicsException('No style files could be found into which a theme could be added');
}
exports.getStylesPath = getStylesPath;
/** Wraps the internal find module from options with undefined path handling  */
function findModuleFromOptions(host, options) {
    const workspace = config_1.getWorkspace(host);
    if (!options.project) {
        options.project = Object.keys(workspace.projects)[0];
    }
    const project = workspace.projects[options.project];
    if (options.path === undefined) {
        options.path = `/${project.root}/src/app`;
    }
    return find_module_1.findModuleFromOptions(host, options);
}
exports.findModuleFromOptions = findModuleFromOptions;
//# sourceMappingURL=ast.js.map