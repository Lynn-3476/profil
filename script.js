/* Menunggu seluruh elemen HTML selesai dimuat sebelum menjalankan skrip */
document.addEventListener("DOMContentLoaded", function () {
    
    // Menghubungkan elemen HTML ke dalam variabel JavaScript
    const btnSimpan = document.getElementById("btnSimpan");
    const namaInput = document.getElementById("namaInput");
    const setoranInput = document.getElementById("setoranInput");
    const outputArea = document.getElementById("outputArea");

    // Pesan awal di area output
    outputArea.innerHTML = "Belum ada data yang disimpan.";

    /* Memberikan fungsi ketika tombol "Simpan Data" diklik */
    btnSimpan.addEventListener("click", function () {
        // Mengambil nilai (value) yang diketik oleh pengguna
        const nama = namaInput.value.trim();
        const setoran = setoranInput.value.trim();

        // Pengecekan sederhana agar form tidak kosong (mencegah error/data kosong)
        if (nama === "" || setoran === "") {
            alert("Mohon isi semua kolom terlebih dahulu!");
            return; // Menghentikan proses jika ada yang kosong
        }

        // Menampilkan data yang dimasukkan ke dalam area output di halaman web
        outputArea.innerHTML = `
            <strong>Data Berhasil Disimpan!</strong><br>
            Nama: ${nama} <br>
            Jumlah Setoran: Rp ${Number(setoran).toLocaleString()}
        `;

        // Mengosongkan kembali kolom input setelah data berhasil diproses
        namaInput.value = "";
        setoranInput.value = "";
    });

});
