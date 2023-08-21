export const validationNTF = (h1, m1, h2, m2, title, body) => {
    let isValid = false;
    let validationPoints = 0;
    
    if(parseInt(h1) >= 0 && parseInt(h1) <= 23 
    && parseInt(m1) >= 0 && parseInt(m1) <= 59
    && parseInt(h2) >= 0 && parseInt(h2) <= 23 
    && parseInt(m2) >= 0 && parseInt(m2) <= 59){
        validationPoints += 1;
    }

    if(((parseInt(h1) * 60) + parseInt(m1)) <= ((parseInt(h2) * 60) + parseInt(m2))){
        validationPoints += 1;
    }

    if(title.length > 0 || body.length > 0){
        validationPoints += 1;
    };

    if(validationPoints === 3){
        isValid = true;
    }

    return isValid;
};