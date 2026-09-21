const fs=require('node:fs');
const path=require('node:path');
const dir=path.join(__dirname,'assets','work');
const data=JSON.parse(fs.readFileSync(path.join(dir,'catalog.json'),'utf8'));
fs.writeFileSync(path.join(dir,'catalog.js'),'// Local file preview data. Regenerate after editing catalog.json.\nwindow.PORTFOLIO_CATALOG = '+JSON.stringify(data)+';\n');
console.log('Updated file preview catalog.');
