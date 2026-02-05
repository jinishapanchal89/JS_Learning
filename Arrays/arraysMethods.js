
// 1. Push method: adds an element at the end of an array

 let lang = ["Python", "C#", "Java"];
 lang.push("Rubby", "Javascript");
 console.log(lang);

 console.log("--------------------------------------------------------");

 // 2. Pop method: removes last element from the array

 let num = [1, 2, 3, 4, 5, 6];
 num.pop();
 console.log(num);

 console.log("--------------------------------------------------------");

 // 3. shift method: it removes and returns the first element of an array

 let fruits = ["Apple", "banana", "Mango"];
 console.log(fruits.length);
 let firstfruit = fruits.shift();
 console.log(firstfruit);
 console.log(fruits);

 console.log("--------------------------------------------------------");

 // 4. Unshift method: adds an element at the start of an array

 let colors = ["Red", "Black", "Blue"];
 console.log(colors.length);
 colors.unshift("Pink");
 console.log(colors);
 console.log(colors.length);

 console.log("--------------------------------------------------------");

 // 5. Splice method: removes and adds elemnent at the specified index number

 let animals = ["cat", "Cow", "Horse", "Dog"];
 animals.splice(1, 1, "Goat");
 console.log(animals);
 animals.splice(1, 2, "Bear", "Cat");
 console.log(animals);
 animals.splice(1, 2, "Bear");
 console.log(animals);

 console.log("--------------------------------------------------------");

 // 6. Slice method: it displays the value at the specified index num including first index and excluding last index

 let shapes = ["Circle", "Triangle", "Square", "Oval"];
 let shapes1 = shapes.slice(1,3);
 console.log(shapes1);

 console.log("--------------------------------------------------------");

 // 7. Concat method: it is used to conact two arrays

 let cars =["BMW", "Audi", "Safari"];
 let num1 = [1, 2, 3, 4];
 let mixedarrays = cars.concat(num1);
 console.log(mixedarrays);
 let mixedarrays1 = num1.concat(cars);
 console.log(mixedarrays1);

 console.log("--------------------------------------------------------");

 // 8. indexOf method: it is used to find the index of an given element

 let color = ["Red", "Blue", "Orange", "Purple", "Red"];
 let indexOfRed = color.indexOf("Red");
 console.log(indexOfRed);
 let indexOforange = color.indexOf("Orange");
 console.log(indexOforange);
 let indexOfRed2 = color.indexOf("Red", color.indexOf("Red")+1);
 console.log(indexOfRed2);
 let indexOfBlack = color.indexOf("Black");
 console.log(indexOfBlack);
 console.log("--------------------------------------------------------");

 // 9. Includes method: it is used to find whether an array includes the given element in it or not

 let names = ["Jinisha", "Riyansh", "jainish"];
 let flag = names.includes("Riyansh");
 console.log(flag);
 let flag1 = names.includes("Ruhi");
 console.log(flag1);

 console.log("--------------------------------------------------------");

 // 10. forEach method: it is like for each loop

 let n = [1, 2, 3, 4, 5];
 n.forEach((e) => {
    console.log(e);
 })

 console.log("--------------------------------------------------------");

  n.forEach((e) => {
    console.log(e*2);
 })

 console.log("--------------------------------------------------------");

 // 11. every method: returns true if all the elements of the iterable are true

 let n1 = [1, 2, 3, 4, 5];
 let f = n1.every((e) => e<=10);
 console.log(f);

 console.log("--------------------------------------------------------");

 // 12. some method: returns true if atleast one of  the elements of the iterable is true

 let n2 = [1, 2, 3, 4, 5, 6];
 let fg = n2.some((e) => e % 2==0);
 console.log(fg);

 console.log("--------------------------------------------------------");

 // 13. find method: finds the first element that satisfies the given condition

 let n3 = [1, 2, 3, 4, 5, 6];
 let total = n3.find((e) => e%2==0);
 console.log(total);

 console.log("--------------------------------------------------------");

 // 14. lastIndexOf method: it is used to find the index number from last occurence 

 let colors1 = ["Red", "Black", "Blue", "Red", "Orange"];
 let lastIndexOfRed = colors1.lastIndexOf("Red");
 console.log(lastIndexOfRed);

 console.log("--------------------------------------------------------");

 // 15. reverse method: it is used to reverse an arrray

 let colors2 = ["Red", "Blue", "Orange", "Purple", "Red"];
 let revColors = colors2.reverse();
 console.log(revColors);

 console.log("--------------------------------------------------------");

 // 16. sort method: it is used to sort array alphabeticaaly

 let products = ["macbook", "iphone", "Tshirt", "123test", "Laptop"];
 let sortProducts = products.sort();
 console.log(sortProducts);

 console.log("--------------------------------------------------------");












 