const fs = require('fs');
const source = 'output/plutotv_br.m3u8';
const target = 'output/plutotv_br_vita.m3u';
const lines = fs.readFileSync(source, 'utf8').replace(/\r/g, '').split('\n');
const result = ['#EXTM3U'];
for (let i = 0; i < lines.length; i++) {
  if (!lines[i].startsWith('#EXTINF:')) continue;
  const name = lines[i].slice(lines[i].lastIndexOf(',') + 1).trim();
  const url = lines.slice(i + 1).find(line => line.trim() && !line.startsWith('#'));
  if (!name || !url) continue;
  result.push('#EXTINF:-1,' + name, url.trim());
}
fs.writeFileSync(target, result.join('\r\n') + '\r\n');
console.log('Vita-compatible simplified playlist:', (result.length - 1) / 2, 'channels');
