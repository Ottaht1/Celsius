// This function converts Fahrenheit to Celsius
function convertFahrToCelsius(fahrenheit){
    let type = typeof fahrenheit
    if(!Number(fahrenheit)){
       return `${type === "object" ? JSON.stringify(fahrenheit) : fahrenheit} is not a valid number but a/an ${Array.isArray(fahrenheit) ? "array" : type}.`
    }
    return ((fahrenheit - 32) * (5/9)).toFixed(4)
}

//console.log(convertFahrToCelsius([1,2,3]))

//
function checkYuGiOh(n){
    let type = typeof n
    if(!Number(n)){
       return `invalid parameter: ${type}` 
    }
    const Myarray = []
    for(let i =1;i <= n; i++){
        let answer = ""
        if(i % 2 == 0){
            answer += "yu"
        }
        if(i % 3 == 0){ 
            if(answer){
                answer += "-"
            }
            answer += "gi"
        }
        if(i % 5 == 0){ 
            if(answer){
                answer += "-"
            }
            answer += "oh"
        }
        if(!answer){
            answer = i
        }
        Myarray.push(answer)
    }
    return Myarray
}

console.log(checkYuGiOh(10))