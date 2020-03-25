$(function(){
    hentAlle();
});

function hentAlle() {
    $.get( "/hentAlle", function( data ) {
        formaterData(data);
    });
}

function formaterData(bestillinger){
    let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th></tr>";
    for (const bestilling of bestillinger){
        ut+="<tr><td>"+bestilling.film+"</td><td>"+bestilling.antall+"</td><td>"+bestilling.fornavn+"</td><td>"+bestilling.etternavn+"</td><td>"+bestilling.telefon+"</td><td>"+bestilling.epost+"</td></tr>";
    }
    ut+="</table>";
    $("#bestillinger").html(ut);
}

function slettBestillingene() {
    const ok=confirm("Slette alle bestillinger?");
    if(ok){
        $.get( "/slettAlle", function() {
            hentAlle();
        });
    }
}