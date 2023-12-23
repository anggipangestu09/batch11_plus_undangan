let menu_btn = document.getElementById("menu_btn")
let menu_container = document.getElementById("menu_container")
let showMenu = false

menu_btn.addEventListener("click" , ()=>{
   
    if(showMenu == false){
        menu_container.style.transform = "translateX(0%)"
        menu_container.style.animation = "slideIn 500ms"
        
    }else {
        menu_container.style.transform ="translateX(100%)"
        menu_container.style.animation = "slideOut 500ms"
        
    } 

    showMenu = !showMenu
    
})