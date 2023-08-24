let selected = [];
const ratingOne = document.getElementById("rate-one")
const ratingTwo = document.getElementById("rate-two")
const ratingThree = document.getElementById("rate-three")
const ratingFour = document.getElementById("rate-four")
const ratingFive = document.getElementById("rate-five")
const submitBtn = document.getElementById("submit-btn")
const message = document.getElementById("message")
const title = document.getElementById("title")
const rating = document.getElementById("rating")
const image = document.getElementById("image")
const iconDiv = document.getElementById("icon")

ratingOne.addEventListener('click', function(){
    selected.push(ratingOne)
})
ratingTwo.addEventListener('click', function(){
    selected.push(ratingTwo)
})
ratingThree.addEventListener('click', function(){
    selected.push(ratingThree)
})
ratingFour.addEventListener('click', function(){
    selected.push(ratingFour)
})
ratingFive.addEventListener('click', function(){
    selected.push(ratingFive)
})

submitBtn.addEventListener('click', function(){
    let submitted = selected[selected.length-1]
    let rate = selected[selected.length-1].innerHTML
    message.innerHTML = `Thank You`
    message.classList.add("text-thanks")
    title.innerHTML = `You have selected ${rate} out of 5`
    title.classList.add("message-style")
    title.classList.remove("title")
    submitBtn.style.display = 'none'
    rating.innerHTML = `<p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>`
    rating.classList.add("thanks-message")
    image.setAttribute('src', './images/illustration-thank-you.svg')
    image.classList.add("icon-image")
    iconDiv.classList.add("icon-style")
})