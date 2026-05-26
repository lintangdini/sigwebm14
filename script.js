// DARK MODE
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function () {
document.body.classList.toggle("dark");
});


// FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

event.preventDefault();

const nama = document.getElementById("nama").value;
const email = document.getElementById("email").value;
const pesan = document.getElementById("pesan").value;

if(nama === "" || email === "" || pesan === ""){
alert("Semua field harus diisi!");
}else{
alert("Pesan berhasil dikirim!");
form.reset();
}

});