function delayFactory(target, ms) {
  const scripts = [
    `await new Promise(r=>setTimeout(r,${ms}));`,
    `for(let i=0;i<${ms/10};i++){console.log('DELAYING...');}`,
    `while(Date.now()<Date.now()+${ms}){/*HANG*/}`,
    `new Promise((_,reject)=>setTimeout(()=>reject('TIMEOUT'),${ms}))`
  ];
  
  return {
    status: '⏳ DELAY FACTORY ACTIVE',
    target: target,
    delay_ms: ms,
    script: scripts.join('\n'),
    effect: 'SEMUA PROSES HANG SELAMA ' + (ms/1000) + ' DETIK'
  };
}

module.exports = { delayFactory };
