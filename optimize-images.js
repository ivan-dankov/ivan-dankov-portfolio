
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('src/assets');

async function optimizeImages() {
    console.log('Scanning for images in:', assetsDir);

    let files = [];
    try {
        files = getAllFiles(assetsDir);
    } catch (e) {
        console.error("Error scanning files:", e);
        return;
    }

    const imageFiles = files.filter(file => /\.(png|jpg|jpeg)$/i.test(file));

    console.log(`Found ${imageFiles.length} images to optimize.`);

    for (const file of imageFiles) {
        const ext = path.extname(file);
        const newFile = path.join(path.dirname(file), path.basename(file, ext) + '.webp');

        console.log(`Optimizing: ${path.relative(process.cwd(), file)} -> ${path.relative(process.cwd(), newFile)}`);

        try {
            await sharp(file)
                .webp({ quality: 80 })
                .toFile(newFile);
            console.log('✓ Created webp');
        } catch (err) {
            console.error('✗ Failed to optimize:', file, err);
        }
    }
}

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

optimizeImages();
