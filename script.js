const userInput = document.getElementById('userInput')
const sentBtn = document.getElementById('sentBtn')
const decrementBtn = document.getElementById('decrementBtn')
const incrementBtn = document.getElementById('incrementBtn')
const count = document.getElementById('count')
const colorBtn = document.getElementById('colorBtn')



sentBtn.addEventListener('click', ()=>{
    count.innerHTML = userInput.value
})

sentColor.addEventListener('click', () => {
    count.style.color = colorBtn.value
})
    
sentBtn.addEventListener('click', () => {
  currentCount = parseInt(userInput.value) || 0;
  count.textContent = currentCount;
});

incrementBtn.addEventListener('click', () => {
  currentCount++;
  count.textContent = currentCount;
});

decrementBtn.addEventListener('click', () => {
  currentCount--;
  count.textContent = currentCount;
});

sentColor.addEventListener('click', () => {
  count.style.color = colorBtn.value;
});