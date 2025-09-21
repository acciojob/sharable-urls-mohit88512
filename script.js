// your code here
let btn = document.getElementById("button");
let name = document.getElementById("name");
let year = document.getElementById("year");
let heading = document.getElementById("url");

btn.addEventListener("click" (e)=>{
	e.preventDefault();
	if(!name.value=='' && !year.value==''){
		heading.innerText = `https://localhost:8080/?name=${name.value}&year=${year.value}`
	}
	else if(name.value=='' || !year.value==''){
		heading.innerText = `https://localhost:8080/?year=${year.value}`
	}
	else if(!name.value=='' || year.value==''){
		heading.innerText = `https://localhost:8080/?name=${name.value}`
	}




	
})