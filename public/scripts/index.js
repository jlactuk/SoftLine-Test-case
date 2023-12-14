

 let buttonOpenMenu = document.getElementById("OpenShadowMenu")

buttonOpenMenu.addEventListener("click", function () {
    this.classList.toggle("open");
})


// Для тестового задания массив с изображениями не требуется из-за свойств изображений
 let buttonsTowns = document.querySelectorAll(".towns button")
 let img = document.getElementById("map");
buttonsTowns.forEach((item,index) => {
    item.addEventListener("click", () => {
        img.src = `public/images/mapsImg/map(${index+1}).png`
        document.querySelector("button.active").classList.remove("active");
        item.classList.add("active");

    })
})

