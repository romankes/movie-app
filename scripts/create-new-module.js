const fs = require('fs/promises');
const path = require('path');
const prettier = require('prettier');

const root = process.cwd();
const modulesFolder = path.join(root, 'modules');
const readline = require('readline');

const createPartOfModule = async (modulePath, name) => {
  const folderPath = path.join(modulePath, name);

  await fs.mkdir(folderPath);
  await fs.writeFile(path.join(folderPath, 'index.ts'), 'export {};\n');
};

(async () => {
  const rl = new readline.Interface({
    input: process.stdin,
    output: process.stdout,
  });

  const name = await new Promise((resolve, reject) => {
    rl.question('What is module name?\n', (name) => {
      (name ? resolve : reject)(name);
    });
  });

  const newModulePath = path.join(modulesFolder, name);

  try {
    await fs.mkdir(newModulePath);
    rl.close();
  } catch (e) {
    await new Promise((resolve, reject) => {
      rl.question('Do you want to override? Please type y/n\n', (name) => {
        (name === 'y' || !name ? resolve : reject)(name);
        rl.close();
      });
    });

    await fs.rm(newModulePath, { force: true, recursive: true });
    await fs.mkdir(newModulePath);
  }

  await Promise.all([
    createPartOfModule(newModulePath, 'components'),
    createPartOfModule(newModulePath, 'screens'),
    createPartOfModule(newModulePath, 'hooks'),
    createPartOfModule(newModulePath, 'types'),
    createPartOfModule(newModulePath, 'utils'),
    createPartOfModule(newModulePath, 'api'),
    createPartOfModule(newModulePath, 'icons'),
    createPartOfModule(newModulePath, 'assets'),
    createPartOfModule(newModulePath, 'store'),

  ]);

  const tsConfigBuffer = await fs.readFile(path.join(root, 'tsconfig.json'));

  const tsConfig = JSON.parse(tsConfigBuffer.toString());

  const newTsConfig = {
    ...tsConfig,
    compilerOptions: {
      ...tsConfig.compilerOptions,
      paths: {
        ...tsConfig.compilerOptions.paths,
        [`@${name}/*`]: [`./modules/${name}/*`],
      },
    },
  };

  const newtsConfigString = JSON.stringify(newTsConfig);

  await fs.writeFile(
    path.join(root, 'tsconfig.json'),
    await prettier.format(newtsConfigString, { parser: 'json' }),
  );
})();