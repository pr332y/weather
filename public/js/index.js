//Client side JS
const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const msgOne=document.getElementById('message-1')
const msgTwo=document.getElementById('message-2')
msgOne.textContent='From Javascript'
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    msgOne.textContent='Loading...'
    msgTwo.textContent=''
    fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if (data.error) {
            return msgOne.textContent=data.error
        }
        msgOne.textContent=data.location
        msgTwo.textContent=data.forecast
    })
})
})