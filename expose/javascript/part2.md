# CSE 110 Lab 4
## Part 2

1. Line 11 will print *3*. *i* is accessable in line 12 but not a part of the *for* loop, therefore, it will print only the last value that *i* stored. The *for* loop itterates the same number of times as elements in prices array, hece 3 is the last value stored in *i*.
2. Line 11 will print *150*. *discountedPrice* is accessable in line 11 but not a part of the *for* loop, therefore, it will print only the last value that *discountedPrice* stored.
3. Line 11 will print *150*. *finalPrice* is accessable in line 11 but not a part of the *for* loop, therefore, it will print only the last value that *finalPrice* stored. Since 300 divides in half without any remainder, there is nothing to be rounderd, therefore, there is no difference between outputs from question 2 and 3.
4. The function will return a *discounted* array of *[50, 100, 150]*.
5. Line 11 will cause an *Uncaught Reference Error* as *i* is not defined past the *for* loop block - out of scope.
6. Line 11 will cause an *Uncaught Reference Error* as *discountedPrice* is not defined past the *for* loop block - out of scope.
7. Line 11 will print *150*. *finalPrice* is accessable in line 11 but not a part of the *for* loop, therefore, it will print only the last value that *finalPrice* stored.
8. The function will return a *discounted* array of *[50, 100, 150]*. Since *discounted* array is  defined outside of the *for* loop it can be accessed anywhere throughout the function. The array gets updated within the loop and returned outside of it. *finalPrice* has the same scope as *discounted* array and *discountedPrice* is only needed within the *for* loop, where it is within it's scope as well.
9. Line 11 will cause an *Uncaught Reference Error*: *i* is not defined past the *for* loop block - out of scope.
10. Line 11 will print *3*. The length of the array is not being changed in the function, hence it prints *length* value without issues.
11. The function will return a *discounted* array of *[50, 100, 150]*. Although the *discounted* array is constant, and new values cannot be assigned directly, JavaScript allows to push new elements to it. *discountedPrice* is also constant, but it is initialized at every iterration of the *for* loop and therefore it not considered to be rassigned. Hence, the function runs without errors.
12. Object Notation:
    1.  student.name
    2.  student["Grad Year"]
    3.  student.greeting()
    4.  student["Favorite Teacher"].name
    5.  student.courseLoad[0]);
13. Type Conversion - Arithmetic
    1.  '3' + 2 = 32 --> "+" can be interpreted as an addition operation or string concatenation. When adding a string and a number, "+" gets interpreted as concatenation operator. 
    2.  ‘3’ - 2 = 1 --> Subtracting a number from a string converts the string into a number and outputs the result of numeric subtraction.
    3.  3 + null = 3 --> Adding *null* to a number converts *null* to 0 and outputs the result of a numeric addition.
    4.  ‘3’ + null = 3null --> *null* evaluates to 0 resulting in addition of a string and a number. Hence, "+" gets interpreted as string concatenation.
    5.  true + 3 = 4 --> *true* evaluates to 1 and the result is a numeric addition.
    6.  false + null = 0 --> *false* evaluates to 0 and null evaluates to 0, both add to 0.
    7.  '3' + undefined = 3undefined --> *undefined* evaluates to NaN and NaN is a type of number. This results in addition of string and a number which gets interpreted as string concatenation.
    8.  '3' - undefined = NaN --> *undefined* evaluates to NaN, any arithmetic operations on NaN result in NaN.
14. Type Conversion - Comparison
    1.  ‘2’ > 1 = true --> When comparing string with a number, string gets converted into a number resulting in numeric comparison.
    2.  ‘2’ < ‘12’ = false --> Comparison of two strings checks character by character. Since 2 is greater than 1, the result is false.
    3.  2 == ‘2’ = true --> When comparing string with a number, string gets converted into a number resulting in numeric comparison.
    4.  2 === ‘2’ = false --> Strict equality operator checks the equality without type conversion.
    5.  true == 2 = false --> True evaluates to 1.
    6.  true === Boolean(2) = true --> *Boolean()* evaluates all numbers (different than 0 and NaN) to true. Hence, the result is a strict comparison of two items of the same type.
15. "==" converts all values to numbers before comparison, "===" compares without type conversion. Hence, "===" will result in *true* only if both compared values and types are the same.
16. part2-question16.js
17. Function *modifyArray* goes over each element in a passed array, calls a *callback* function with a given element as a parameter, then *doSomething* returns a modified value which gets pushed into *newArr*. After repeating the process for each element in *array*, *modifyArray* returns *newArr* with all it's modified values.
18. part2-question18.js
19. Output: 1, 4, 3, 2