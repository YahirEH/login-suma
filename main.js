function validateForm() {

    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
     if (name == "yahir" && password == "321") {
        //alert("usuario y contraseña validos")
        window.open('cali.html');
     }  else  {
       alert("intenta de nuevo");
     }

}