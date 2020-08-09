// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCgxdGJ1PsghqE7PrN-PN3EaVoP96R7J9Q",
    authDomain: "mi-nombre-b4769.firebaseapp.com",
    databaseURL: "https://mi-nombre-b4769.firebaseio.com",
    projectId: "mi-nombre-b4769",
    storageBucket: "mi-nombre-b4769.appspot.com",
    messagingSenderId: "800871146629",
    appId: "1:800871146629:web:462fce5a1c46dd184b35ec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Se asigna a una variable cada elemento input con su ID
  var dni = document.getElementById('.dni');
  var nombre = document.getElementById('.nombres');
  var apaterno = document.getElementById('.a_paterno');
  var amaterno = document.getElementById('.a_materno');
  var fnac = document.getElementById('.fnac');
  var educ = document.getElementById('.estudio');
  var Dir = document.getElementById('.direc');
  var depart = document.getElementById('.depart');
  var prov = document.getElementById('.prov');
  var dist = document.getElementById('.dist');
  var sex = document.getElementById('.sexo');
  var enviarData = document.getElementById('submit_button');
  
  var Recuperar = document.getElementById('RecuperarDatos');
  // Se conecta con la base de datos de Firebase
  var dataDB = firebase.database().ref('AppDatos').push();
  // Le agregamos un evento click al botón de enviar enviarData.addEventListener('click', enviar);
  // Le agregamos un evento click al botón de enviar 
  enviarData.addEventListener('click', enviar);
  Recuperar.addEventListener('click',RecuperarDatos);
  function enviar () {
    // Se envía los valores de cada input
    dataDB.set({
        DNI: dni.value,
        Nombre: nombre.value,
        APaterno: apaterno.value,
        AMaterno: amaterno.value,
        Fnacimiento: fnac.value,
        Educacion: educ.value,
        Departamento: depart.value,
        Provincia: prov.value,
        Distrito: dist.value,
        Direccion: Dir.value,
        Sexo: sex.value

        
      // telefono: telefono.value,
    });
    Limpiar();
  }

  function Limpiar()
  {
    document.getElementById(".dni").value="";
    document.getElementById(".nombres").value="";
    document.getElementById(".a_paterno").value="";
    document.getElementById(".a_materno").value="";
    document.getElementById(".fnac").value="";
    document.getElementById(".estudio").value="";
    document.getElementById(".direc").value="";
    document.getElementById(".depart").value="";
    document.getElementById(".prov").value="";
    document.getElementById(".dist").value="";
    document.getElementById(".sexo").value="";
    var div = document.getElementById("datos");
			div.style.display='none';


  }
  var db = firebase.firestore();
  var reference = firebase.database().ref('AppDatos/');
  var dbase = db.collection("AppDatos");
  
  function RecuperarDatos()
    {
      let citiesRef = db.collection('AppDatos/');
      let query = citiesRef.where('DNI', '==', "48106237").get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }

        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

     
    
  
    /*
      var query = dbase.where("DNI","==","48106237");
      console.log(query);
      */
/*
      reference.on("child_added",function(snapshot)
      {
          console.log(snapshot.val());
      });
*/     
    };
