function ubahTeks() {
    const teks = [
        "Aku kucing paling gemay 😸",
        "Aku kelinci super lucu 🐰",
        "Aku panda gendut 🐼",
        "Aku hamster imut 🐹"
    ];

    const random = Math.floor(Math.random() * teks.length);
    document.getElementById("hasil").innerHTML = teks[random];
}
