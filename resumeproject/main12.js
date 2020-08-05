function loadjson2(file) {
	return new Promise((resolve, reject)=> {
		return fetch(file).then(response=>{
			if(response.ok) {
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson2("data.json");
newfile.then(data=>{
	console.log(data);
	getting(data.profile_static);
	getting2(data.profile_dynamic);

})
var child1 = document.querySelector(".child1");
function getting(det) {
	var img1 = document.createElement("img");
	img1.src = det.image;
	child1.appendChild(img1);

	var name  = document.createElement("h4");
	name.textContent = det.name;
	child1.appendChild(name);

	var rollno1 = document.createElement("h4");
	rollno1.textContent = det.Rollno;
	child1.appendChild(rollno1);

	var button1 = document.createElement("button");
	button1.innerHTML="Click here";
	button1.onclick = ()=>{

		location.href = det.submit1;
	}
	child1.appendChild(button1);
}

var child2 = document.querySelector(".child2");
function getting2(det) {
	var img2 = document.createElement("img");
	img2.src = det.image;
	child2.appendChild(img2);

	var name1  = document.createElement("h4");
	name1.textContent = det.name;
	child2.appendChild(name1);

	var rollno2 = document.createElement("h4");
	rollno2.textContent = det.Rollno;
	child2.appendChild(rollno2);

	var button2 = document.createElement("button");
	button2.innerHTML="Click here";
	button2.onclick = ()=>{

		location.href = det.submit2;
	}
	child2.appendChild(button2)
}