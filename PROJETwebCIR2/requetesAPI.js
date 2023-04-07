const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://seloger.p.rapidapi.com/properties/list?zipCodes=75&pageIndex=1&pageSize=50&realtyTypes=1&transactionType=1&sortBy=0&includeNewConstructions=true");
xhr.setRequestHeader("X-RapidAPI-Key", "1aea00327bmsha0e63ba81d45969p1e9802jsn5cc2d8765958");
xhr.setRequestHeader("X-RapidAPI-Host", "seloger.p.rapidapi.com");

xhr.send(data);