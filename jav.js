function palindromeFun(){

    // console.log(PalindromeTest("radar"));
   // console.log(PalindromeTest("Fun stuff"));

   var bContinue = true;

   do{

    var userInput = prompt("Enter a word to see if it is a Palindrome: ");

    var bIsPalindrome = PalindromeTest(userInput);

    var message = "";

    if (bIsPalindrome){
        message = userInput + " is a Palindrome!";
    }

    else{

message = userInput + " is not a Palindrome!";

    }

    alert(message);

    var answer = prompt("Do you want to continue? (y/n)" );

    if (answer == "n"){
        bContinue = false;
    }

   }
   while(bContinue)


}

function PalindromeTest(strToTest){
    var strCleaned = strToTest.replace(/\s/g, "").toLowerCase();

    console.log("strCleaned=" + strCleaned);

    var strArray = strCleaned.split("");

    var strReversedArray = strArray.reverse();

    var strRev = strReversedArray.join("");

    console.log("strRev=" + strRev);

    var strArray = strCleaned.split("");

    var strReversedArray = strArray.reverse();

    var strRev = strReversedArray.join("");

    console.log("strRev=" + strRev);

    return strRev == strCleaned;
    
}
