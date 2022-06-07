(function () {

	Site = window.Site || {

		init: function () {

			Site.transformYearsActive();
			Site.initScrollTo();

		},

		transformYearsActive: function () {

			let tech = document.getElementsByClassName("years-active")
			let thisYear = new Date().getFullYear();
			
			for (var i = 0; i < tech.length; i++) {
			
				let year = tech[i].attributes.getNamedItem("data-year");
				
				if (year != null) {
				
					tech[i].innerHTML = `${(thisYear - year.value)} years`;
				
				}
			}
		},

		initScrollTo: function () {

			let allLinks = document.getElementsByClassName("nav-link");

			for (let i = 0; i < allLinks.length; i++) {

				let navLink = allLinks[i];

				navLink.addEventListener("click", (event) => {

					event.preventDefault();
					
					let dataTarget = event.target.attributes["data-target"];
					if (dataTarget == null || typeof dataTarget === "undefined" || dataTarget === "") {
						return;
					}

					let target = document.getElementById(dataTarget.value);

					window.scrollTo({
						top: target.offsetTop - 80,
						left: 0,
						behavior: "smooth"
					});

				});

			}

		}

	};

	// Entry point
	Site.init();

})();

