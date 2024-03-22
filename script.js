const thanksCard = document.querySelector('#thanks__card')
const ratingCard = document.querySelector('#rating__card')
const attributionText = document.querySelector('.attribution')
const scoreBtn = document.querySelectorAll('.scoring');
const score = document.querySelector('#score')
const submitBtn = document.querySelector('#submit-button');


//Add active class on click

let rating = 0;
scoreBtn.forEach(scoreBtn => {
   
    scoreBtn.addEventListener("click", (e) => {
        document.querySelector('.active')?.classList.remove('active');
        scoreBtn.classList.add("active");
       // modifies the selected value to Submit
        
        rating = e.target.innerHTML;
        score.textContent = rating;
        
        //Prevents user from submiting an empty rating
        if (rating > 0){
            submitBtn.removeAttribute('disabled');
            submitBtn.classList.remove('disabled');
        }
   })

})

 //Hides the rating card


submitBtn.addEventListener('click', () => {
    
    thanksCard.classList.remove('hidden');
    ratingCard.classList.add('hidden');
    attributionText.classList.add('animated')
})


