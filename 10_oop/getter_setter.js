class User{
    constructor(email, password){
       this.email = email
       this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }



    get password(){
        return `${this._password}trupti`
    }

    set password(value){
       this._password = value.toUpperCase()
    }
}

const trupti = new User("tr@gmail.ai", "abc")
console.log(trupti.password);
console.log(trupti.email);

