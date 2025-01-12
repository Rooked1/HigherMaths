window.addEventListener("DOMContentLoaded", function() {
    //maybe change into 2 data objects and have img , need to check how to do this
    data={
        "if you are asked to factorise 2x&sup2;-9x+4 what numbers should you use?": "Use the multiples of the first and last numbers to make the middle number {2&1 and 4&2 make (2x-1)(x-4)}",
        "What form do quadratic equations take?": "y = ax&sup2;     +bx+c",
        "What form do you have to change the equation in to complete the square?":"y=k(x+p)&sup2; + q",
        "When you put a qudratic into the complete the square form y=k(x+p)&sup2 +q; where is the turning point?":"The turning point is at (-p,q) and a vertical line of symmetry x=-p",
        "If a in a quadratic equation(y = ax&sup2;) is greater than 0 does the graph have a maximun or minimum turning point?": "Minimum (or happy graph as opposed to glum)",
        "What is the equation of the disciminant?":"&radic;(b&sup2;-4ac)",
        "To work out if a straight line cuts , touches or does not touch that curve, what would you do?":"Substitue the line equation into the curve equation and make it into a quadratic equation",
        "If &radic;(b&sup2;-4ac)>0 how many points or interaction are there between the curve and the line":"2",
        "If &radic;(b&sup2;-4ac)=0 how many points or interaction are there between the curve and the line":"1",
        "If &radic;(b&sup2;-4ac)<0 how many points or interaction are there between the curve and the line":"0",
        'What is it called when you divide (or factorise) a polynomial?' : "Synthetic division",
        ' If you were asked to show that (x-2) was a factor in a polynomial what number would be the divisor?':"2",
        'next one here': 'yes here!'
    }
    
    //count clicks and record in variable, use that variable to get object variable and put into element
        
        let clickCount=0;
        let clickCount1=0;
        let abery = document.getElementById("quet");
        let bbery = document.getElementById("ans")
        document.getElementById("queBtn").addEventListener("click", myFunction);
        document.getElementById("ansBtn").addEventListener("click", myFunction1);
        
        function myFunction(){

        if(clickCount==clickCount1){
        abery.innerHTML="";
        bbery.innerHTML="";
        let van=Object.keys(data);
        abery.innerHTML+=van[clickCount];
        clickCount+=1;
        abery.style.border="2px solid black";
        bbery.style.border="dashed";
        abery.style.background="white";
        bbery.style.background="rgba(128, 128, 128, 0.075)";
        } return;}
    
    
        function myFunction1(){
             
            if(clickCount-1==clickCount1){
            bbery.innerHTML="";
            let answer=Object.values(data);
            bbery.innerHTML+=answer[clickCount1];
            clickCount1+=1;
            bbery.style.border="2px solid black";
            abery.style.border="dashed";
            bbery.style.background="white";
            abery.style.background="rgba(128, 128, 128, 0.075)";
            } return;}
    
    false}
    
    );
    