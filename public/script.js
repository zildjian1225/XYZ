document.getElementById('attackBtn').addEventListener('click', async () => {
  const target = document.getElementById('targetInput').value;
  const mode = document.getElementById('modeSelect').value;
  const output = document.getElementById('output');

  if (!target) {
    output.textContent = '⚠️ MASUKIN TARGET DULU ANJING!';
    return;
  }

  output.textContent = '⚡ EXECUTING BUG...';

  try {
    const res = await fetch('/api/bug/' + (mode === 'all' ? 'all' : mode), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ target })
    });

    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);

    if (mode === 'crash') {
      output.textContent += '\n\n💀 CRASH ENGINE DEPLOYED!';
    } else if (mode === 'delay') {
      output.textContent += '\n\n⏳ TARGET DELAYED 99999 MS!';
    } else if (mode === 'band') {
      output.textContent += '\n\n🌊 BANDWIDTH DIBANJIRI 1TB!';
    } else if (mode === 'blank') {
      output.textContent += '\n\n👻 UI KORBAN TOTALLY BLANK!';
    } else {
      output.textContent += '\n\n💀 ALL BUGS DEPLOYED SIMULTANEOUSLY!';
    }

  } catch (err) {
    output.textContent = '🔴 ERROR: ' + err.message;
  }
});

// auto status
fetch('/api/status').then(r=>r.json()).then(data=>{
  document.getElementById('output').textContent = '💀 BUG XYZ ACTIVE\n' + JSON.stringify(data, null, 2);
});
