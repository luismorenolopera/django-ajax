function cargar(url) {
  var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
     }
   };
   xhttp.open("GET", url, true);
   xhttp.send();
}

function cambioEstado(url) {
  var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       cargar('/usuarios/');
     }
   };
   xhttp.open("GET", url, true);
   xhttp.send();
}


function agregarUsuario() {

  $.post("/usuarios/",
          {
            nombre: $('[name=nombre]').val(),
            clave: $('[name=clave]').val()
          },
          function(data,status){
              console.log("Data: " + data + "\nStatus: " + status);
              cargar('/usuarios/');
          });
}
