class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }

    render() {
        let myApp = document.getElementById(this.parentID, this.text);
        
        const myButtonHTML = myApp.innerHTML + "<button>" + this.text + "</button>";

        myApp.innerHTML = myButtonHTML; 
    }
};

class  Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);
        
        const myInputHTML = myApp.innerHTML + "<input type = " + this.type + ">";

        myApp.innerHTML = myInputHTML; 
    }
};
//Button
let mySuperArrayofString = ["Login", "Signup" , "Reset", "Cancel"];

function RenderButton(text) {
    let myButton = new Button("app", text);
    myButton.render();
}

mySuperArrayofString.forEach(element => RenderButton(element));

//Input
let myInputArray = ["Username", "Surname" , "E-mail", "Password"];

function RenderInput(type) {
    let input_type = "none"

    switch (type) {
        case "Password":
            input_type = "password"
            break;
            case "E-mail":
            input_type = "email";
            break;
        default:
            input_type = "text";
        break;
    }
    let myInput = new Input("app", input_type);
    myInput.render();
}

let myInputArrayFiltered = myInputArray.filter(element => element == "Password");

myInputArrayFiltered.forEach(function (element) {
    RenderInput(element);
});

