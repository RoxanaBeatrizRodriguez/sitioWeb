window.onload=function(){
    //capturando elementos
    let articulosServicios=document.querySelector(".articulosServicios");
    let tituloServicios=document.querySelector(".tituloServicios");
    //manipulando eventos
    articulosServicios.addEventListener("mouseover",function(){
        tituloServicios.style.color="red";
       // alert("Estimada amiga espero disfrute sus carnavales ");

    });
    articulosServicios.addEventListener("mouseout",function(){
        tituloServicios.style.color="black"
    });
    //capturando el logo de la pagina 
    let imagenLogo=document.getElementById("imagenLogo");
    imagenLogo.addEventListener("mouseover",function(){
        imagenLogo.classList.add('animate__animated', 'animate__flash');
    })
    imagenLogo.addEventListener("mouseout",function(){
        imagenLogo.classList.remove('animate__animated', 'animate__flash');
    })






}