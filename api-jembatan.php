<?php
// Buka gembok untuk web HTML kamu
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$tipe = isset($_GET['tipe']) ? $_GET['tipe'] : '';
$store_id = isset($_GET['store_id']) ? $_GET['store_id'] : '';

// Tentukan URL tujuan ke API temanmu
if ($tipe == 'stores') {
    $url = "https://toko.rmf.best/api/jasdor/stores";
} else if ($tipe == 'menu') {
    $url = "https://toko.rmf.best/api/jasdor/menu?store_id=" . $store_id;
} else {
    echo json_encode(["error" => "Tipe tidak valid"]);
    exit;
}

// Bikin agen rahasia pakai cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// Trik jitu: Kita memalsukan identitas seolah-olah akses dari web temanmu
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
curl_setopt($ch, CURLOPT_REFERER, 'https://toko.rmf.best/');

$hasil = curl_exec($ch);
curl_close($ch);

// Lempar hasilnya ke index.html
echo $hasil;
?>
