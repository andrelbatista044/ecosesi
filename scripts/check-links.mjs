import fs from 'node:fs';
import path from 'node:path';
const pages=[];
function walk(dir){for(const f of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,f.name);if(f.isDirectory())walk(p);else if(p.endsWith('.html'))pages.push(p);}}
walk('dist');
const broken=[];
for(const p of pages){const html=fs.readFileSync(p,'utf8');for(const match of html.matchAll(/href="(\/[^"#?]*)[^\"]*"/g)){const url=decodeURIComponent(match[1]);const target=path.join('dist',url);if(!fs.existsSync(target)&&!fs.existsSync(path.join(target,'index.html')))broken.push({page:p,url});}}
console.log(JSON.stringify({pages:pages.length,brokenLinks:broken},null,2));
if(broken.length)process.exit(1);
