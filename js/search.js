// ========== GLOBAL SEARCH ==========

function openGlobalSearch() {
  document.getElementById('searchModal').style.display = 'flex';
  document.getElementById('globalSearchInput').value = '';
  document.getElementById('searchResults').innerHTML = '<p style="color:#888;text-align:center">Type to search EVO guns, entries, devices, news...</p>';
  setTimeout(() => document.getElementById('globalSearchInput').focus(), 100);
}

function doGlobalSearch() {
  const query = document.getElementById('globalSearchInput').value.trim().toLowerCase();
  const resultsDiv = document.getElementById('searchResults');
  
  if (!query) {
    resultsDiv.innerHTML = '<p style="color:#888;text-align:center">Type to search...</p>';
    return;
  }
  
  let results = [];
  
  // Search EVO guns
  evoGuns.forEach(g => {
    if (g.name.toLowerCase().includes(query) || g.desc.toLowerCase().includes(query)) {
      results.push({ type: '🔫 EVO Gun', name: g.name, price: g.price, action: `openEvoDetail('${g.name.replace(/'/g,"\\'")}')` });
    }
  });
  
  // Search Entries
  entries.forEach(e => {
    if (e.name.toLowerCase().includes(query) || e.desc.toLowerCase().includes(query)) {
      results.push({ type: '🎬 Entry', name: e.name, price: e.price, action: `openEntryDetail('${e.name.replace(/'/g,"\\'")}')` });
    }
  });
  
  // Search Devices
  deviceDB.forEach(d => {
    if (d.name.toLowerCase().includes(query) || d.brand.toLowerCase().includes(query)) {
      results.push({ type: '📱 Device', name: d.name, price: d.tier, action: `searchFromGlobal('${d.name.replace(/'/g,"\\'")}')` });
    }
  });
  
  // Search News
  newsDB.forEach(n => {
    if (n.title.toLowerCase().includes(query) || n.excerpt.toLowerCase().includes(query)) {
      results.push({ type: '📰 News', name: n.title.substring(0, 50) + '...', price: n.category, action: `openNewsFromSearch(${n.id})` });
    }
  });
  
  // Search Store
  storeItems.forEach(s => {
    if (s.name.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query)) {
      results.push({ type: '🛒 Store', name: s.name, price: s.price, action: `openOrder('${s.name.replace(/'/g,"\\'")}','${s.price}')` });
    }
  });
  
  if (results.length === 0) {
    resultsDiv.innerHTML = `<p style="color:#888;text-align:center">No results found for "${query}"</p>`;
    return;
  }
  
  resultsDiv.innerHTML = results.map(r => `
    <div onclick="${r.action}" style="display:flex;justify-content:space-between;align-items:center;padding:10px;border-bottom:1px solid rgba(255,107,0,.04);cursor:pointer;transition:all 0.2s" onmouseover="this.style.background='rgba(255,107,0,.04)'" onmouseout="this.style.background='transparent'">
      <div>
        <span style="color:var(--bl);font-size:9px;font-family:'Share Tech Mono',monospace">${r.type}</span>
        <p style="color:#ddd;font-size:11px">${r.name}</p>
      </div>
      <span style="color:var(--gd);font-size:10px;font-family:'Orbitron',sans-serif">${r.price}</span>
    </div>
  `).join('');
}

function searchFromGlobal(deviceName) {
  closeModal('searchModal');
  showPage('sensi');
  document.getElementById('deviceSearch').value = deviceName;
  searchDevice();
}

function openNewsFromSearch(id) {
  closeModal('searchModal');
  const news = newsDB.find(n => n.id === id);
  if (news) openNewsDetail(news);
}

function quickSearch() {
  const query = document.getElementById('homeSearch').value.trim();
  if (!query) {
    showSuccess('Please enter a search term');
    return;
  }
  openGlobalSearch();
  document.getElementById('globalSearchInput').value = query;
  doGlobalSearch();
}
