import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.join(__dirname, 'src', 'pages');

const volumeToNumber = (volText) => {
    if (volText.includes('III')) return '03';
    if (volText.includes('II')) return '02';
    if (volText.includes('I')) return '01';
    if (volText.includes('IV')) return '04';
    return '01';
};

function processJsx(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Matcher le header
    const headerRegex = /<header className="[^"]+-header">[\s\S]*?<span className="mono-label">([^•]+)\s+•\s+([^<]+)<\/span>[\s\S]*?<h1 className="title-large">([^<]+)<\/h1>[\s\S]*?<\/header>/g;
    
    let hasChanged = false;
    content = content.replace(headerRegex, (match, category, volume, title) => {
        hasChanged = true;
        const cat = category.trim().toUpperCase();
        const num = volumeToNumber(volume);
        const t = title.trim();
        
        return `<div className="museum-label">
                <div className="label-meta">
                    <span className="label-number">${num}</span>
                    <span className="label-category">${cat}</span>
                </div>
                <h1 className="label-title">${t}</h1>
                <div className="label-divider"></div>
            </div>`;
    });
    
    if (hasChanged) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated JSX: ${path.basename(filePath)}`);
    } else {
        // Fallback for headers without mono-label standard format
        const fallbackRegex = /<header className="[^"]+-header">[\s\S]*?<h1[^>]*>([^<]+)<\/h1>[\s\S]*?<\/header>/g;
        content = content.replace(fallbackRegex, (match, title) => {
            hasChanged = true;
            return `<div className="museum-label">
                <div className="label-meta">
                    <span className="label-number">00</span>
                    <span className="label-category">EXPOSITION</span>
                </div>
                <h1 className="label-title">${title.trim()}</h1>
                <div className="label-divider"></div>
            </div>`;
        });
        if (hasChanged) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Updated JSX (Fallback): ${path.basename(filePath)}`);
        }
    }
}

function processCss(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let hasChanged = false;

    const oldHeaderRegex = /\.(?:[a-z0-9-]+-)?header\s*\{[\s\S]*?\}(?:\n|\r\n)*/g;
    if (oldHeaderRegex.test(content)) {
        content = content.replace(oldHeaderRegex, '');
        hasChanged = true;
    }

    const titleLargeRegex = /\.title-large\s*\{[\s\S]*?\}(?:\n|\r\n)*/g;
    if (titleLargeRegex.test(content)) {
        content = content.replace(titleLargeRegex, '');
        hasChanged = true;
    }

    const subtitleSerifRegex = /\.subtitle-serif\s*\{[\s\S]*?\}(?:\n|\r\n)*/g;
    if (subtitleSerifRegex.test(content)) {
        content = content.replace(subtitleSerifRegex, '');
        hasChanged = true;
    }

    const monoLabelRegex = /\.mono-label\s*\{[\s\S]*?\}(?:\n|\r\n)*/g;
    if (monoLabelRegex.test(content)) {
        content = content.replace(monoLabelRegex, '');
        hasChanged = true;
    }
    
    const containerRegex = /(\.[a-z0-9-]+(?:-page|-container|)-page|\.[a-z0-9-]+\s*\{)([^}]+)\}/i;
    let containerMatch = content.match(containerRegex);
    
    // Instead of regex hacking for padding: let's replace exact strings found in all page container CSS block.
    // I know they look like padding: 0 7vw;
    if (/padding:\s*0\s+7vw;/i.test(content)) {
        content = content.replace(/padding:\s*0\s+7vw;/gi, "padding: 15vh 7vw 0 7vw;");
        hasChanged = true;
    }

    if (hasChanged) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated CSS: ${path.basename(filePath)}`);
    }
}

const files = globSync('**/*.{jsx,css}', { cwd: pagesDir, absolute: true });
files.forEach(f => {
    if (f.endsWith('.jsx')) processJsx(f);
    if (f.endsWith('.css')) processCss(f);
});

console.log("Done.");
