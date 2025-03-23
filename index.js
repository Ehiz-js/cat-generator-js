//CAT GENERATOR PROGRAM BY EHIZ

const button = document.querySelector(".button");
const catDisplay = document.querySelector(".catDisplay");
const apiUrl = "https://api.thecatapi.com/v1/images/search";

button.addEventListener("click", async (event) => {
	catImages = document.getElementById("appCard").querySelectorAll("img");

	if (catImages.length > 0) {
		catImages[0].remove();
	}
	try {
		let catData = await getCatData();

		displayCat(catData);
	} catch (error) {
		displayError(error);
	}
});

async function getCatData() {
	const response = await fetch(apiUrl);
	if (!response.ok) {
		throw new Error("Could not get a cat :(");
	}
	return response.json();
}

function displayCat(data) {
	const catImg = document.createElement("img");
	catImg.src = data[0].url;
	catImg.classList.add("catImage");
	catDisplay.style.display = "flex";
	document.getElementById("appCard").appendChild(catImg);
}

function displayError(message) {
	let errorMsg = document.createElement("h2");

	errorMsg.textContent = message;
	errorMsg.classList.add("header");

	catDisplay.style.display = "none";
	document.getElementById("appCard").appendChild(errorMsg);
}
