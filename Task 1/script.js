/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const valueEl = document.createElement ('div')
    valueEl.style.fontSize = '3rem'
    valueEl.style.textAlign = "center"

    const inputValue = document.getElementById('search').value;
    const outputLb = inputValue * 2.2046 +'lb '
    const outputG = inputValue / 0.001 + 'g '
    const outputOz = inputValue * 35.274 + 'oz '
  
    valueEl.append(outputLb)
    valueEl.append(outputG)
    valueEl.append(outputOz)
    document.getElementById('output').append(valueEl)
    console.log(valueEl)
    
})