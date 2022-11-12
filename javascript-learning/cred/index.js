const images = document.querySelectorAll(".scale-up-bottom");


observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
    
    console.log(entry);
    if(entry.IntersectionRatio > 0){
        entry.target.style.animation.add = `scale-up-bottom 2s forwards ease-out`
    }
} )
})



