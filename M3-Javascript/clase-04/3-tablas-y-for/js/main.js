console.log(document.querySelector('title').textContent)

const solTorres = { nombre: 'Sol', apellido: 'Torres'}
const leilaRomero = { nombre: 'Leila', apellido: 'Romero'}
const francoCarril = { nombre: 'Personas', apellido: 'Carril'}
const jeronimoVega = { nombre: 'Vega', apellido: 'Vega'}

const arrayPersonas = [solTorres, leilaRomero, francoCarril, jeronimoVega]

console.log(arrayPersonas)

console.log(arrayPersonas[2].apellido) //apellido Franco
console.log(arrayPersonas[0].apellido) //apellido Sol
console.log(arrayPersonas[1].nombre) //nombre Leila
console.log(arrayPersonas[1]) //Todo el objeto LeilaRomero

{/* <tr>
        <td>Sol</td>
        <td>Torres</td>
    </tr>
    <tr>
        <td>Leila</td>
        <td>Romero</td>
    </tr>
    <tr>
        <td>Franco</td>
        <td>Carril</td>
    </tr>
    <tr>
        <td>Jerónimo</td>
        <td>Vega</td>
             */}
        // ! PRIMERA FORMA - NO RECOMENDADA
//? Creo tbody y html vacío, luego agrego al HTML los elementos del arrayPeronas y con innerHTML agrego dentro de TBODY el html.
// const tbody = document.querySelector('tbody')
// let html = ''
// for (let i = 0; i < arrayPersonas.length; i++) {
//     html += `
//         <tr>
//             <td>${arrayPersonas[i].nombre}</td>
//             <td>${arrayPersonas[i].apellido}</td>
//     `
// }
// tbody.innerHTML = html

        // ! SEGUNDA FORMA
//?Creando los elementos con doc.
const tbody_querySelector = document.querySelector('tbody')
// const tbody_get_ByID = document.getElementsByTagName('tbody')
//ME DABA ERROR

for (let i = 0; i < arrayPersonas.length; i++) {
    const tr = document.createElement('tr')

    const td_nombre = document.createElement('td')
    td_nombre.textContent = arrayPersonas[i].nombre
    tr.appendChild(td_nombre)

    const td_apellido = document.createElement('td')
    td_apellido.textContent = arrayPersonas[i].apellido
    tr.appendChild(td_apellido)

    tbody_querySelector.appendChild(tr)
}

        // ! TERCERA FORMA
//? Con DocumentFragment.  En vez de intervenir sobre un elemento que YA existe, como TBODY en el ejemplo anterior, lo hago sobre el fragmento ya que PUEDE ALVERGAR HIJOS. En vez de hacer el appendChild en cada iteración lo hago una vez FUERA DEL FOR. Por esto es que es más óptima esta forma, se interviene SOLO UNA VEZ el DOM.
const fragment = new DocumentFragment() /* <> </> */
console.log(fragment)
console.dir(fragment)

for (let i = 0; i < arrayPersonas.length; i++) {
    const tr = document.createElement('tr')

    const td_nombre = document.createElement('td')
    td_nombre.textContent = arrayPersonas[i].nombre
    tr.appendChild(td_nombre)

    const td_apellido = document.createElement('td')
    td_apellido.textContent = arrayPersonas[i].apellido
    tr.appendChild(td_apellido)

    fragment.appendChild(tr)
}

tbody_querySelector.appendChild(fragment)