function getWelcomeMsg() {
	return "Welcome to my site!";
}

function getColor() {
	var date = new Date();
	console.log(date.getMinutes());
	if (date.getMinutes () > 20) 
		{return "green"};
	return "red";
}


function hidePage(page) {
	var el = document.getElementById(page);
	el.style.display = 'none';
	}
function showPage(page) {
	document.getElementById(page).style.display = 'block';
}



function initMenu() {
	var links = document.querySelectorAll("#top-menu-bar a");
		for (var i = 0; i < links.length; i++) {
			links[i].onclick = clickOnMenuItem;
	}
}

function clickOnMenuItem () {
	hideAllPages ();
	var pageId = this.getAttribute('data-page');
	showPage (pageId);
}


function hideAllPages () {
	var pages = document.querySelectorAll ('.page');
	for (var i = 0; i < pages.length; i++) {
		pages[i].style.display = 'none';
	}

}

initMenu();

function showSkills() {
	var skills = ['html', 'css','js'];
	
	var htmlSkills = skills.map(function(skill, index){
		return '<li>' + skill.toUpperCase() + '</li>';
	});
		
		var ul = document.querySelector ('#skills-page ul');
		ul.innerHTML = htmlSkills.join('');

	}
	



	showSkills();