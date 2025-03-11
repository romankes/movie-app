const fs = require('fs/promises');
const path = require('path');
const prettier = require('prettier');

const root = process.cwd();
const modulesFolder = path.join(root, 'modules');
const readline = require('readline');

(async () => {
  const rl = new readline.Interface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = (question) => new Promise((resolve, reject) => {
    rl.question(`${question}\n`, (name) => {
      (name ? resolve : reject)(name);
    });
  })

  const appName = await askQuestion('What is app name?');
  const owner = await askQuestion('What is app owner?');
  const scheme = await askQuestion('What is app scheme?');
  const packageId = await askQuestion('What is package id?');
  const bundleId = await askQuestion('What is bundle id?');
  const slug = await askQuestion('What is slug');

  const developmentExpoProjectId = await askQuestion('What is development export project id?');
  const stagingExpoProjectId = await askQuestion('What is staging export project id?');
  const productionExpoProjectId = await askQuestion('What is production export project id?');

  rl.close();

  const getConfig = async (configName) => {
    const result = await fs.readFile(path.join(root, 'config', 'environments', `${configName}.json`))

    console.log(result);
    

    return JSON.parse(result.toString());
  }

  const [common, development, staging, production] = await Promise.all(['common', 'development', 'staging', 'production'].map(getConfig));
  
  const newCommon = {
    ...common,
    scheme,
    owner
  }

  const newDevelopment = {
    ...development,
    name: `${appName} (development)`,
    slug: `${slug}-development`,
    ios: {
      ...development.ios,
      bundleIdentifier: `${bundleId}.development`
    },
    android: {
      ...development.android,
      package: `${packageId}.development`
    },
    extra:{ 
      ...development.extra,
      eas: {
        ...development.extra.eas,
        projectId: developmentExpoProjectId
      }
    }
  }

  const newStaging = {
    ...development,
    name: `${appName} (staging)`,
    slug: `${slug}-staging`,
    ios: {
      ...staging.ios,
      bundleIdentifier: `${bundleId}.staging`
    },
    android: {
      ...staging.android,
      package: `${packageId}.staging`
    },
    extra:{ 
      ...staging.extra,
      eas: {
        ...staging.extra.eas,
        projectId: stagingExpoProjectId
      }
    }
  }

  const newProduction = {
    ...production,
    name: `${appName}`,
    slug: `${slug}`,
    ios: {
      ...production.ios,
      bundleIdentifier: bundleId
    },
    android: {
      ...production.android,
      package: `${packageId}`
    },
    extra:{ 
      ...production.extra,
      eas: {
        ...production.extra.eas,
        projectId: productionExpoProjectId
      }
    }
  }

  const updateEnvironment = async (name, environment) => {
    const content = await prettier.format(JSON.stringify(environment), { parser: 'json' })
    await fs.writeFile(path.join(root, 'config', 'environments', `${name}.json`), content)
  }

  await Promise.all([
    ['common', newCommon], 
    ['development', newDevelopment], 
    ['staging', newStaging],
    ['production', newProduction]
  ].map(([name, environment]) => updateEnvironment(name, environment)));

})();