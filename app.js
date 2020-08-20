if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js')
		.then((reg) => console.log("hmmm",reg))
		.catch((err) => console.log("nayy",err));
}