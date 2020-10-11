let name = "Maxim";
let weight = 0;
let nameDog = name;

function bark(nameDog, weight) { //var nameDog = name;
	if (weight < 30) {
		alert(nameDog + " says woof woof, weight " + weight);
	}
	else {
		weight += 100;
		console.log(name + " says WOOF WOOF, weight " + weight);	

	}
}

function PlusPlus(x) { // var x = weight;
	return ++x; //x = x + 1 
}

function inputValue() {
	var str = document.getElementById("DisplayText").value;
	bark(str, 29);
}

function sayHello() {
	alert("Hello, world!");
}

bark("Slava", 30);
bark("Slava", 29);

weight = PlusPlus(weight);

alert(weight);//1, 0