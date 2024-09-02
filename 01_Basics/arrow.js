console.log("arrow function")

const user ={
    username:"saddam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
    }
}
user.welcomeMessage();
user.username="sam";
user.welcomeMessage();