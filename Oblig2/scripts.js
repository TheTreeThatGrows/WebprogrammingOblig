function addBestilling() {
    var film = document.getElementById("film").value;
    var antall = document.getElementById("antall").value;
    var fornavn = document.getElementById("fornavn").value;
    var etternavn = document.getElementById("etternavn").value;
    var tlf = document.getElementById("tlf").value;
    var epost = document.getElementById("epost").value;

    var x = document.createElement("table");
    x.setAttribute("id", "bestilling");
    document.body.appendChild(x);
  
    var y = document.createElement("tr");
    y.setAttribute("id", "myTr");
    document.getElementById("bestilling").appendChild(y);
    
    var data1 = document.createElement("td");
    var film = document.createTextNode(film);
    data1.appendChild(film);
    document.getElementById("bestilling").appendChild(data1);

    var data2 = document.createElement("td");
    var antall = document.createTextNode(antall);
    data2.appendChild(antall);
    document.getElementById("bestilling").appendChild(data2);

    var data3 = document.createElement("td");
    var fornavn = document.createTextNode(fornavn);
    data3.appendChild(fornavn);
    document.getElementById("bestilling").appendChild(data3);

    var data4 = document.createElement("td");
    var etternavn = document.createTextNode(etternavn);
    data4.appendChild(etternavn);
    document.getElementById("bestilling").appendChild(data4);

    var data5 = document.createElement("td");
    var tlf = document.createTextNode(tlf);
    data5.appendChild(tlf);
    document.getElementById("bestilling").appendChild(data5);

    var data6 = document.createElement("td");
    var epost = document.createTextNode(epost);
    data6.appendChild(epost);
    document.getElementById("bestilling").appendChild(data6);

    
    document.getElementById('film').value=null;
    document.getElementById('antall').value=null;
    document.getElementById('fornavn').value=null;
    document.getElementById('etternavn').value=null;
    document.getElementById('tlf').value=null;
    document.getElementById('epost').value=null;
  }

function deleteTable() {
    var bestillingTable = document.getElementById("bestilling");
    while(bestillingTable.hasChildNodes())
    {
        bestillingTable.removeChild(bestillingTable.firstChild);
    }
  }

