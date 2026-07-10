// ========== STORE & ORDER SYSTEM ==========

function renderStore() {
  const container = document.getElementById('storeGrid');
  if (!container) return;
  
  container.innerHTML = storeItems.map(item => `
    <div class="sc">
      <div class="simg">${item.icon}</div>
      <div class="sbd">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="pr">${item.price}</div>
        <button class="btn bp bs" style="width:100%;margin-top:8px" onclick="openOrder('${item.name.replace(/'/g,"\\'")}','${item.price}')">ORDER NOW</button>
      </div>
    </div>
  `).join('');
}

function openOrder(product, price) {
  document.getElementById('ordProduct').value = product;
  document.getElementById('ordPrice').value = price;
  document.getElementById('orderModal').style.display = 'flex';
}

function submitOrder() {
  const uid = document.getElementById('ordUid').value.trim();
  const nick = document.getElementById('ordNick').value.trim();
  const ref = document.getElementById('ordRef').value.trim();
  
  if (!uid || !nick || !ref) {
    showSuccess('⚠️ Please fill in UID, Nickname, and Payment Reference');
    return;
  }
  
  if (uid.length < 5) {
    showSuccess('⚠️ Please enter a valid Free Fire UID (at least 5 digits)');
    return;
  }
  
  const order = {
    id: '#' + String(Date.now()).slice(-6),
    product: document.getElementById('ordProduct').value,
    price: document.getElementById('ordPrice').value,
    uid: uid,
    nickname: nick,
    reference: ref,
    notes: document.getElementById('ordNotes').value.trim() || '—',
    status: 'PENDING',
    date: new Date().toLocaleString()
  };
  
  const orders = JSON.parse(localStorage.getItem('zeusOrders') || '[]');
  orders.unshift(order);
  localStorage.setItem('zeusOrders', JSON.stringify(orders));
  
  closeModal('orderModal');
  document.getElementById('ordUid').value = '';
  document.getElementById('ordNick').value = '';
  document.getElementById('ordRef').value = '';
  document.getElementById('ordNotes').value = '';
  
  showSuccess(`✅ Order placed! \nProduct: ${order.product}\nUID: ${order.uid}\n\n📱 Send payment screenshot to WhatsApp 09066760078\n\nYour order ID: ${order.id}`);
}

function submitTicket() {
  const name = document.getElementById('ticketName').value.trim();
  const contact = document.getElementById('ticketContact').value.trim();
  const msg = document.getElementById('ticketMsg').value.trim();
  
  if (!name || !msg) {
    showSuccess('⚠️ Please enter your name and message');
    return;
  }
  
  const tickets = JSON.parse(localStorage.getItem('zeusTickets') || '[]');
  tickets.unshift({
    name: name,
    contact: contact || '—',
    message: msg,
    date: new Date().toLocaleString()
  });
  localStorage.setItem('zeusTickets', JSON.stringify(tickets));
  
  document.getElementById('ticketName').value = '';
  document.getElementById('ticketContact').value = '';
  document.getElementById('ticketMsg').value = '';
  
  showSuccess('✅ Ticket submitted! ZEUS will respond shortly via WhatsApp.');
}
