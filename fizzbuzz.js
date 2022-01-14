
function fizzBuzz(num){

    for(let i = 0; i < num; i++){
        if (num % 15==0){
            console.log("FizzBuzz"); //Checks if divisable by 3 & 5
        }
        else if (num % 5 == 0){
            console.log("Buzz"); //Checks if divisable by 5
        }
        else if (num % 3 ==0){
            onsole.log("Fizz"); //Checks if divisable by 3 
        }
        else{
            console.log(num); //Prints all othe numbers that dont meet requirement
        }
    }   
}


fizzBuzz(100);
