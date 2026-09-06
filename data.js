window.outlets = [];
window.products = [];

// Menarik Data Outlet beserta detailnya (gambar, alamat)
fetch('https://www.bintanggstore.web.id/outlet.json')
    .then(res => res.json())
    .then(data => {
        // Menyimpan data outlet utuh (bentuk object) agar gambar & alamat terbaca
        window.outlets = data;
        if (typeof render === 'function') render();
    })
    .catch(err => console.error('Gagal mengambil data Outlet:', err));

// Menarik Data Menu Kopi Kenangan
fetch('https://www.bintanggstore.web.id/menu.json')
    .then(res => res.json())
    .then(data => {
        window.products = data; // Hanya pakai data dari JSON ini
        if (typeof render === 'function') render();
    })
    .catch(err => console.error('Gagal mengambil data Menu:', err));
