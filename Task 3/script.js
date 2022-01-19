/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';


 
const showBtn = document.getElementById("btn");
const btnDiv = document.querySelector('.btn-container')
const message = document.getElementById('message')
showBtn.addEventListener("click", async () => {
    btnDiv.style.display = 'none';
    message.style.display = 'none'
	try {
		const response = await fetch(
			"https://api.github.com/users"
		);
		const resp = await response.json();
		const divEl = document.getElementById('output')
        divEl.style.textAlign = "center"
		resp.forEach((post) => {
			const h1El = document.createElement("h1");
			const imgEl = document.createElement("img");
            imgEl.style.paddingBottom = '2rem'
			h1El.textContent = post.login;
			imgEl.src = post.avatar_url;
			divEl.append(h1El);
			divEl.append(imgEl);
		});

        document.getElementById('output').append(divEl)

	} catch (e) {
		console.log(e);
	}
});

