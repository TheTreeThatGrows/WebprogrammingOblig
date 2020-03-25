function regBestilling() {
    const bestilling = {
        film : $("#film").val(), 
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefon : $("#telefon").val(),
        epost : $("#epost").val(),
    };

    var inputFilm = document.getElementById("film");
    var inputAntall = document.getElementById("antall");
    var inputFornavn = document.getElementById("fornavn");
    var inputEtternavn = document.getElementById("etternavn");
    var inputTelefon = document.getElementById("telefon");
    var inputEpost = document.getElementById("epost");

    if (inputFilm.value == "none") {
        document.getElementById("requiredFilm").innerHTML = "<span class='color-red'>Venligst velg film</span>";
    } 
    if (!inputAntall.checkValidity()) {
        document.getElementById("requiredAntall").innerHTML = "<span class='color-red'>Venligst fyll inn antall</span>";
    } 
    if (inputFornavn.value.length == 0) {
        document.getElementById("requiredFornavn").innerHTML = "<span class='color-red'>Venligst fyll inn fornavn</span>";
    } 
    if (inputEtternavn.value.length == 0) {
        document.getElementById("requiredEtternavn").innerHTML = "<span class='color-red'>Venligst fyll inn etternavn</span>";
    } 
    if (inputTelefon.value.length == 0) {
        document.getElementById("requiredTelefon").innerHTML = "<span class='color-red'>Venligst fyll inn telefonnummer</span>";
    } 
    if (inputEpost.value.length == 0) {
        document.getElementById("requiredEpost").innerHTML = "<span class='color-red'>Venligst fyll inn epost</span>";
    } else {
        $.post("/lagre", bestilling, function(){
            hentAlle();
        });
        window.location.href = "/VisBestilling/index.html";
    } 
}