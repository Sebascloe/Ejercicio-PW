window.onload = function(){
    //alert("ha cargado la pagina")
    document.getElementById("boton").addEventListener("click" ,registrarUsuario);
    document.getElementById("boton").addEventListener("click",imprimirConsola);
    document.getElementById("botonConDOM").addEventListener("click",registrarUsuarioDOM);
    document.getElementById("botonTotal").addEventListener("click",listarTodo);

    var arrUsuarios = [];


        function registrarUsuario(){
            console.log("click en el boton");
            //let usuario = document.getElementById("usuario").value;
            let nuevoUsuario = {
                usuario: document.getElementById("usuario").value,
                nombre: document.getElementById("nombre").value,
                apellido: document.getElementById("apellido").value,
                edad: document.getElementById("edad").value,
                contra: document.getElementById("contra").value
            };

            console.log("objeto", nuevoUsuario);

            /*
            //let nombre = document.getElementById("nombre").value;
            //let apellido = document.getElementById("apellido").value;
            //let edad = document.getElementById("edad").value;
            //let contra = document.getElementById("contra").value;
            //console.log(usuario);

            // Insertarlo en la tabla
            const CTabla = document.getElementById("CTabla");
            let str_inserccion = "<tr><td>" + usuario + "</td><td>" 
            + nombre + "</td><td>" 
            + apellido + "</td><td>" 
            + edad +  "</td><td>" 
            + contra +  "</td> </tr>";
            */
            const CTabla = document.getElementById("CTabla");
            let str_inserccion = "<tr><td>" + nuevoUsuario.usuario + "</td><td>" 
            + nuevoUsuario.nombre + "</td><td>" 
            + nuevoUsuario.apellido + "</td><td>" 
            + nuevoUsuario.edad +  "</td><td>" 
            + nuevoUsuario.contra +  "</td> </tr>";

            CTabla.innerHTML += str_inserccion;
            //CTabla.innerHTML = CTabla.innerHTML + str_inserccion;

            arrUsuarios.push(nuevoUsuario);
            console.log(nuevoUsuario);

        }

        function registrarUsuarioDOM(){
            console.log("DOM");
            //console.log("click en el boton");
            let usuario = document.getElementById("usuario").value;
            let nombre = document.getElementById("nombre").value;
            let apellido = document.getElementById("apellido").value;
            let edad = document.getElementById("edad").value;
            let contra = document.getElementById("contra").value;
            //console.log(usuario);

            // Inserccion en la tabla
            // HIJO INTER TEXTO -> HIJO MEDIO COLUMNA -> PADRE FILA
            const col1 = document.createElement("td");
            const texto1 = document.createTextNode(usuario);
            col1.appendChild(texto1);
            const col2 = document.createElement("td");
            //const texto2 = document.createTextNode(nombre);
            col2.appendChild(document.createTextNode(nombre))
            const col3 = document.createElement("td");
            col3.appendChild(document.createTextNode(apellido));
            const col4 =document.createElement("td");
            col4.appendChild(document.createTextNode(edad));

            const row1 = document.createElement("tr");
            row1.appendChild(col1);
            row1.appendChild(col2);
            row1.appendChild(col3);
            row1.appendChild(col4);

            document.getElementById("CTabla").appendChild(row1);

        }

        function imprimirConsola() {
            console.log("function imprimirConsola");
        }

        function listarTodo(){
            const bodyTabla = document.getElementById("CTabla2");
            let str_inserccion = "";
            for (let idx in arrUsuarios){
                console.log(idx, arrUsuarios[idx]);
                str_inserccion += "<tr><td>" + arrUsuarios[idx].usuario + "</td><td>" 
                + arrUsuarios[idx].nombre + "</td><td>" 
                + arrUsuarios[idx].apellido + "</td><td>" 
                + arrUsuarios[idx].edad +  "</td><td>" 
                + arrUsuarios[idx].contra +  "</td> </tr>";
            }
            bodyTabla.innerHTML = str_inserccion;
        }

}