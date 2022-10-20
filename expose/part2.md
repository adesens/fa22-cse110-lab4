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