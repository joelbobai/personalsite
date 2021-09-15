alert("Hello, welcome to Joel person site");
alert("Please leave a message");

const randomBgGenerator = document.body.querySelector('#randomBgGenerator');
		const colorCodeText = document.body.querySelector('#colorCodeText');
		const body = document.body;

		randomBgGenerator.onclick = () => {
			const r = Math.floor(Math.random() * 256);	
		  	const g = Math.floor(Math.random() * 256);
			const b = Math.floor(Math.random() * 256);
		 	const colorCode = `rgba(${r},${g},${g},1)`;
		  	colorCodeText.textContent = colorCode;
			body.style.backgroundColor = colorCode;
		}


		const hrElem = document.querySelector('#hour');
		const minElem = document.querySelector('#minute');
		const secElem = document.querySelector('#seconds');

		const init = () => {
			setInterval(() => {
				const dateHour 		= new Date().getHours();
				const dateMinutes = new Date().getMinutes();
				const dateSeconds	= new Date().getSeconds();

				hrElem.innerHTML = dateHour < 10 ? "0" + dateHour : dateHour;
				minElem.innerHTML = dateMinutes < 10 ? "0" + dateMinutes : dateMinutes;
				secElem.innerHTML = dateSeconds;
			}, 1000);
			
		}

		window.onload = () => init()