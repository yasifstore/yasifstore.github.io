window.outlets = [];
window.products = [];

const fallbackProducts = [
    { id: "901", category: "Coffee", name: "Matcha Caramel Coffee Mousse", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/f4d1db53-13b7-4a0d-a9f6-ca6742859419_116R_XfVNh51pkIzKrd1cLqYGdtemHsOC.jpeg?auto=format" },
    { id: "902", category: "Non-Coffee", name: "Matcha Jasmine Milk Tea", originalPrice: 23000, promoPrice: 14500, brand: "Tomoro Coffee", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/406f23c9-d9cb-4654-8f49-e65771100493_1M8ujUGNZpCMJPVx7AXKMGmShNeIkjj27.jpeg?auto=format" },
    { id: "903", category: "Coffee", name: "Matcha Espresso", originalPrice: 30000, promoPrice: 18000, brand: "Tomoro Coffee", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/9886bffc-35f7-464d-829f-cf4b521239dd_1JD-OY9GOJH6-SuL6Ub9u8_JujS6I_mp4.jpeg?auto=format" },
    { id: "109", category: "Coffee", name: "Caramel Cheese Latte", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE202410011221397303144/detail/7ca6b6e58bf54039ae151eabdb45d24c_1767718900688893063.webp" },
    { id: "110", category: "Coffee", name: "Cheese Cloud Latte", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE202410011221397315374/detail/f1babbdc82e544d183b4da1712bd68b0_1767718901087073805.webp" },
    { id: "111", category: "Coffee", name: "TOMORO Coconut Latte", originalPrice: 23000, promoPrice: 14500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20231201052540011833/detail/8d01ad1991a0440daaf7c0937a71234c_1767718899526247736.webp" },
    { id: "112", category: "Coffee", name: "Caffe Latte", originalPrice: 24000, promoPrice: 15000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240403024221025333/detail/1773363ba36f4673b6f77aac7eb5b940_1767718897408486157.webp" },
    { id: "113", category: "Coffee", name: "Cappuccino", originalPrice: 24000, promoPrice: 15000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20220929064719026558/detail/34c119e022514d8e9764fb0415dd62e5_1767718900845353926.webp" },
    { id: "114", category: "Coffee", name: "Caffe Mocha", originalPrice: 25000, promoPrice: 15500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20220929064719026558/detail/34c119e022514d8e9764fb0415dd62e5_1767718900845353926.webp" },
    { id: "115", category: "Coffee", name: "Coconut Aren Latte", originalPrice: 25000, promoPrice: 15500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20231201052541024582/detail/679391d630de4918854905b7569418dd_1767718899338187433.webp" },
    { id: "116", category: "Coffee", name: "Caramel Macchiato", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230113034948015908/detail/48cfbac27da84199bac6cdabda400960_1767718899608943367.webp" },
    { id: "117", category: "Coffee", name: "Manuka Oat Latte", originalPrice: 30000, promoPrice: 18000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230219161627031365/detail/955f100e3b8c41448497e13dc817a559_1767718898481789067.webp" },
    { id: "118", category: "Coffee", name: "Kopi susu Aren", originalPrice: 18000, promoPrice: 12000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240618125618038275/detail/d0e271fba13c432ab45400db87c2b448_1767718899017695017.webp" },
    { id: "119", category: "Coffee", name: "Spanish Latte", originalPrice: 25000, promoPrice: 15500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240501051955281535/detail/7eb0df4e07294ac88f76900ac6e36089_1767718899559551463.webp" },
    { id: "120", category: "Coffee", name: "Spanish Aren Latte", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE202405010520513896209/detail/89f8922a0c7d45a49a4abc9fe94698f7_1767718901461746147.webp" },
    { id: "121", category: "Coffee", name: "TOMORO Aren Latte", originalPrice: 21000, promoPrice: 13500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240403024220010397/detail/55bd41658e204801894d8c3f45d7f0fb_1767718897226800221.webp" },
    { id: "122", category: "Coffee", name: "TOMORO Oat Latte", originalPrice: 24000, promoPrice: 15000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240403024217071021/detail/3ebf60f7f0a045ee843455713f8ba4ce_1767718901591453215.webp" },
    { id: "123", category: "Coffee", name: "Breve Latte", originalPrice: 30000, promoPrice: 18000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240325044729017344/detail/311eb8f560784148ba90dd3752c75645_1767718898980151003.webp" },
    { id: "125", category: "Coffee", name: "Sea Salt Cloud Caramel Macchiato", originalPrice: 30000, promoPrice: 18000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240810022442050982/detail/c17635f2a19e40f49956a58207806de9_1761584469101605119.webp" },
    { id: "126", category: "Coffee", name: "Caffe Americano", originalPrice: 18000, promoPrice: 12000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20220929064721012611/detail/10d414e6e6a84e00b324ecf6bde12dba_1767718901499056587.webp" },
    { id: "127", category: "Coffee", name: "Pistachio Latte", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20250624170201139716/detail/425e14296d8c4c1faa0d7f2e37ee1498_1750784521443125824.webp" },
    { id: "129", category: "Coffee", name: "Pistachio Matcha Latte", originalPrice: 29000, promoPrice: 17500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20250624170201283226/detail/58fd2f40ab834a79aed13a2c851b7969_1750784521915553429.webp" },
    { id: "134", category: "Coffee", name: "Peach Americano", originalPrice: 19000, promoPrice: 12500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20250423071639302532/detail/699b1ccd6b4c47d9a48c07a13e4d6f6c_1767718899691325777.webp" },
    { id: "140", category: "Coffee", name: "Grapefruit Americano", originalPrice: 20000, promoPrice: 13000, brand: "Tomoro Coffee", image: "https://i.imgur.com/A91deWe.jpeg" },
    { id: "141", category: "Coffee", name: "Lemonade Americano", originalPrice: 20000, promoPrice: 13000, brand: "Tomoro Coffee", image: "https://i.imgur.com/Cu60gON.jpeg" },
    { id: "101", category: "Non-Coffee", name: "Chocolate", originalPrice: 21000, promoPrice: 13500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240403024213034788/detail/53f057e0_80b61c9204b.webp" },
    { id: "102", category: "Non-Coffee", name: "Chocolate Frappe", originalPrice: 24000, promoPrice: 15000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20220929064725056609/detail/a66426ae_2821ecfca9d.webp" },
    { id: "103", category: "Non-Coffee", name: "Matcha Latte", originalPrice: 27000, promoPrice: 16500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20220929064729010429/detail/18fe3801_206262e13b5.webp" },
    { id: "104", category: "Non-Coffee", name: "Matcha Frappe", originalPrice: 27000, promoPrice: 16500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20220929064726033490/detail/62897f72_5aeb5f34a5a.webp" },
    { id: "108", category: "Non-Coffee", name: "Coconut Choco", originalPrice: 23000, promoPrice: 14500, brand: "Tomoro Coffee", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/35f93737-90fb-4da2-a641-dcadffbbcf9a_menu-item-image_1715225491288.jpg?auto=format" },
    { id: "128", category: "Non-Coffee", name: "Pistachio Chocolate", originalPrice: 26000, promoPrice: 16000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20250624170201202214/detail/822707456a94472692b678cb312412f0_1750784521695266242.webp" },
    { id: "130", category: "Non-Coffee", name: "Jasmine Green Milk Tea", originalPrice: 19000, promoPrice: 12500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20251029170536179666/detail/1a1063a8bc184779977c922f01733dcb_1761757536367092703.webp" },
    { id: "131", category: "Non-Coffee", name: "Peach Oolong Milk Tea", originalPrice: 19000, promoPrice: 12500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20251029170536293336/detail/d69a67a472d44336950d7af198b76ae2_1761757536575419792.webp" },
    { id: "132", category: "Non-Coffee", name: "Sea Salt Cloud Chocolate", originalPrice: 28000, promoPrice: 17000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20240810022442061963/detail/0a745b5caf584d3093c43348ed4d7ee2_1723256682769202693.webp" },
    { id: "133", category: "Non-Coffee", name: "Sea Salt Cloud Matcha Latte", originalPrice: 30000, promoPrice: 18000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE2024060517151517386238/detail/8cda9d73723142169181a777f023f974_1718175725457655629.webp" },
    { id: "135", category: "Non-Coffee", name: "Peach Coconut Frappe", originalPrice: 19000, promoPrice: 12500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20250423071640031309/detail/b83a4534c7d2409db9d7567e351f2462_1745392600052868531.webp" },
    { id: "136", category: "Non-Coffee", name: "Peach Jasmine Tea", originalPrice: 19000, promoPrice: 12500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20250423071639436875/detail/d98c2912357d46adbcc6dccc3a09bb98_1745392599839416641.webp" },
    { id: "105", category: "Non-Coffee", name: "Choco Oat Latte", originalPrice: 28000, promoPrice: 17000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230219161632023953/detail/021df064_87871d6bde9.webp" },
    { id: "106", category: "Non-Coffee", name: "Matcha Oat Latte", originalPrice: 28000, promoPrice: 17000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230703164542011562/detail/b22e4f68_ea594884b8c.webp" },
    { id: "107", category: "Non-Coffee", name: "Hojicha Oat Latte", originalPrice: 30000, promoPrice: 18000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230219161630020636/detail/c45bc165_5db6b392573.webp" },
    { id: "137", category: "Non-Coffee", name: "Strawberry Jasmine Smoothie", originalPrice: 19000, promoPrice: 12500, brand: "Tomoro Coffee", image: "https://i.imgur.com/c2WfUSE.jpeg" },
    { id: "138", category: "Non-Coffee", name: "Pink Pop Lemonade", originalPrice: 14000, promoPrice: 10000, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230116155019015218/detail/36076b86_3a72d99a8b4.webp" },
    { id: "139", category: "Non-Coffee", name: "Pink Pop Lemon Tea", originalPrice: 17000, promoPrice: 11500, brand: "Tomoro Coffee", image: "https://food-cms.grab.com/compressed_webp/items/IDITE20230116155019049154/detail/85cf8914_28542950b08.webp" },
    { id: "142", category: "Non-Coffee", name: "Chocolate Frappe", originalPrice: 24000, promoPrice: 15000, brand: "Tomoro Coffee", image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/bce80055-6bf6-493f-9c94-15a8342e0cc9_menu-item-image_1715226267850.jpg?auto=format" },
    { id: "kk-paket-1", category: "Paket Bundling", name: "2 Pcs Butterscotch Aren Latte + 2 Pcs Roti Susu", originalPrice: 60000, promoPrice: 35000, brand: "Kopi Kenangan", image: "https://i.imgur.com/vBPYtMI.png", isPackage: true, sizes: [], sugars: [] },
    { id: "kk-paket-2", category: "Paket Bundling", name: "3 Pcs Kopi Kenangan Mantan", originalPrice: 57000, promoPrice: 37000, brand: "Kopi Kenangan", image: "https://i.imgur.com/7AJXMkW.png", isPackage: true, sizes: [], sugars: [] },
    { id: "kk-paket-3", category: "Paket Bundling", name: "2 Pcs Large Kopi Kenangan Mantan", originalPrice: 50000, promoPrice: 30000, brand: "Kopi Kenangan", image: "https://i.imgur.com/0zJE2ca.png", isPackage: true, sizes: [], sugars: [] },
    { id: "kk-paket-4", category: "Paket Bundling", name: "2 Pcs Matcha Latte", originalPrice: 50000, promoPrice: 30000, brand: "Kopi Kenangan", image: "https://i.imgur.com/KgdUnd5.png", isPackage: true, sizes: [], sugars: [] },
    { id: "kk-paket-5", category: "Paket Bundling", name: "Hazelnut Dutch Choco + Adam Ayam Toast + Roti Coklat Klasik", originalPrice: 56000, promoPrice: 36500, brand: "Kopi Kenangan", image: "https://i.imgur.com/h5LkRPs.png", isPackage: true, sizes: [], sugars: [] },
    { id: "kk-paket-6", category: "Paket Bundling", name: "2 Pcs Butterscotch Kenangan Frappe", originalPrice: 60000, promoPrice: 35000, brand: "Kopi Kenangan", image: "https://i.imgur.com/k7Yv795.png", isPackage: true, sizes: [], sugars: [] }
];

// Menarik Data Outlet 
fetch('https://www.bintanggstore.web.id/outlet.json')
    .then(res => res.json())
    .then(data => {
        window.outlets = data.map(item => item.nama || item.name || item.outlet || item);
        if (typeof render === 'function') render();
    })
    .catch(err => console.error('Gagal mengambil data Outlet:', err));

// Menarik Data Menu Kopi Kenangan
fetch('https://www.bintanggstore.web.id/menu.json')
    .then(res => res.json())
    .then(data => {
        window.products = [...fallbackProducts, ...data];
        if (typeof render === 'function') render();
    })
    .catch(err => {
        console.error('Gagal mengambil data Menu:', err);
        window.products = [...fallbackProducts];
        if (typeof render === 'function') render();
    });
