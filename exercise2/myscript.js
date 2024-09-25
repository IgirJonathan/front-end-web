<script>
	// Store data:
	const myObj = { name: "Semmy Wellem Taju", age: 33, city: "Manado City" };
	const myJSON = JSON.stringify(myObj);
	localStorage.setItem("testJSON", myJSON);

	// print console
	console.log(myJSON);

	// Retrieve data:
	let text = localStorage.getItem("testJSON");   

	let obj = JSON.parse(text);
	document.getElementById("txt-name").innerHTML = "My name is " + obj.name;
	document.getElementById("txt-age").innerHTML = "I am " + obj.age + " years old.";
	document.getElementById("txt-city").innerHTML = "I live in " + obj.city + ".";
</script>