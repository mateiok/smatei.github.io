console.info ("my first js file");
var employed = true; 
var name = "Sergiu";
console.warn ("employed");
console.warn (employed);
console.info ('name');
console.info (name);

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


var  welcome = getWelcomeMsg();
console.info (welcome);

var summaryElement = document.getElementById('summary');
console.info ("summaryElement", summaryElement);

var color = getColor();
summaryElement.style.color = color;









//first exemple
function hideHomePage() {
	var el = document.getElementById('home-page');
	el.style.display = 'none';
	}
function showSkillsPage() {
	document.getElementById('skills-page').style.display = 'block';
}
function clickOnSkills() {
	//hideHomePage();
	//showSkillsPage();
	hidePage('home-page');
	hidePage('languages-page');
	hidePage('about-page');
	showSkillsPage('skills-page');

}
//first exemple - end


function hidePage(page) {
	var el = document.getElementById(page);
	el.style.display = 'none';
	}
function showPage(page) {
	document.getElementById(page).style.display = 'block';
}