const panels = document.querySelectorAll(".panel");
panels.forEach((p)=>{
   p.addEventListener("click",()=>{
       removeClass();
     p.classList.add('active')
   })
})

const removeClass =()=>{
    panels.forEach(p=>{
        p.classList.remove('active');
    })
}