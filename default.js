let tech = document.getElementsByClassName("years-active")
let thisYear = new Date().getFullYear();

for (var i = 0; i < tech.length; i++) {

	let year = tech[i].attributes.getNamedItem("data-year");
	
	if (year != null) {
	
		tech[i].innerHTML = `${(thisYear - year.value)} years`;
	
	}

}