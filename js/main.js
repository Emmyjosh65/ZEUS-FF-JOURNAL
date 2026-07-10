// ========== MAIN APPLICATION CONTROLLER ==========

// ===== PAGE NAVIGATION =====
function showPage(page) {
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('ac'));
  const target = document.getElementById(page + 'Page');
  if (target) target.classList.add('ac');
  
  // Update nav active state
  document.querySelectorAll('.nl a').forEach(a => a.classList.remove('ac'));
  const navMap = { home: 0, news: 1, evo: 2, entry: 3, sensi: 4, guides: 5, store: 6, community: 7, admin: 8 };
  const idx = navMap[page];
  if (idx !== undefined) {
    const links = document.querySelectorAll('.nl a');
    if (links[idx]) links[idx].classList.add('ac');
  }
  
  // Close mobile menu
  const nl = document.getElementById('nl');
  if (nl.style.display === 'flex' && window.innerWidth <= 768) {
    nl.style.display = '';
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
  const nl = document.getElementById('nl');
  if (nl.style.display === 'flex') {
    nl.style.display = '';
  } else {
    nl.style.cssText = 'display:flex;position:absolute;top:52px;left:0;width:100%;background:rgba(10,10,15,.98);flex-direction:column;padding:12px;border-bottom:1px solid rgba(255,107,0,.12);z-index:999';
    const links = nl.querySelectorAll('a');
    links.forEach(l => { l.style.padding = '8px 10px'; l.style.fontSize = '10px'; });
  }
}

// ===== MODALS =====
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

function showSuccess(msg) {
  document.getElementById('successMsg').textContent = msg;
  document.getElementById('successModal').style.display = 'flex';
}

// ===== EVO GUN DETAILS =====
function openEvoDetail(name) {
  const gun = evoGuns.find(g => g.name === name);
  if (!gun) return;
  
  const stars = '★'.repeat(gun.rating) + '☆'.repeat(5 - gun.rating);
  const statsHtml = Object.entries(gun.stats).map(([k, v]) => 
    `<div class="si"><span class="lb">${k.replace(/([A-Z])/g,' $1').replace(/^./, s => s.toUpperCase())}</span><span class="va">${v}</span></div>`
  ).join('');
  
  const newsHtml = gun.news.map(n => `<li style="margin-bottom:6px;font-size:11px;color:#bbb">📌 ${n}</li>`).join('');
  
  const html = `
    <div style="text-align:center;margin-bottom:12px">
      <div style="font-size:48px;margin-bottom:6px">${gun.icon}</div>
      <h3 style="color:var(--gd);font-size:18px">${gun.name}</h3>
      <div style="color:var(--gd);font-size:12px;margin:4px 0">${stars}</div>
      <span class="pr" style="font-size:20px">${gun.price}</span>
    </div>
    <p style="color:#ccc;font-size:12px;line-height:1.6;margin-bottom:14px">${gun.desc}</p>
    <div style="background:rgba(255,107,0,.04);border-radius:10px;padding:14px;margin-bottom:14px">
      <h4 style="color:var(--gd);font-size:11px;margin-bottom:8px">⚡ STATS</h4>
      <div class="sg2">${statsHtml}</div>
    </div>
    <div style="margin-bottom:14px">
      <h4 style="color:var(--gd);font-size:11px;margin-bottom:8px">📰 NEWS & UPDATES</h4>
      <ul style="padding-left:16px">${newsHtml}</ul>
    </div>
    <button class="btn bg" style="width:100%" onclick="closeModal('detailModal');openOrder('${gun.name.replace(/'/g,"\\'")}','${gun.price}')">🛒 PURCHASE NOW</button>
  `;
  
  document.getElementById('detailTitle').textContent = '⚡ ' + gun.name;
  document.getElementById('detailBody').innerHTML = html;
  document.getElementById('detailModal').style.display = 'flex';
}

function openEntryDetail(name) {
  const entry = entries.find(e => e.name === name);
  if (!entry) return;
  
  const effectsHtml = entry.effects.map(e => `<li style="margin-bottom:4px;font-size:11px;color:#bbb">✨ ${e}</li>`).join('');
  
  const html = `
    <div style="text-align:center;margin-bottom:12px">
      <div style="font-size:48px;margin-bottom:6px">${entry.icon}</div>
      <h3 style="color:var(--gd);font-size:18px">${entry.name}</h3>
      <span class="ctg ${entry.type === 'Mythic' ? 'tv' : entry.type === 'Legendary' ? 'tn' : 'te2'}">${entry.type}</span>
      <div style="margin-top:8px"><span class="pr" style="font-size:20px">${entry.price}</span></div>
    </div>
    <p style="color:#ccc;font-size:12px;line-height:1.6;margin-bottom:14px">${entry.desc}</p>
    <div style="background:rgba(0,255,136,.04);border-radius:10px;padding:14px;margin-bottom:14px">
      <h4 style="color:var(--gd);font-size:11px;margin-bottom:8px">🎬 EFFECTS</h4>
      <ul style="padding-left:16px">${effectsHtml}</ul>
    </div>
    <button class="btn bg" style="width:100%" onclick="closeModal('detailModal');openOrder('${entry.name.replace(/'/g,"\\'")}','${entry.price}')">🛒 PURCHASE NOW</button>
  `;
  
  document.getElementById('detailTitle').textContent = '🎬 ' + entry.name;
  document.getElementById('detailBody').innerHTML = html;
  document.getElementById('detailModal').style.display = 'flex';
}

// ===== NEWS SYSTEM =====
function renderNews() {
  const container = document.getElementById('allNews');
  document.getElementById('homeNews').innerHTML = '';
  document.getElementById('guidesGrid').innerHTML = '';
  
  // Home - latest 6 featured
  const homeNews = newsDB.filter(n => n.featured).slice(0, 6);
  homeNews.forEach(n => {
    const card = createNewsCard(n);
    document.getElementById('homeNews').appendChild(card);
  });
  
  // All news with filters
  renderFilteredNews('all');
  
  // Guides
  const guides = newsDB.filter(n => n.category === 'guide');
  guides.forEach(n => {
    const card = createNewsCard(n);
    document.getElementById('guidesGrid').appendChild(card);
  });
  
  // If no guides in newsDB, add default ones
  if (guides.length === 0) {
    const defaultGuides = [
      { title: 'Ultimate Headshot Guide', excerpt: 'Master your headshot aim with these pro settings and daily practice drills.', category: 'guide', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b62f2?w=400&h=250&fit=crop' },
      { title: 'Rank Push to Heroic', excerpt: 'Proven strategies to climb the ranks and reach Heroic tier this season.', category: 'guide', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop' },
      { title: 'Device Optimization Guide', excerpt: 'Boost FPS and reduce lag with these device optimization settings.', category: 'guide', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop' }
    ];
    defaultGuides.forEach(g => {
      const card = document.createElement('div');
      card.className = 'cd';
      card.innerHTML = `<div class="cimg" style="background:linear-gradient(135deg,var(--pu),#4a1b82)"><i class="fas fa-book"></i></div>
        <div class="cbd"><span class="ctg tg">GUIDE</span><h3>${g.title}</h3><p>${g.excerpt}</p></div>`;
      card.onclick = () => {
        document.getElementById('detailTitle').textContent = '📖 ' + g.title;
        document.getElementById('detailBody').innerHTML = `<div style="background:rgba(138,43,226,.06);padding:12px;border-radius:10px;margin-bottom:12px"><span class="ctg tg">GUIDE</span></div>
          <p style="color:#ccc;line-height:1.8;font-size:13px">${g.excerpt}. Practice consistently and use the ZEUS SENSI tool to find the perfect settings for your device. Join the community for more tips and coaching sessions.</p>`;
        document.getElementById('detailModal').style.display = 'flex';
      };
      document.getElementById('guidesGrid').appendChild(card);
    });
  }
}

function createNewsCard(n) {
  const card = document.createElement('div');
  card.className = 'cd';
  const catClass = { breaking: 'tv', update: 'tu', event: 'te', esports: 'tn', evo: 'tv', guide: 'tg' }[n.category] || 'tn';
  const catLabel = { breaking: 'BREAKING', update: 'UPDATE', event: 'EVENT', esports: 'ESPORTS', evo: 'EVO GUN', guide: 'GUIDE' }[n.category] || 'NEWS';
  
  card.innerHTML = `
    <div class="cimg" style="background:url('${n.image}') center/cover no-repeat"><div style="width:100%;height:100%;background:linear-gradient(transparent 50%, rgba(10,10,15,.8))"></div></div>
    <div class="cbd">
      <span class="ctg ${catClass}">${catLabel}</span>
      <h3>${n.title}</h3>
      <p>${n.excerpt}</p>
      <div class="cm"><span>📅 ${n.date}</span><span>📖 ${n.readTime || '3 min'}</span></div>
    </div>`;
  
  card.onclick = () => openNewsDetail(n);
  return card;
}

function openNewsDetail(n) {
  const catLabel = { breaking: 'BREAKING', update: 'UPDATE', event: 'EVENT', esports: 'ESPORTS', evo: 'EVO GUN', guide: 'GUIDE' }[n.category] || 'NEWS';
  const catClass = { breaking: 'tv', update: 'tu', event: 'te', esports: 'tn', evo: 'tv', guide: 'tg' }[n.category] || 'tn';
  
  const html = `
    <div style="border-radius:10px;overflow:hidden;margin-bottom:14px;height:180px;background:url('${n.image}') center/cover no-repeat"></div>
    <div style="margin-bottom:10px"><span class="ctg ${catClass}">${catLabel}</span></div>
    <p style="color:#ccc;font-size:12px;line-height:1.8">${n.content}</p>
    <div style="margin-top:14px;display:flex;justify-content:space-between;color:#777;font-size:10px;font-family:'Share Tech Mono',monospace">
      <span>✍️ ${n.author || 'ZEUS'}</span>
      <span>📅 ${n.date}</span>
      <span>📖 ${n.readTime || '3 min'} read</span>
    </div>`;
  
  document.getElementById('detailTitle').textContent = '📰 ' + n.title;
  document.getElementById('detailBody').innerHTML = html;
  document.getElementById('detailModal').style.display = 'flex';
}

let currentNewsFilter = 'all';

function filterNews(category, btn) {
  currentNewsFilter = category;
  document.querySelectorAll('#newsTabs button').forEach(b => b.classList.remove('ac'));
  if (btn) btn.classList.add('ac');
  renderFilteredNews(category);
}

function renderFilteredNews(category) {
  const container = document.getElementById('allNews');
  container.innerHTML = '';
  
  const filtered = category === 'all' ? newsDB : newsDB.filter(n => n.category === category);
  
  if (filtered.length === 0) {
    container.innerHTML = '<p style="color:#888;text-align:center;padding:20px">No articles found in this category</p>';
    return;
  }
  
  filtered.forEach(n => {
    const card = createNewsCard(n);
    container.appendChild(card);
  });
}

// ===== EVO GUNS RENDER =====
function renderEvoGuns() {
  renderEvoGrid('evoGrid', evoGuns);
  renderEvoGrid('homeEvo', evoGuns.filter(g => g.featured));
}

function renderEvoGrid(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = items.map(g => {
    const stars = '★'.repeat(g.rating) + '☆'.repeat(5 - g.rating);
    return `<div class="ec" onclick="openEvoDetail('${g.name.replace(/'/g,"\\'")}')">
      <div class="eimg">${g.icon}</div>
      <div class="ebd">
        <h4>${g.name}</h4>
        <p>${g.desc.substring(0, 40)}...</p>
        <div class="stars">${stars}</div>
        <div class="ep">${g.price}</div>
      </div>
    </div>`;
  }).join('');
}

// ===== ENTRIES RENDER =====
function renderEntries() {
  renderEntryGrid('entryGrid', entries);
  renderEntryGrid('homeEntry', entries.filter(e => e.featured));
}

function renderEntryGrid(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = items.map(e => {
    const typeClass = e.type === 'Mythic' ? 'tv' : e.type === 'Legendary' ? 'tn' : 'te2';
    return `<div class="enc" onclick="openEntryDetail('${e.name.replace(/'/g,"\\'")}')">
      <div class="enimg">${e.icon}</div>
      <div class="enbd">
        <h4>${e.name}</h4>
        <p>${e.desc.substring(0, 40)}...</p>
        <span class="ctg ${typeClass}">${e.type}</span>
        <div style="color:var(--gd);font-size:13px;font-family:'Orbitron',sans-serif;margin-top:4px">${e.price}</div>
      </div>
    </div>`;
  }).join('');
}

// ===== BREAKING NEWS TICKER =====
function renderTicker() {
  const ticker = document.getElementById('ticker');
  const breakingNews = newsDB.filter(n => n.category === 'breaking').slice(0, 5);
  if (breakingNews.length === 0) {
    ticker.innerHTML = '<div class="ticker-inner">⚡ Welcome to ZEUS FF JOURNAL — Your Ultimate Free Fire Companion!</div>';
    return;
  }
  const text = breakingNews.map(n => '🔴 ' + n.title).join(' &nbsp;&nbsp;&nbsp;•••&nbsp;&nbsp;&nbsp; ');
  ticker.innerHTML = `<div class="ticker-inner">${text}</div>`;
}

// ===== MUSIC TOGGLE =====
let musicPlaying = false;

function toggleMusic() {
  const audio = document.getElementById('ffTheme');
  const btn = document.getElementById('musicBtn');
  
  if (musicPlaying) {
    audio.pause();
    btn.innerHTML = '<i class="fas fa-music"></i>';
    btn.classList.remove('on');
    musicPlaying = false;
  } else {
    audio.play().then(() => {
      btn.innerHTML = '<i class="fas fa-music" style="color:var(--gr)"></i>';
      btn.classList.add('on');
      musicPlaying = true;
    }).catch(() => {
      showSuccess('🎵 Click again to play music (autoplay blocked by browser)');
    });
  }
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.gm').forEach(m => m.style.display = 'none');
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    openGlobalSearch();
  }
});

// ===== SAVE SENSITIVITY FROM MAIN ===== (alias for sensi.js function if not defined)
if (typeof window.saveSensi !== 'function') {
  window.saveSensi = function(deviceName) {
    const values = {};
    document.querySelectorAll('.sensi-input').forEach(input => {
      values[input.dataset.key] = input.value;
    });
    const saved = JSON.parse(localStorage.getItem('zeusSensiSaves') || '[]');
    saved.push({ device: deviceName, values: values, date: new Date().toLocaleString() });
    localStorage.setItem('zeusSensiSaves', JSON.stringify(saved));
    showSuccess('✅ Sensitivity saved for ' + deviceName);
  };
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  renderNews();
  renderEvoGuns();
  renderEntries();
  renderStore();
  renderTicker();
  
  // Auto-render admin if already logged in (for page refreshes)
  if (document.getElementById('adminDash').style.display === 'block') {
    renderAdminDashboard();
  }
  
  console.log('🔥 ZEUS FF JOURNAL loaded successfully!');
  console.log('👑 Owner: ZEUS | WhatsApp: 09066760078');
  console.log('💳 Payment: OPay — Christiana Godwin Okon — 9066760078');
});
