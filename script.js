// Menambahkan efek interaktif pada elemen .wisata-item
document.addEventListener('DOMContentLoaded', function() {
    var wisataItems = document.querySelectorAll('.wisata-item');

    wisataItems.forEach(function(item) {
        item.addEventListener('click', function() {
            alert('Anda memilih ' + item.querySelector('h2').textContent + ' sebagai destinasi!');
        });
    });
});

// Optimized script.js

// Sebelumnya:
// function sayHello() {
//     console.log("Hello, World!");
// }

// Sekarang:
const sayHello = () => console.log("Hello, World!");

document.addEventListener('DOMContentLoaded', () => {
    sayHello();
});
