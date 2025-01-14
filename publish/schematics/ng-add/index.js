"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addThemeToAppStyles = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const ast_1 = require("../utils/ast");
const custom_theme_1 = require("../utils/custom-theme");
const config_1 = require("../utils/devkit-utils/config");
const lib_versions_1 = require("../utils/lib-versions");
const package_1 = require("../utils/package");
const project_targets_1 = require("../utils/project-targets");
const ADD_CONFIG = {
    LESS_VERSION: '^2.7.3',
    CUSTOM_THEME_PATH: 'src/theme.less',
    COMPILED_THEME_PATH: 'node_modules/ng-zorro-antd-mobile/src/ng-zorro-antd-mobile.min.css',
    BOOT_PAGE_PATH: 'src/app/app.component.html',
    BOOT_PAGE_HTML: `<!-- NG-ZORRO-MOBILE -->
<a href="https://github.com/NG-ZORRO/ng-zorro-antd-mobile" target="_blank" style="display: flex;align-items: center;justify-content: center;height: 100%;width: 100%;">
  <img height="300" src="https://img.alicdn.com/tfs/TB15EhGJwHqK1RjSZFPXXcwapXa-500-539.png">
</a>`
};
function default_1(options) {
    return schematics_1.chain([
        options && options.skipPackageJson ? schematics_1.noop() : addZorroToPackageJson(),
        setBootstrapPage(),
        addThemeToAppStyles(options),
        addModulesToAppModule(options),
        (options && !options.skipPackageJson) || (options && !options.theme) ? installNodeDeps() : schematics_1.noop()
    ]);
}
exports.default = default_1;
/** 添加 ng-zorro-antd-mobile 到 package.json 的 dependencies */
function addZorroToPackageJson() {
    return (host) => {
        package_1.addPackageToPackageJson(host, 'dependencies', 'ng-zorro-antd-mobile', lib_versions_1.zorroVersion);
        return host;
    };
}
/** 添加 BrowserAnimationsModule FormsModule HttpClientModule NgZorroAntdMobileModule 到 app.module */
function addModulesToAppModule(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = config_1.getProjectFromWorkspace(workspace, options.project);
        ast_1.addModuleImportToRootModule(host, 'BrowserAnimationsModule', '@angular/platform-browser/animations', project);
        ast_1.addModuleImportToRootModule(host, 'FormsModule', '@angular/forms', project);
        ast_1.addModuleImportToRootModule(host, 'HttpClientModule', '@angular/common/http', project);
        ast_1.addModuleImportToRootModule(host, 'NgZorroAntdMobileModule', 'ng-zorro-antd-mobile', project);
        return host;
    };
}
/** 添加样式配置 */
function addThemeToAppStyles(options) {
    return function (host) {
        const workspace = config_1.getWorkspace(host);
        const project = config_1.getProjectFromWorkspace(workspace, options.project);
        if (options.theme) {
            insertCustomTheme(project, host, workspace);
        }
        else {
            insertCompiledTheme(project, host, workspace);
        }
        return host;
    };
}
exports.addThemeToAppStyles = addThemeToAppStyles;
/** 将预设样式写入 theme.less，并添加到 angular.json */
function insertCustomTheme(project, host, workspace) {
    const themePath = ADD_CONFIG.CUSTOM_THEME_PATH;
    const customTheme = custom_theme_1.createCustomTheme();
    if (host.exists(themePath)) {
        const beforeContent = host.read(themePath).toString('utf8');
        if (beforeContent.indexOf(customTheme) === -1) {
            host.overwrite(themePath, `${customTheme}\n${beforeContent}`);
        }
    }
    else {
        host.create(themePath, custom_theme_1.createCustomTheme());
    }
    if (project.targets || project.architect) {
        addStyleToTarget('build', host, workspace, project, themePath, ADD_CONFIG.COMPILED_THEME_PATH);
        addStyleToTarget('test', host, workspace, project, themePath, ADD_CONFIG.COMPILED_THEME_PATH);
    }
    else {
        throw new schematics_1.SchematicsException(`${project.name} does not have an architect or targets configuration`);
    }
}
/** 设置引导页面到 app.component.ts */
function setBootstrapPage() {
    return (host) => {
        host.overwrite(ADD_CONFIG.BOOT_PAGE_PATH, ADD_CONFIG.BOOT_PAGE_HTML);
        return host;
    };
}
/** 安装依赖 */
function installNodeDeps() {
    return (host, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
/** 将编译的 css 添加到 angular.json */
function insertCompiledTheme(project, host, workspace) {
    const themePath = ADD_CONFIG.COMPILED_THEME_PATH;
    if (project.targets || project.architect) {
        addStyleToTarget('build', host, workspace, project, themePath);
        addStyleToTarget('test', host, workspace, project, themePath);
    }
    else {
        throw new schematics_1.SchematicsException(`${project.name} does not have an architect or targets configuration`);
    }
}
/** Adds a style entry to the given target. */
function addStyleToTarget(targetName, host, workspace, project, asset, exclude = '') {
    const styleEntry = asset;
    const targetOptions = project_targets_1.getProjectTargetOptions(project, targetName);
    // We can't assume that any of these properties are defined, so safely add them as we go
    // if necessary.
    if (!targetOptions.styles) {
        targetOptions.styles = [styleEntry];
    }
    else {
        const existingStyles = targetOptions.styles.map(s => typeof s === 'string' ? s : s.input);
        const hasGivenTheme = existingStyles.find(s => s.includes(asset));
        if (exclude) {
            const removeIndex = targetOptions.styles.indexOf(exclude);
            if (removeIndex >= 0) {
                targetOptions.styles.splice(removeIndex, 1);
            }
        }
        if (!hasGivenTheme) {
            targetOptions.styles.splice(0, 0, styleEntry);
        }
    }
    host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
}
//# sourceMappingURL=index.js.map