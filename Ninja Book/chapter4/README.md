#Chapter 4

1. Create a recursive function that will calculate the fibonacci value of a number. 

    Example: 
    ```javascript
    var n = fibonacci (4); // 3 var m = fibonacci (9); // 34 
    ```
    Use of recursion. 

2. Create a function that will recursively go through all of the elements of an array of numbers and add them. 

    Example: 
    ```javascript
    var arr = [ 1, 3, 5, 7]; var sum = addRec (arr); // 16 
    ```
    Use of recursion. 

3. Create a custom object type that will hold a number value.  

    a. Make sure that no other data type can be assigned to that variable.  
    
    b. It must hold ONLY numbers.  
    
    Validation, setters & getters, private variables 

4. Write a function that will accept any number of arguments and print out their data type. 

    Example: 
    ```javascript
    dataType (1, 6.2831, “pi*2”, [function(){}, 1], {}, function () {});  // number, float, string, array, object, function 
    ```
    
    Variable argument functions & data types 

5. Write a function that will calculate the distance between two points. The function should be able to handle 2D and 3D points. 

    Example: 
    ```javascript
    var x1 = 1, y1 = 2, z1 = 1; 
    var x2 = 2, y2 = 2, z2 = 4; 
    var delta1 = distance (x1, y1, x2, y2); // delta = 1 var delta2 = distance (x1, y1, z1, x2, y2, z2); // delta = 3.1622… 
    distance (x1, x2); // should throw an error: Insufficient parameters 
    ```
    Function overloading and validation

6. Make the function from exercise 5 accept its parameters as either a parameter list or as two arrays containing 2D or 3D point data.  

    Example: 
    ```javascript
    distance (1, 2, 2, 2); // returns 1 (done as part of exercise 5) distance ([1,2], [2,2]); // returns 1 
    distance ([1,2], [2,2,4]); // error: incompatible point data 
    ```
    
    Function overloading and validation 
