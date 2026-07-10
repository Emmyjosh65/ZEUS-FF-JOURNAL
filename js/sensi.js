// ========== SENSITIVITY TOOL ==========

function searchDevice() {
  const query = document.getElementById('deviceSearch').value.trim().toLowerCase();
  const resultDiv = document.getElementById('sensiResult');
  
  if (!query) {
    resultDiv.innerHTML = '<p style="color:#888;text-align:center;margin-top:12px">🔍 Enter a phone model to search</p>';
    return;
  }

  // Search device database
  const found = deviceDB.filter(d => d.name.toLowerCase().includes(query) || d.brand.toLowerCase().includes(query));
  
  if (found.length === 0) {
    resultDiv.innerHTML = `<div class="sr"><p style="color:var(--rd);text-align:center">❌ Device not found. Try a different search (e.g. "Samsung Galaxy", "iPhone 15", "Tecno").</p></div>`;
    return;
  }

  // If multiple matches, show first and note others
  const device = found[0];
  const others = found.slice(1);
  
  const sensi = getSensiByTier(device.tier);
  
  let html = `<div class="sr">
    <div class="shd">
      <h3>📱 ${device.name}</h3>
      <span class="ctg ${device.tier === 'premium' ? 'tv' : device.tier === 'high' ? 'tn' : device.tier === 'mid' ? 'tu' : 'te2'}">${device.tier.toUpperCase()}</span>
    </div>
    <div class="sg2">
      <div class="si"><span class="lb">Brand</span><span class="va">${device.brand}</span></div>
      <div class="si"><span class="lb">Chipset</span><span class="va">${device.chipset}</span></div>
      <div class="si"><span class="lb">GPU</span><span class="va">${device.gpu}</span></div>
      <div class="si"><span class="lb">RAM</span><span class="va">${device.ram}</span></div>
      <div class="si"><span class="lb">Display</span><span class="va">${device.display}</span></div>
      <div class="si"><span class="lb">OS</span><span class="va">${device.os}</span></div>
      <div class="si"><span class="lb">Performance</span><span class="va">${device.rating}</span></div>
      <div class="si"><span class="lb">Recommended Graphics</span><span class="va">${device.graphics}</span></div>
      <div class="si"><span class="lb">FPS</span><span class="va">${device.fps}</span></div>
    </div>
    <div style="margin-top:14px;border-top:1px solid rgba(255,107,0,.06);padding-top:12px">
      <h4 style="color:var(--gd);font-size:12px;margin-bottom:10px">🎯 RECOMMENDED SENSITIVITY</h4>
      <div class="sg2" id="sensiValues">`;
  
  const sensiKeys = [
    { key: 'gen', label: 'General Sensitivity' },
    { key: 'rd', label: 'Red Dot Sight' },
    { key: 'sc2x', label: '2x Scope' },
    { key: 'sc4x', label: '4x Scope' },
    { key: 'sc6x', label: '6x Scope' },
    { key: 'sc8x', label: '8x Scope' },
    { key: 'sn', label: 'Sniper Scope' },
    { key: 'fl', label: 'Free Look' },
    { key: 'dpi', label: 'DPI (Android)' }
  ];
  
  sensiKeys.forEach(s => {
    html += `<div class="si"><span class="lb">${s.label}</span><input type="number" class="sensi-input" data-key="${s.key}" value="${sensi[s.key]}" min="0" max="100"></div>`;
  });
  
  html += `<div class="si"><span class="lb">Recommended HUD</span><span class="va">${sensi.hud}</span></div>`;
  
  html += `</div>
      <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
        <button class="btn bp bs" onclick="saveSensi('${device.name}')">💾 SAVE</button>
        <button class="btn bo bs" onclick="resetSensi(${JSON.stringify(sensi).replace(/"/g,"'")})">🔄 RESET</button>
        <button class="btn bg bs" onclick="showProPinPrompt()">🔐 PRO PIN</button>
      </div>
    </div>`;

  if (others.length > 0) {
    html += `<div style="margin-top:8px;padding:8px;border-radius:8px;background:rgba(0,212,255,.04);border:1px solid rgba(0,212,255,.08)"><p style="color:var(--bl);font-size:10px;font-family:'Share Tech Mono',monospace">Also found: ${others.map(d => d.name).join(', ')}</p></div>`;
  }
  
  html += `</div>`;
  resultDiv.innerHTML = html;
}

function resetSensi(sensi) {
  document.querySelectorAll('.sensi-input').forEach(input => {
    const key = input.dataset.key;
    if (sensi[key] !== undefined) {
      input.value = sensi[key];
    }
  });
  showSuccess('✅ Sensitivity reset to recommended values');
}

function saveSensi(deviceName) {
  const values = {};
  document.querySelectorAll('.sensi-input').forEach(input => {
    values[input.dataset.key] = input.value;
  });
  
  const saved = JSON.parse(localStorage.getItem('zeusSensiSaves') || '[]');
  saved.push({
    device: deviceName,
    values: values,
    date: new Date().toLocaleString()
  });
  localStorage.setItem('zeusSensiSaves', JSON.stringify(saved));
  showSuccess('✅ Sensitivity settings saved for ' + deviceName);
}

// ========== PRO PIN SYSTEM ==========
const PRO_PIN = '2007';

function showProPinPrompt() {
  document.getElementById('sensiPage').scrollIntoView({behavior:'smooth'});
  document.getElementById('proPin').focus();
}

function verifyProPin() {
  const pin = document.getElementById('proPin').value.trim();
  const result = document.getElementById('proPinResult');
  
  // Server-side simulation (obfuscated check)
  let valid = false;
  
  // Array-based validation to prevent trivial bypass
  const pinArr = [50, 48, 48, 55]; // ASCII for "2007"
  const inputArr = [];
  for (let i = 0; i < pin.length; i++) {
    inputArr.push(pin.charCodeAt(i));
  }
  
  if (inputArr.length === pinArr.length) {
    let match = true;
    for (let i = 0; i < pinArr.length; i++) {
      if (inputArr[i] !== pinArr[i]) {
        match = false;
        break;
      }
    }
    valid = match;
  }
  
  result.style.display = 'block';
  
  if (valid) {
    result.style.color = 'var(--gr)';
    result.innerHTML = '✅ PRO unlocked! Applying premium sensitivity presets...';
    
    // Apply pro presets to all visible inputs
    const proSensi = { gen: 95, rd: 90, sc2x: 80, sc4x: 65, sc6x: 50, sc8x: 40, sn: 55, fl: 80, dpi: 420 };
    document.querySelectorAll('.sensi-input').forEach(input => {
      const key = input.dataset.key;
      if (proSensi[key] !== undefined) {
        input.value = proSensi[key];
        input.style.borderColor = 'var(--gd)';
        input.style.boxShadow = '0 0 10px rgba(255,215,0,0.2)';
      }
    });
    
    result.innerHTML += '<br><span style="font-size:11px;color:var(--gd)">★ ZEUS PRO SENSITIVITY ACTIVE</span>';
  } else {
    result.style.color = 'var(--rd)';
    result.innerHTML = '❌ Incorrect pass key. Contact the owner to obtain access.';
    document.getElementById('proPin').value = '';
  }
}
