export const randomNumber=(min,max)=>{
    return Math.floor(Math.random() * (max - min) + min);         
}

export const randomLower=()=>{
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];         
}

export const randomUpper=()=>{
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];         
}

export const randomSymbol=()=>{
    const symbol = '!@#$%^&*()<>,.?/[]{}-=_+|/';
    return symbol[Math.floor(Math.random() * symbol.length)];         
}



