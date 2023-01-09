var oxygen = 96

function isOxygenSaturationNormal(oxygen){
    if (oxygen >= 96) {
            console.log( "normal reading" );
    }else if ((oxygen <= 96) && (oxygen >= 95)) {
        console.log( "acceptable to continue home monitoring" );
    }else if ((oxygen >= 93) && (oxygen <= 94)) {
        console.log( "Seek Advice from Health Professinals" );
    }else if ((oxygen >= 92)) { 
        console.log( "Seek urgent medical advice" );
    }else {
        console.log( "the value of the oxygen variable is not numerical" );
    
    }

}

isOxygenSaturationNormal(oxygen);