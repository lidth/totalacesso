icon_appmore = document.querySelector('.appmoreicon')
appmore = document.querySelector('.app-more')

function abrirappmore(){
    if(appmore.style.display != 'block'){
    appmore.style.display = 'block'
    }else{
        appmore.style.display = 'none'
    }
}

icon_appmore.addEventListener("click", abrirappmore)