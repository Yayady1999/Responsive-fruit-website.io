let openNav = document.querySelector("#openNav");
let closeNav = document.querySelector("#closeNav");
let sidebar = document.querySelector("#sidebar");

openNav.addEventListener("click",()=>{
	sidebar.style.left = "0px";
	openNav.style.display = "none";
	closeNav.style.display = "block";
});

closeNav.addEventListener("click",()=>{
	sidebar.style.left = "-200px";
	closeNav.style.display = "none";
	openNav.style.display = "block";
});

