window.addEventListener("load", init);

var kep = [
    {
      cim: "kecskek",
      leiras: "első kép leírása",
      eleresiUt: "kepek/_DSC7025.jpg",
    },
    {
      cim: "út 1",
      leiras: "második kép leírása",
      eleresiUt: "kepek/_DSC7365.jpg",
    },
    {
      cim: "rét 1",
      leiras: "harmadik kép leírása",
      eleresiUt: "kepek/_DSC7371_1.jpg",
    },
    {
      cim: "rét 2",
      leiras: "negyedik kép leírása",
      eleresiUt: "kepek/_DSC7444.jpg",
    },
    {
      cim: "rét 3",
      leiras: "ötödik kép leírása",
      eleresiUt: "kepek/_DSC7515.jpg",
    },
  
];
function ID(elem) {
  return document.getElementById(elem);
}

  
  function init() {
    ID("uzenet").innerHTML = "<h1>Képgaléria</h1>";
    megjelenit();
    kepek();
  }
  
  function megjelenit() {
    var txt = "";
    for (let index = 0; index < kep.length; index++) {
      txt += "<h3>" + kepek[index].cim + "</h3>";
      txt += "<img src>='" + kepek[index].eleresiUt + "' alt='"+kepek[index].cim+"'>" ;
      txt += "<p>" + kepek[index].leiras + "</p>";
    }
  
    ID("galeria").innerHTML = txt;
  }
  function kepek() {
    var txt = "";
    for (let index = 0; index < kep.length; index++) {
      txt +=
        "<img src='" + kep[index].eleresiUt + "' alt='" + kep[index].cim + "' >";
    }
    
  
    ID("galeria").innerHTML = txt;
  }
  