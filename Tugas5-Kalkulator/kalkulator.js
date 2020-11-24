var layar = document.querySelector("#layar");
var tombol = document.querySelector(".container-tombol");
var resetLayar = false;
var bolehHitung = false;
var tmpVal = '';
var operator = '';
 
tombol.addEventListener("click", function(e) {
    var tombolClick = e.target;
    var nilaiTombol = tombolClick.innerText;
 
    if (nilaiTombol == "C") {
        layar.value = "";
        tmpVal = ""; // tambahkan tmpVal untuk clear nilai yang diinput sementara
    }
    else if (nilaiTombol == "<") {
        layar.value = layar.value.slice(0, -1);
    }
    else if (nilaiTombol == "=") {
        if (bolehHitung == true) {
            layar.value = eval(tmpVal + operator + layar.value);
            bolehHitung = false;
        }
    }
    /* Tambahkan else if dibawah ini agar ketika mengeklik
           titik(.) pada kalkulator maka tidak langsung melakukan operasi perhitungan */
    else if (nilaiTombol == ".") {
        layar.value = layar.value + nilaiTombol;
         
    }
    else if (tombolClick.classList.contains('operator')) {
        if (bolehHitung == true) {
            layar.value = eval(tmpVal + operator + layar.value);
            bolehHitung = false;
        }
 
        tmpVal = layar.value;
        operator = nilaiTombol;
        resetLayar = true;
    }
    else {
        if (resetLayar == true) {
            layar.value = nilaiTombol;
            resetLayar = false;
            bolehHitung = true;
        } else {
            layar.value = layar.value + nilaiTombol;
        }
    }
});