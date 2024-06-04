// Script untuk tombol back to top
let mybutton = document.getElementById("b2t");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Script untuk menyapa nama user
function replaceName() {
    let sayhi = prompt("Kenalan dulu yuk, namamu siapa?", "Calon Chef");
    document.getElementById("sayhi").innerHTML = sayhi;
}

replaceName();

document.getElementById("ubahnama").addEventListener("click", function(){replaceName()})


// Script untuk validasi form
function validateForm(){
    const nama = document.forms["contus"]["nama"].value;
    const nohp = document.forms["contus"]["nohp"].value;
    const email = document.forms["contus"]["email"].value;
    const pilihKursus = document.forms["contus"]["pilihkursus"].value;
    const pesan = document.forms["contus"]["pesan"].value;

    if (nama == "" || nohp == "" || email == "" || pilihKursus == "" || pesan == ""){
        document.getElementById("error-warning").innerHTML = ": BELUM lengkap. Mohon periksa kembali."
    }

    setSenderUI(nama, nohp, email, pilihKursus, pesan);

    return false;
}

function setSenderUI(nama, nohp, email, pilihKursus, pesan){
    document.getElementById("sender-nama").innerHTML = nama;
    document.getElementById("sender-nohp").innerHTML = nohp;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-pilihkursus").innerHTML = pilihKursus;
    document.getElementById("sender-pesan").innerHTML = pesan;
}