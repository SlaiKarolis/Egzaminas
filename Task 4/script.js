/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

async function fetchPost (){
    try {
		const response =  fetch(
			('./cars.json')
		);
		const resp = await response;
        console.log(resp)
		// const divEl = document.getElementById('output')
        // divEl.style.textAlign = "center"
		// resp.forEach((post) => {
		// 	const h1El = document.createElement("h1");
		// 	h1El.textContent = post.login;
		// 	divEl.append(h1El);
		// 	divEl.append(imgEl);
		// });

        // document.getElementById('output').append(divEl)

	} catch (e) {
		console.log(e);
	}
}
	
fetch('./cars.json')
.then(function (resp) {
    return resp.json();
})
.then(function (data) {
    resp.forEach((post) => {
        const divEl = document.getElementById('container')
        const h1El = document.createElement('h1')
        h1El.textContent = post.brand;
        divEl.append(h1El)
    })
    document.getElementById('container').append(divEl)
    console.log(data)
})
