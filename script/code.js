let days = document.getElementById('calculate');

days.addEventListener('click',() =>{
    let age = document.getElementById('age')
    ans = (age.value*365)
    document.getElementById('answer').innerHTML = ans + 'days'
})
