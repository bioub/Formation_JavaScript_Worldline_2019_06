const fs = require('fs-extra');
const path = require('path');
const md5 = require('md5');
const UglifyJS = require('uglify-es');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

// function rmAndMkdir(path) {
//   return fs.remove(path)
//             .then(() => fs.mkdir(path));
// }
async function rmAndMkdir(path) {
  await fs.remove(path);
  await fs.mkdir(path);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  await fs.writeFile(appJsDistPath, Buffer.concat(buffers));
}

async function buildHtml() {
  const buffer = await fs.readFile(indexHtmlPath);
  let content = buffer.toString();

  const distTag = '<script src="app.js"></script>';
  const regex = /<script.*<\/script>/s;
  content = content.replace(regex, distTag);

  await fs.writeFile(indexHtmlDistPath, content);
}

(async () => {
  await rmAndMkdir(distPath);
  await Promise.all([
    buildJs(),
    buildHtml(),
  ]);
  console.log('DONE');
})();

