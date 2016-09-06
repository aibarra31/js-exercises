#Chapter 3 Exercises
1. Create a function that will multiply two numbers. The function must return the result in base 13. 

    Example: 
    ```javascript
    var answer = mul (9, 6); // 42 
    ```
    Basic function creation together with built­in JS Math functionality. 

2. Create a function that will return the addition of N numbers. 

    Example: 
    ```javascript
    var answer = add (1, 2) + add ( 1, 4, 6, 7, 2); 
    ```
    Dynamic argument list handling with JS 

3. Create an object that will hold methods for adding, multiplying, and factorial operations. 

    Example: 
    ```javascript
    var a = myMath.add (1, 2, 3); //6 var b = myMath.mul (1, 2, 3); // 6 
    
    var c = myMath.fact ( 3); // 6 
    ```
    
    Use of anonymous functions and functions as object properties (methods.)  


4. Create a custom object that will hold an image’s mock information such as pixel color                             data, image size, and name. It must be able to return the information. 

    Example:
    ```javascript
    var data = new Array (1600); // 40 x 40 px dummy image data 
    var img = new Image (data, 40, 40, ‘myImage’); 
    img.width; // 40 
    img.height; // 40 
    img.name; // ‘myImage’ 
    
    img.pixelData (20, 4); // returns the color of the pixel at that position. 
    ```

5. Create a function that will print out the properties of an object.  

    a. If one parameter is provided, it should print out all of the properties accessible by that object. 
    
    b. If a second, boolean value, parameter is provided, it should only print out the values that belong to the object instance itself if true.  

  Example: 
  ```javascript
  function CustomObject (a, b) { 
    this.a = a; 
    this.b = b; 
  } 
  CustomObject.prototype.c = function () { return this.a + this.b; }; 
  var obj = new CustomObject (1, 2); 
  printObjProp (obj); // output: a, b, c
  printObjProp (obj, false); // output: a, b, c 
  printObjProp (obj, true); // output: a, b 
  ```
