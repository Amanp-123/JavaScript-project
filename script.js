const countElement = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count =0;

increaseBtn.addEventListener("click",function(){
  count++;
  countElement.textContent=count;
})


decreaseBtn.addEventListener("click", function () {

    if (count > 0) {
        count--;
        countElement.textContent = count;
    }

});

resetBtn.addEventListener("click", function () {
    count = 0;
    countElement.textContent = count;
});


