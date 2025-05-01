function toggleMode (){
    const html = document.documentElement
    html.classList.toggle("light");

    const img = document.querySelector("#perfil img")

    if(html.classList.contains("light")){
        img.setAttribute('src', "./img/foto-perfil2.png")
    }else{
        img.setAttribute("src", "./img/foto-perfil.png")
    }
}