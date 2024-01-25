//Objective: Print 'Hello world' 5 times
    // for(var i=1; i<=5; i++){
    //     document.write("Hello World","<br>")
    // }

//Objective: Print 1 to 10 counting using loop
    // for(var i=1; i<=10; i++){
    //     document.write(i,"<br>")
    // }

//Objective: Print table of any number with any line of number
    // var multiply = +prompt("Enter a number to print its multiplication table")
    // var size = +prompt("Enter Length of multiplication table")
    // document.write("Multiplication table of ", multiply,"<br>")
    // document.write("Length ",size)
    // for(var i=1; i<=size;i++){
    //     document.write(multiply+" X "+i+" = "+(multiply*i),"<br>")
    // }

//Objective: Print value from array
    // var A = ["Nokia", "Samsung","Apple", "Sony", "Huawei"]
    // for(var i=0; i<=A.length-1; i++){
    //     document.write(A[i],"<br>")
    // }

//Objective: Print value of array with index
    // var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    // for(var i=0; i<=fruits.length-1; i++){
    //     document.write(fruits[i],"<br>")
    // }
    // for(var i=0; i<=fruits.length-1; i++){
    //     document.write("Element at index ",i, " is ",fruits[i],"<br>")
    // }

//Objective: Print value of array with user input that how many item present in array
    // var num = +prompt("Enter number of items :")
    // var N = [];
    // for(var i=0;i<=num-1;i++){
    //     var item = prompt("Enter Value for index "+ i)
    //     N.push(item)
    // }
    // document.write("Number of items :",num,"<br>")
    // document.write("Items","<br><br>")
    // for(var j=0; j<=N.length-1;j++){
    //     document.write(N[j]+"<br>")
    // }

//Objective: Print Counting with 'reverse', 'Even', 'Odd' and simple counting
    // document.write("Counting:","<br><br>")
    // for(var i=1; i<=15;i++){
    //     document.write(i,", ")
    // }
    // // B
    // document.write("<br><br>","Revrse counting:","<br><br>")
    // for(var j=10; j>=1;j--){
    //     document.write(j,", ",)
    // }
    // // C 
    // document.write("<br><br>","Even:","<br><br>")
    // for(var k=0; k<=20;k+=2){
    //     document.write(k,", ")
    // }
    // // D
    // document.write("<br><br>","odd:","<br><br>")
    // for(var m=1; m<=20;m+=2){
    //     document.write(m,", ")
    // }
    // // E
    // document.write("<br><br>","Series:","<br><br>")
    // for(var n=1; n<=20;n++){
    //     document.write(n,"k",", ")
    // }

//Objective: Check that user input is available in array using if and else condition and loop
    // var items = ["cake","apple pie","cookie","chips","patties"]
    // var userInp = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am ?")
    // var match = false
    // for(var i=0; i < items.length; i++){
    //     if(userInp == items[i]){
    //         match = true
    //         document.write(userInp+" is avaiable at index ", [i], " in our bakery")
    //         break;
    //     }
    // }
    // if(match == false){
    //     document.write("We are sorry "+ userInp + " is not available in our bakery")
    // }

//Objective: Print largest number from array
    // var num = [24, 53, 78, 91, 12]
    // var largenum = num[0]
    // document.write("Array items: ")
    // for(var i=0;i<num.length;i++){
    //     document.write(num[i]+",")
    // }
    // for (var j=0; j<num.length; j++){
    //     if(num[j] > largenum){
    //         largenum = num[j]
    //     }
    // }
    // document.write("<br>","The largest number is ",largenum)

//Objective: Print smallest number fromm array
    // var num = [24, 53, 78, 91, 12]
    // var smallnum = num[0]
    // document.write("Array items: ")
    // for(var i=0;i<num.length;i++){
    //     document.write(num[i]+",")
    // }
    // for (var j=0; j<num.length; j++){
    //     if(num[j] < smallnum){
    //         smallnum = num[j]
    //     }
    // }
    // document.write("<br>","The Smallest number is ",smallnum)

//Objective: Print both largest and smallest number in array
    // var numArray = [24, 53, 78, 91, 12];
    // var largestNumber = numArray[0]
    // var SmallestNumber = numArray[0]
    // document.write("Array items: ")
    // for(var i=0;i<numArray.length;i++){
    //     document.write(numArray[i]+",")
    // }
    // for (var j=0; j<numArray.length; j++){
    //     if(numArray[j] > largestNumber){
    //         largestNumber = numArray[j]
    //     }
    //     if(numArray[j] < SmallestNumber){
    //         SmallestNumber = numArray[j]
    //     }
    // }
    // document.write("<br>","The Largest number is ",largestNumber)
    // document.write("<br>","The Smallest number is ",SmallestNumber)

//Objective: Print counting from 1 to 100 with increment of 5
    // for(var i=5; i<=100;i+=5){
    //     document.write(i,", ")
    // }

//Objective: Print value from array till user input
    // var scores = [12, 45, 3, 22, 34, 50]
    // var stopValue = +prompt("Enter the stop value :")
    // if (!isNaN(stopValue)) {
    //     var printedNumbers = [];
    //     for (var i = 0; i < scores.length; i++) {
    //         if (scores[i] <= stopValue) {
    //             printedNumbers.push(scores[i]);
    //         } else {
    //             break; 
    //         }
    //     }         
    // } else {
    //     alert("Invalid input. Please enter a valid number for the stop value.");
    // }
    // for (var j = 0; j < printedNumbers.length; j++) {
    //     document.write(printedNumbers[j]," ");
    // }

//Objective: Print 2d Array using nested loop
    // var counting = [[1,2,3],[4,5,6],[7,8,9]];
    // for(var i=0;i<counting.length;i++){
    //     for(var j=0; j<counting[i].length; j++){
    //         document.write(counting[i][j]," ")
    //     }
    //     document.write("<br>")
    // }

//Objective: Print userinput and take decrement with 0.5
    // var usernum = +prompt("Enter a number :")
    // for(var i=usernum;i>=0;i-=0.5){
    //     document.write(i,", ")
    // }

//Objective: Print Odd and Even number
    // for (var i = 0; i <= 20; i++) {
    //     if (i % 2 === 0) {
    //         document.write(i + " is even","<br>");
    //     } else {
    //         document.write(i + " is odd","<br>");
    //     }
    // }

//Objective: Print product value and multiply with them and take increment with 2
    // var product = 1;
    // for(var i=1; i<=7; i+=2){
    //     product *=i;
    // }
    // document.write(product)

//Objective: Print * Pattern
    // var initialNumber = +prompt("Enter number of stars");
    // for(var i=initialNumber; i>=1; i--){
    //     for(var j=1; j<=i;j++){
    //         document.write("*"," ")
    //     }
    //     document.write("<br>")
    // }

//Objective: Print different pattern using loop *
    // A
    // var initialNumber = +prompt("Enter number of stars");
    // for(var i=1; i<=initialNumber; i++){
    //     for(var j=1; j<=initialNumber;j++){
    //         document.write("*"," ")
    //     }
    //     document.write("<br>")
    // }

    // B)
    // var initialNumber = +prompt("Enter number of stars");
    // for(var i=1; i<=initialNumber; i++){
    //     for(var j=1; j<=i;j++){
    //         document.write("*"," ")
    //     }
    //     document.write("<br>")
    // }

    // C)
    // var initialNumber = +prompt("Enter number of stars");
    // for(var i=initialNumber; i>=1; i--){
    //     for(var j=1; j<=i;j++){
    //         document.write("*"," ")
    //     }
    //     document.write("<br>")
    // }