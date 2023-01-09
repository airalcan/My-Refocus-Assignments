var beatsPerMinute = 131


function isbeatsPerMinutesNormal(beatsPerMinute){
    
    if (beatsPerMinute <= 100) {
            console.log("normal reading"); 
        } else if ((beatsPerMinute >= 101) && (beatsPerMinute <= 109)) {
            console.log("acceptable to continue home monitoring");
        } else if ((beatsPerMinute >= 110) && (beatsPerMinute <= 130)) {
            console.log("Seek Advice from Health Professinals");
        } else if ((beatsPerMinute >= 131)) {
            console.log("Seek urgent medical advice");
        } else {
            console.log("the value of the beatsPerMinute variable is not numerical");

        }

    }

    isbeatsPerMinutesNormal(beatsPerMinute);