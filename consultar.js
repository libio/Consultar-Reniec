function Consultar(dni)
{
    fetch('https://contamaxperu.com.pe/wsdni/reniecS.php?token=PALERP&dni='+dni)
    .then(response => response.json())
    .then(json => 	{
                        document.getElementById(".nombres").value=json.NOMBRE;
                        document.getElementById(".a_paterno").value=json.APP;
                        document.getElementById(".a_materno").value=json.APM;
                        var date = json.FNAC;
                        var res = date.split("-");
                        document.getElementById(".fnac").value=res[2]+'-'+res[1]+'-'+res[0];
                        document.getElementById(".depart").value=json.DEPARTAMENTO;
                        document.getElementById(".prov").value=json.PROVINCIA;
                        document.getElementById(".dist").value=json.DISTRITO;
                        document.getElementById(".direc").value=json.DIRECCION;
                        document.getElementById(".estudio").value=json.ESTUDIO;

                        var sex= json.SEXO;
                        if(sex==="M")
                        {
                            document.getElementById(".sexo").value="MASCULINO";
                        }
                        else{
                            if(sex=="")
                            {
                                document.getElementById(".sexo").value="NULL";
                            }
                            else{
                                document.getElementById(".sexo").value="FEMENINO";
                            }
                        }
                        Mostrar();
                    });
                    
}

function myFunction()
{
    var Nro_dni = document.getElementById(".dni").value;
    Consultar(Nro_dni);

}
function Mostrar()
{
    var div = document.getElementById("datos");
    div.style.display='contents';
}


