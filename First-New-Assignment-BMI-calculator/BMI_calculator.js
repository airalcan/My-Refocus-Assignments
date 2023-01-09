function calculatebmi(weight, height){
    bmicalc = Math.round(weight / height **2);
    return bmicalc;
}
    
    let bmi = calculatebmi(177,60);

     if (bmi = 50){
        console.log ("your bmi is "+bmi+", so you are underweight");
     
     }else{
        if (bmi >=60 && bmi <= 65){
        console.log ("your bmi is "+bmi+", so you are normal weight");
        
        
     }else{
        if (bmi > 66){
            console.log ("your bmi is "+bmi+", so you are overweight");
        
     
     }else{
        if (bmi = 90){
            console.log ("your bmi is " +bmi+", so you are obese");
        }
        }
    }
     
   testbmi();
   }