const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const folder = path.join(process.cwd(), "public", "home");

async function convert() {
  const files = fs.readdirSync(folder)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file));

  for (const file of files) {
    const input = path.join(folder, file);
    const output = path.join(
      folder,
      path.basename(file, path.extname(file)) + ".webp"
    );

    try {
      await sharp(input)
        .webp({
          quality: 88,
          effort: 6
        })
        .toFile(output);

      const originalSize = fs.statSync(input).size;
      const newSize = fs.statSync(output).size;

      console.log(
        `${file}  ?  ${path.basename(output)}  |  ` +
        `${(originalSize / 1024 / 1024).toFixed(2)} MB ? ` +
        `${(newSize / 1024 / 1024).toFixed(2)} MB`
      );
    } catch (error) {
      console.error(`ERROR: ${file}`, error.message);
    }
  }
}

convert();
