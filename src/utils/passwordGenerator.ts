const special_characters=['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '+', '.', ',', ';', '?', '{', '[', '}', ']', '^', '>', '<', ':','ç']
const numbers=["0","1","2","3","4","5","6","7","8","9"]
const lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const uppercase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const all=[...uppercase,...lowercase,...numbers,...special_characters]
const length = 12

export default async function passwordGenerator(){
    let password = new Password().getNew();    
    return password
}
class Password {
    password: string;
    constructor(){
        this.password = this.getPassword()
    }
    getNew(){
        let validation = new validatePassword(this.password).validate()
        if (!validation){
            this.password = this.getPassword()
            this.getNew()  
        }
        return this.password;
    }    
    getPassword(){
        let password = ''
        
        for (let i = 0; i <= length; i++){
            password += all[Math.floor(Math.random()*all.length)];
        }
        return password
    }
}

class validatePassword {
    password: string;
    valid: boolean;
    constructor(password: string){
        this.password = password;
        this.valid = true;
    }
    validate(){
        if(!this.hasUpper(this.password)) this.valid = false;
        if(!this.hasLower(this.password)) this.valid = false;
        if(!this.hasNumber(this.password)) this.valid = false;
        if(!this.hasSpecialChar(this.password)) this.valid = false;
        if(!this.hasEnoughChars(this.password)) this.valid = false;
        if(!this.hasDuplicated(this.password)) this.valid = false;

        return this.valid;
    }
    hasUpper(password: string){
        let response = 0
        for(let i = 0; i <= password.length; i++){
            if(uppercase.indexOf(password.charAt(i)) !== -1 ){
                response +=1
            }
        }
        if (response == 0) return false;
        return true;
    }
    hasLower(password: string){
        let response = 0
        for(let i = 0; i <= password.length; i++){
            if(lowercase.indexOf(password.charAt(i)) !== -1 ){
                response +=1
            }
        }
        if (response == 0) return false;
        return true;
    }
hasNumber(password: string){
    let response = 0
    for(let i = 0; i <= password.length; i++){
        if(numbers.indexOf(password.charAt(i)) !== -1 ){
            response +=1
        }
    }
    if (response == 0) return false;
    return true;
}
hasSpecialChar(password: string){
    let response = 0
    for(let i = 0; i <= password.length; i++){
        if(special_characters.indexOf(password.charAt(i)) !== -1 ){
            response +=1
        }
    }
    if (response == 0) return false;
    return true;
}
hasEnoughChars(password: string){
    let upper = 0
    let lower = 0
    let number = 0
    let specials = 0
    let response = true;
    for(let i = 0; i <= password.length; i++){
        if(uppercase.indexOf(password.charAt(i)) !== -1 ){
            upper +=1
        }
        if(lowercase.indexOf(password.charAt(i)) !== -1 ){
            lower +=1
        }
        if(numbers.indexOf(password.charAt(i)) !== -1 ){
            number +=1
        }
        if(special_characters.indexOf(password.charAt(i)) !== -1 ){
            specials +=1
        }
    }
    if ((upper < 3) || (lower < 3) || (number < 3) || (specials < 3)){
        response = false;
    }

    return response    
}
hasDuplicated(password: string){
    let pwdArray: string[]= password.split('')
    let pwdObject: object = {}    
    let response = true
    for (let i = 0; i < password.length; i++){
        if(pwdObject[password.charAt(i)]){
            pwdObject[password.charAt(i)] = pwdObject[password.charAt(i)] + 1
        } else {
            pwdObject[password.charAt(i)] = 1
        }
    }

    for (let key in pwdObject){
        if (pwdObject[key] > 1 ) response = false
    }

     return response
}
}