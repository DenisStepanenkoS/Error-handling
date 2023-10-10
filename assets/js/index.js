pow = function(base, exponent){
    
    if(typeof base !== "number" || typeof exponent !== "number")
        throw new Error("base or exponent not a number");
    
    if (exponent === 0)
        return 1;
    else if (exponent > 0)
        return base * pow(base, exponent - 1);
    else if (exponent < 0)
        return 1 / (base * pow(base, -exponent -1));
}
try{
    console.log(pow(2,3));
} catch(Error){
    console.log(Error);
}

