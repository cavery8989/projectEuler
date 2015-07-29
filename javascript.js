    /* challange 1 ... 
    
        When runchal1 is pressed the value of input box chal1input is taken and stored
        in the chal1val variable. this value is then loaded into a funthion that adds
        together any numbers that are divisible by either 3 or 5 that exist between 1
        and its value. the result is diplayed in the span tag.
        */
        
    document.getElementById("runchal1").onclick = function () {
        
       
        var chal1val = document.getElementById("chal1input").value;
        
        function euler1(input) {
            
            var sum = 0;

            for (var i=1;i<input;i++) {
                if(i%3===0 || i%5===0) {
                        sum += i;
                    }
                }  
                return sum;
            }
        
        
            var answer = euler1(chal1val);
        
            document.getElementById("ans1").innerHTML=answer;
        

            }	
    
    /* challange 2 ... 
            
            Use while loop to run counting sequence untill input X is reached. Check
            to see if current nubmer is sequence is even, if it is add it to the sum 
            variable. 
            return sum when x is reached. 
        
        */
    
    document.getElementById("runchal2").onclick=function(){
     
        var chal2val = document.getElementById("chal2input").value;
        
         function euler2(x){
             
             var current = 2;
             var old =1;
             var oldTemp = 0;
             var sum = 0;

                while (current < x){
                 
                    if(current%2===0){
                        sum+=current;
                    }
                    
                        oldTemp=current;
                        current=old + current;
                        old=oldTemp;
                    
                }

                return sum;
            }
            
           var ans = euler2(chal2val);
           document.getElementById("ans2").innerHTML=ans;
    }
    
    /* challange 3 ... 
            
            Number is divided by divisor (and divisor is added to factor array) untill
            the dvision between muber and divider leaves a remainder. At this point
            divisor is incremented by 1 and the process continues. If number reaches
            the largest prime factor has been found and the cycle stops.
        
        */
    
    document.getElementById("runchal3").onclick=function(){
        
        
        var number =  600851475143;
        var divisor =2;
       var factors =[];
        
       while(number > 1){
        
            while (number % divisor == 0){
                factors.push(divisor);
                number/=divisor;
            }

            divisor++;
        
       }
        
        
        document.getElementById("ansArray").innerHTML = factors;
         document.getElementById("ans3").innerHTML = Math.max.apply(Math, factors);
        
        
    }