#Chapter 3 Exercises
1. Create a function that will multiply two numbers. The function must return the result in base 13. 

    function mul (x,y) {
	var z = x*y;
	return z.toString(13);
}

mul(9,6);

2. Create a function that will return the addition of N numbers. 

    function add() {
	var total =0;
	for(var h=0; h < arguments.length; h++){
		total += arguments[h];
	}
	
	console.log (total);
}

add(1,2);
add(1,4,6,7,2);

3. Create an object that will hold methods for adding, multiplying, and factorial operations. 

   var myMath={
	add:add,
	mul:mul,
	fact:fact
};


function add() {
	var total = 0;
	for(var a=0; a < arguments.length; a++){
		total = total+arguments[a];
	}
	return total;
}

function mul() {
	var total = 1;
	for(var b=0; b < arguments.length; b++){
		total = total*arguments[b];
	}

  return total;

// console.log (total);
}



function fact(ace) {
	var total = 1;
//	var ace=5;
	  for(var c=1; c <= ace ; c++){
		total = total*[c];
	}
console.log ("ace= ",ace);	
	return total;
	
//console.log (total);	
}



var a=myMath.add(1,2,3);

var b=myMath.mul(5,2,3);
var c=myMath.fact(2); //6
var d=myMath.fact(1); //120
console.log(a,b,c,d); 


4. Create a custom object that will hold an image’s mock information such as pixel color                             data, image size, and name. It must be able to return the information. 

   function Image(width,height,name,data){
	this.width = width;
	this.height = height;
	this.name = name;
	this.data = data;
}

Image.prototype.pixelData = function (x,y) {
	return this.data [x * this.width + y];
};

var arr=new Array(1600);
var img= new Image(40,40,"myImage",arr);
// var height = 40
// var width = 40
// var name = "my image";
// var data = 40^2;

console.log(arr);

    ```

5. Create a function that will print out the properties of an object.  

   function CustomObject (a,b){
	this.a=a;
	this.b=b;
	
}

CustomObject.prototype.c=3;

var obj=new CustomObject (4,5);
var obj2 =new CustomObject (6,7);

function printObjProp(arguments1,arguments2){
	var output = "";
	for (var key in obj){
		if((arguments2!==true)||(key!=="c")){
			if(obj.hasOwnProperty(arguments2)===false){
				output=output+""+key;
			}
		}
	}
	console.log(output);
}



printObjProp (obj); // output: a, b, c
printObjProp (obj, false); // output: a, b, c 
printObjProp (obj, true); // output: a, b 
