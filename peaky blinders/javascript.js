






function Persona(PrimerNombre, Apellido, edad, ojos, dni) {
    this.nombre = PrimerNombre;
    this.apellido = Apellido;
    this.edad = edad;
    this.colorDeOjos = ojos;
    this.documento = dni;
}



var mipapa = new Persona ("Julian", "Weich", "57", "marrones", 17801607)

document.getElementById ("papa"). innerHTML = mipapa.nombre;

var mimama = new Persona ("Barby", "Esses", "48", "marrones", 24410982);

document.getElementById ("mama"). innerHTML = mimama.apellido;

var mihermano = new Persona ("Tadeo", "Weich", "25", "marrones", 41243215)

document.getElementById ("hermano"). innerHTML = mihermano.documento;


var mihermano2 = new Persona ("Jeronimo", "Weich", "29", "marrones", 40198234)

document.getElementById ("hermano2"). innerHTML = mihermano2.colorDeOjos;


<h1 id="papa"> 

</h1>


<h1 id="mama">

</h1>

<h1 id="hermano">

</h1>

<h1 id="hermano2">

</h1>