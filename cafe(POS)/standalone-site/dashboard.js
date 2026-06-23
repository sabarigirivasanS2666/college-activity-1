document.addEventListener('DOMContentLoaded', () => {
    setupSidebarNav();
    setupModalClosers();
    renderDashboardData();
    setupLogout();
});

function setupSidebarNav() {
    const links = document.querySelectorAll('.side-link[data-section]');
    const titles = {
        overview: 'Dashboard Overview',
        products: 'Product Management',
        categories: 'Category Management',
        floors: 'Floor & Table Management',
        customers: 'Customer Management',
        coupons: 'Coupons & Promotions'
    };

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            document.querySelectorAll('.dash-section').forEach(s => s.style.display = 'none');
            const section = link.dataset.section;
            document.getElementById('section-' + section).style.display = 'block';
            document.getElementById('pageTitle').textContent = titles[section];
        });
    });
}

function setupModalClosers() {
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.dataset.close));
    });
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('show'); });
    });
}

function openModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }

function renderDashboardData() {
    document.getElementById('userName').textContent = 'Admin User';
    document.getElementById('userAvatar').textContent = 'AD';
    document.getElementById('productsTableBody').innerHTML = `
    <tr>
      <td>Espresso</td>
      <td>Hot Beverages</td>
      <td>₹120</td>
      <td><span class="badge badge-green">Active</span></td>
    </tr>
    <tr>
      <td>Latte</td>
      <td>Hot Beverages</td>
      <td>₹160</td>
      <td><span class="badge badge-green">Active</span></td>
    </tr>
    <tr>
      <td>Blueberry Muffin</td>
      <td>Bakery</td>
      <td>₹90</td>
      <td><span class="badge badge-green">Active</span></td>
    </tr>
  `;
    document.getElementById('categoriesTableBody').innerHTML = `
    <tr>
      <td>Hot Beverages</td>
      <td><span class="badge" style="background:#ff7a0022; color:#ff7a00;">#ff7a00</span></td>
      <td><button class="icon-btn">✏️</button></td>
    </tr>
    <tr>
      <td>Bakery</td>
      <td><span class="badge" style="background:#1d4ed822; color:#1d4ed8;">#1d4ed8</span></td>
      <td><button class="icon-btn">✏️</button></td>
    </tr>
  `;
    document.getElementById('floorsContainer').innerHTML = `
    <div style="margin-bottom:24px;">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
        <h4 style="color:var(--accent-light); margin:0;">Main Floor</h4>
      </div>
      <div class="floor-tables-grid">
        <div class="floor-table-card glass-card">
          <div class="ftc-number">Table 1</div>
          <div class="ftc-seats">4 seats</div>
          <div><span class="status-dot green"></span>available</div>
        </div>
        <div class="floor-table-card glass-card">
          <div class="ftc-number">Table 2</div>
          <div class="ftc-seats">2 seats</div>
          <div><span class="status-dot red"></span>occupied</div>
        </div>
      </div>
    </div>
  `;
    document.getElementById('customersTableBody').innerHTML = `
    <tr>
      <td>Aditi Sharma</td>
      <td>aditi@example.com</td>
      <td>+91 98765 43210</td>
    </tr>
  `;
    document.getElementById('couponsTableBody').innerHTML = `
    <tr>
      <td>WELCOME10</td>
      <td>Percentage</td>
      <td>10%</td>
      <td><span class="badge badge-green">Active</span></td>
    </tr>
  `;
}

function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            if (logoutBtn.getAttribute('href') === '#') e.preventDefault();
            window.location.href = 'index.html';
        });
    }
}
