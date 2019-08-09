// I've added annotations to make this easier to follow along at home. Good luck learning and check out my other pens if you found this useful


// First let's set the colors of our sliders
const settings={
  fill: '#9C1111',
  background: '#999999'
}


const sliders = document.querySelectorAll('.range-slider');
Array.prototype.forEach.call(sliders,(slider)=>{
 
  slider.querySelector('input').addEventListener('input', (event)=>{
   
    slider.querySelector('span').innerHTML = event.target.value+"мм";

    applyFill(event.target);
  });
  
  applyFill(slider.querySelector('input'));
});


function applyFill(slider) {
 
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}
