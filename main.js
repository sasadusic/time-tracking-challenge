const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')
const dailyel = document.querySelectorAll('.daily')
const weeklyel = document.querySelectorAll('.weekly')
const monthlyel = document.querySelectorAll('.monthly')
daily.onclick = () => {
    daily.classList.add('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')

    dailyel.forEach(el => {
        el.style.display = 'block'
    })
    weeklyel.forEach(el => {
        el.style.display = 'none'
    })
    monthlyel.forEach(el => {
        el.style.display = 'none'
    })
}
weekly.onclick = () => {
    daily.classList.remove('active')
    weekly.classList.add('active')
    monthly.classList.remove('active')
    
    dailyel.forEach(el => {
        el.style.display = 'none'
    })
    weeklyel.forEach(el => {
        el.style.display = 'block'
    })
    monthlyel.forEach(el => {
        el.style.display = 'none'
    })
}
monthly.onclick = () => {
    daily.classList.remove('active')
    weekly.classList.remove('active')
    monthly.classList.add('active')

    dailyel.forEach(el => {
        el.style.display = 'none'
    })
    weeklyel.forEach(el => {
        el.style.display = 'none'
    })
    monthlyel.forEach(el => {
        el.style.display = 'block'
    })
}