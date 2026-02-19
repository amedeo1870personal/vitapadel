import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = [
    // Hero & Base
    { name: 'hero-structure.jpg', url: 'https://static.wixstatic.com/media/28ba11_f299c2c8304a4133a53af459ccb70e75f000.jpg' },
    { name: 'logo-gold.png', url: 'https://static.wixstatic.com/media/28ba11_a2fe2d229086427aa5764e9bb9d79e5f~mv2.png' },

    // Campi
    { name: 'campo-standard.png', url: 'https://static.wixstatic.com/media/28ba11_61e505d4986c439bb665427eb4ab2d96~mv2.png' },
    { name: 'campo-panoramico.png', url: 'https://static.wixstatic.com/media/28ba11_d03d5420bb9a44cab85138fe4e6ebd16~mv2.png' },
    { name: 'campo-superpanoramico.png', url: 'https://static.wixstatic.com/media/28ba11_36d87f751334412593c1d1c6e6a6f608~mv2.png' },
    { name: 'campo-render-1.jpg', url: 'https://static.wixstatic.com/media/28ba11_8bf647ddadcc4db190ef56cdfa64d099~mv2.jpeg' },
    { name: 'campo-render-2.jpg', url: 'https://static.wixstatic.com/media/28ba11_8babf9038bae404682dd8699a67aeaaf~mv2.jpeg' },

    // Coperture Sub-sections
    { name: 'copertura-alluminio.jpg', url: 'https://static.wixstatic.com/media/28ba11_36cddd25d8a148039cd979be18cb8aff~mv2.jpeg' },
    { name: 'copertura-legno.jpg', url: 'https://static.wixstatic.com/media/28ba11_a1d420448ef043a3952910e8a64dd1b5~mv2.jpg' },
    { name: 'copertura-telescopica.jpg', url: 'https://static.wixstatic.com/media/28ba11_ebc4bc05d8bb4a688e35e0e29ef7fe85~mv2.jpg' },
    { name: 'fondazioni-platea.png', url: 'https://static.wixstatic.com/media/28ba11_e1c52d9cda88460dba405ae54847e8ed~mv2.png' },

    // Coperture General
    { name: 'copertura-main-1.jpg', url: 'https://static.wixstatic.com/media/28ba11_cf2c011aca3742938c62db044b646e1a~mv2.jpg' },
    { name: 'copertura-main-2.png', url: 'https://static.wixstatic.com/media/28ba11_bac8fcfa964e40bfaddc22210d889f9e~mv2.png' },

    // Accessori
    { name: 'palline-premium.png', url: 'https://static.wixstatic.com/media/28ba11_2bb253a1fdfb4a8985d8312f7f9489f2~mv2.png' }
];

const downloadDir = path.resolve('public/assets');

if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve(dest));
            });
        }).on('error', (err) => {
            fs.unlink(dest);
            reject(err);
        });
    });
};

(async () => {
    console.log('Starting asset download...');
    for (const asset of assets) {
        const dest = path.join(downloadDir, asset.name);
        try {
            await downloadFile(asset.url, dest);
            console.log(`Downloaded ${asset.name}`);
        } catch (err) {
            console.error(`Failed to download ${asset.name}:`, err.message);
        }
    }
    console.log('All downloads completed.');
})();
