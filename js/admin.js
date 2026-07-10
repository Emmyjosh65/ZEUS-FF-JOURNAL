// ========== ADMIN DASHBOARD ==========
const ADMIN_EMAIL = 'ge5853987@gmail.com';
const ADMIN_PASS = 'admin123';

function loginAdmin() {
  const pass = document.getElementById('adminPassInput').value.trim();
  
  // Obfuscated check
  const expected = [97, 100, 109, 105, 110, 49, 50, 51]; // "admin123" in ASCII
  let valid = pass.length === 8;
  if (valid) {
    for (let i = 0; i < 8; i++) {
      if (pass.charCodeAt(i) !== expected[i]) { valid = false; break; }
    }
  }
  
  if (valid) {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDash').style.display = 'block';
    renderAdminDashboard();
    showSuccess('✅ Welcome to Admin Dashboard!');
  } else {
    showSuccess('❌ Incorrect password. Access denied.');
  }
}

function renderAdminDashboard() {
  const orders = JSON.parse(localStorage.getItem('zeusOrders') || '[]');
  const tickets = JSON.parse(localStorage.getItem('zeusTickets') || '[]');
  const sensiSaves = JSON.parse(localStorage.getItem('zeusSensiSaves') || '[]');
  
  // Stats
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'PENDING').length;
  const completedOrders = orders.filter(o => o.status === 'COMPLETED').length;
  const revenue = orders.filter(o => o.status === 'COMPLETED').reduce((sum, o) => {
    const price = parseInt(o.price.replace(/[₦,]/g,'')) || 0;
    return sum + price;
  }, 0);
  
  document.getElementById('adminStats').innerHTML = `
    <div class="ab"><div class="an">${totalOrders}</div><div class="al">Orders</div></div>
    <div class="ab"><div class="an">${pendingOrders}</div><div class="al">Pending</div></div>
    <div class="ab"><div class="an">${completedOrders}</div><div class="al">Completed</div></div>
    <div class="ab"><div class="an">${tickets.length}</div><div class="al">Tickets</div></div>
    <div class="ab"><div class="an">${sensiSaves.length}</div><div class="al">Sensi Saves</div></div>
    <div class="ab"><div class="an">₦${revenue.toLocaleString()}</div><div class="al">Revenue</div></div>
  `;
  
  // Orders Table
  const tbody = document.getElementById('ordersTable');
  if (orders.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;color:#777;padding:20px">No orders yet</td></tr>';
  } else {
    tbody.innerHTML = `<tr><th>ID</th><th>Product</th><th>UID</th><th>Nick</th><th>Amount</th><th>Ref</th><th>Status</th><th>Action</th></tr>` +
      orders.map((o, i) => `<tr>
        <td style="font-family:'Share Tech Mono',monospace;color:var(--bl)">${o.id}</td>
        <td>${o.product}</td>
        <td style="font-family:'Share Tech Mono',monospace">${o.uid}</td>
        <td>${o.nickname}</td>
        <td style="color:var(--gd);font-family:'Orbitron',sans-serif">${o.price}</td>
        <td style="font-size:9px;font-family:'Share Tech Mono',monospace">${o.reference}</td>
        <td><span class="stb ${o.status === 'COMPLETED' ? 'scp' : 'spd'}">${o.status}</span></td>
        <td>
          <button class="btn bo bs" style="font-size:7px;padding:3px 8px" onclick="completeOrder(${i})">✓</button>
          <button class="btn bo bs" style="font-size:7px;padding:3px 8px;border-color:var(--rd);color:var(--rd)" onclick="deleteOrder(${i})">✕</button>
        </td>
      </tr>`).join('');
  }
  
  // Tickets
  const ticketsDiv = document.getElementById('ticketsList');
  if (tickets.length === 0) {
    ticketsDiv.innerHTML = '<p style="color:#777;text-align:center;padding:14px">No tickets yet</p>';
  } else {
    ticketsDiv.innerHTML = tickets.map((t, i) => `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;border-bottom:1px solid rgba(255,107,0,.04)">
        <div>
          <p style="color:var(--gd);font-size:11px"><strong>${t.name}</strong> <span style="color:#777;font-size:9px;font-family:'Share Tech Mono',monospace">${t.contact}</span></p>
          <p style="color:#bbb;font-size:10px">${t.message.substring(0,100)}${t.message.length > 100 ? '...' : ''}</p>
          <p style="color:#555;font-size:8px;font-family:'Share Tech Mono',monospace">${t.date}</p>
        </div>
        <button class="btn bo bs" style="font-size:7px;padding:3px 8px;border-color:var(--rd);color:var(--rd);flex-shrink:0" onclick="deleteTicket(${i})">✕</button>
      </div>
    `).join('');
  }
}

function completeOrder(index) {
  const orders = JSON.parse(localStorage.getItem('zeusOrders') || '[]');
  if (orders[index]) {
    orders[index].status = 'COMPLETED';
    localStorage.setItem('zeusOrders', JSON.stringify(orders));
    renderAdminDashboard();
    showSuccess('✅ Order marked as completed');
  }
}

function deleteOrder(index) {
  const orders = JSON.parse(localStorage.getItem('zeusOrders') || '[]');
  orders.splice(index, 1);
  localStorage.setItem('zeusOrders', JSON.stringify(orders));
  renderAdminDashboard();
  showSuccess('🗑️ Order deleted');
}

function deleteTicket(index) {
  const tickets = JSON.parse(localStorage.getItem('zeusTickets') || '[]');
  tickets.splice(index, 1);
  localStorage.setItem('zeusTickets', JSON.stringify(tickets));
  renderAdminDashboard();
  showSuccess('🗑️ Ticket deleted');
}

function clearOrders() {
  if (confirm('Delete ALL orders?')) {
    localStorage.setItem('zeusOrders', '[]');
    renderAdminDashboard();
    showSuccess('🗑️ All orders cleared');
  }
}

function clearTickets() {
  if (confirm('Delete ALL tickets?')) {
    localStorage.setItem('zeusTickets', '[]');
    renderAdminDashboard();
    showSuccess('🗑️ All tickets cleared');
  }
}

function exportOrdersCSV() {
  const orders = JSON.parse(localStorage.getItem('zeusOrders') || '[]');
  if (orders.length === 0) {
    showSuccess('No orders to export');
    return;
  }
  
  let csv = 'ID,Product,UID,Nickname,Amount,Reference,Notes,Status,Date\n';
  orders.forEach(o => {
    csv += `"${o.id}","${o.product}","${o.uid}","${o.nickname}","${o.price}","${o.reference}","${o.notes}","${o.status}","${o.date}"\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `zeus-orders-${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showSuccess('📤 Orders exported as CSV');
}
