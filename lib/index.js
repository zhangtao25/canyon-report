const fs = require("fs");
const path = require("path");

class CoverageReport {
  constructor(options = {}) {
    this.cacheDirName = ".cache";
    this.constructorOptions = options;
    this.options = {
      ...options,
    };
    this.initOptions();
  }

  initOptions(force) {
    console.log("initOptions");
  }

  async add(data) {
    const time_start = Date.now();
    this.initOptions();
    return {};
  }

  async generate() {
    const time_start = Date.now();
    this.initOptions();

    console.log("generate report");

    const sourceDir = path.resolve(__dirname, "../node_modules/canyon-report/dist");
    const targetDir = path.join(process.cwd(), "coverage"); // 目标目录使用当前工作目录

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    } else {
      fs.rmSync(targetDir, { recursive: true });
      fs.mkdirSync(targetDir, { recursive: true });
    }

    function copyFile(source, target) {
      const readStream = fs.createReadStream(source);
      const writeStream = fs.createWriteStream(target);
      readStream.pipe(writeStream);
    }

    function copyDirectory(source, target) {
      fs.readdirSync(source).forEach((file) => {
        const sourcePath = path.join(source, file);
        const targetPath = path.join(target, file);
        if (fs.statSync(sourcePath).isDirectory()) {
          if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath, { recursive: true });
          }
          copyDirectory(sourcePath, targetPath);
        } else {
          copyFile(sourcePath, targetPath);
        }
      });
    }

    copyDirectory(sourceDir, targetDir);
    console.log("文件复制完成！");

    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="static-data/summary.js"></script>
    <script src="v.mjs"></script>
  </body>
</html>
`;

    fs.writeFileSync(path.join(targetDir, "index.html"), html);

    return {};
  }
}

const CCR = function (options) {
  return new CoverageReport(options);
};
module.exports = CCR;
