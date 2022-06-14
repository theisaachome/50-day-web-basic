const boxes = document.querySelectorAll(".box");

const checkBoxes = ()=>{
    const triggerButton =  window.innerHeight / 5 * 4;
 
    boxes.forEach((box)=>{
      const boxTop = box.getBoundingClientRect().top
 
      console.log(boxTop);
      if(boxTop < triggerButton){
         box.classList.add("show");
      }else{
         box.classList.remove('show');
      }
    })
 }
window.addEventListener('scroll',checkBoxes);
// checkBoxes();
