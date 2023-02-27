let nilai = prompt("masukan: ", 0);
let hasil = "";
switch(true){
    case nilai >= 91 && nilai <= 100:
        hasil = "A"
        break;
    case nilai >= 81 && nilai <= 91:
        hasil = "B"
        break;
    case nilai >= 71 && nilai <= 81:
        hasil = "c" 
        break;
    case nilai >= 61 && nilai <= 71:
        hasil = "D"
        break;
    case nilai >= 0 && nilai <= 61:
        hasil = "F"
        break;
    default:
document.write("tidak ada");
}
document.write(hasil);