// APIurl -> `https://api.openweathermap.org/data/2.5/weather?q=${rergiao.value},${pais.value}&appid=${apiKey}`

// --- DOM ---
const regiao = document.querySelector('#regiao')
const pais = document.querySelector('#pais')
const btn = document.querySelector('.btn')
const h2 = document.querySelector('.regiao-pais')
const temp = document.querySelector('.temp')
const tempMax = document.querySelector('.temp-max')
const tempMin = document.querySelector('.temp-min')

// --- API KEY ---

const apiKey = 'a51cd2def18a2957f32bb6b330283944'

// Evento click

btn.addEventListener('click', () => {
if (regiao.value === ''|| pais.value === '') {
    console.error('COMPLETE OS CAMPOS ABERTOS')
    alert('COMPLETE OS CAMPOS EM BRANCOS')
    return
}

// --- API ---

const api = `https://api.openweathermap.org/data/2.5/weather?q=${regiao.value},${pais.value}&units=metric&appid=${apiKey}`

fetch(api)
.then(res => {
    if (!res.ok) {
        console.error("ERROR, PORFAVOR PONHA UMA CIDADE/ESTADO OU PAÍS VÁLIDO")
        alert('Informações erradas, [PREENCHA O CAMPO CORRETAMENTE]')
        location.reload()
    }
    return res.json()
})
.then(data => mostrarNaTela(data.main))

return
})

// --- Informações para a tela vindo da API ---

function mostrarNaTela(data){
    h2.innerHTML = `${regiao.value} / ${pais.value.toUpperCase()}`
    temp.innerHTML = `${Math.round(data.temp)} ºC`
    tempMax.innerHTML = `Temperatura Max: ${data.temp_max} ºC`
    tempMin.innerHTML = `Temperatura Min: ${data.temp_min} ºC`
    console.log(data)
}

// --- API SP (padrão) ---

function apiSP() {
    const sp = 'São Paulo'
    const br = 'BR'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sp},${br}&units=metric&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => mostrarNaTelaSP(data.main))
}

function mostrarNaTelaSP(data) {
    temp.innerHTML = `${Math.round(data.temp)} ºC`
    tempMax.innerHTML = `Temperatura Max: ${data.temp_max} ºC`
    tempMin.innerHTML = `Temperatura Min: ${data.temp_min} ºC`
}

apiSP()