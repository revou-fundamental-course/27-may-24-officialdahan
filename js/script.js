// start script untuk tombol back to top
let mybutton = document.getElementById("b2t");

window.addEventListener('load', () => noTop())

function noTop(){
  mybutton.hidden = true;
}

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
// end script untuk tombol back to top

// start script untuk menyapa nama user
function replaceName() {
    let sayhi = prompt("Kenalan dulu yuk, namamu siapa?", "Calon Chef");
    document.getElementById("sayhi").innerHTML = sayhi;
}

replaceName();

document.getElementById("ubahnama").addEventListener("click", function(){replaceName()})
// start script untuk menyapa nama user

// start script untuk banner autoslide
var slideIndex =1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs(slideIndex += n)
}

function showDivs(n){
  var i;
  var x = document.getElementsByClassName("img-slideshow");
  if (n > x.length){(slideIndex = 1)}; 
  if (n < 1){(slideIndex = x.length)};
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 5000)
// end script untuk banner autoslide

// start script untuk validasi form
function validateForm(){
    const nama = document.forms["contus"]["nama"].value;
    const nohp = document.forms["contus"]["nohp"].value;
    const email = document.forms["contus"]["email"].value;
    const pilihKursus = document.forms["contus"]["pilihkursus"].value;
    const pesan = document.forms["contus"]["pesan"].value;

    if (nama != "" && nohp != "" && email != "" && pilihKursus != "" && pesan != ""){
        document.getElementById("sukses-submit").innerHTML = "Siip! Tunggu ya, kamu akan segera dihubungi kembali oleh Tim Solaris."
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
// end script untuk validasi form