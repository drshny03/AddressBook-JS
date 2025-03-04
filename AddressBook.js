//class to store contant details
class Address {//uc1
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
        //validate fields
        this.validate();
    }
    validate() { //uc2
        //regex 
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^[0-9]{10}$/;
        const addressRegex = /[A-Za-z0-9\s]{4,}/;
        const zipRegex = /^\d{6}$/;
        //validate field
        if (!emailRegex.test(this.email)) {
            throw new Error("Invalid email");
        }
        if (!nameRegex.test(this.firstName) || !nameRegex.test(this.lastName)) {
            throw new Error("Invalid First or last name");
        }
        if (!addressRegex.test(this.address)) {
            throw new Error("Invalid address");
        }
        if (!addressRegex.test(this.state)) {
            throw new Error("Invalid state");
        }
        if (!addressRegex.test(this.city)) {
            throw new Error("Invalid city");
        }
        if (!phoneRegex.test(this.phoneNumber)) {
            throw new Error("Invalid phone number");
        } if (!zipRegex.test(this.zip)) {
            throw new Error("Invalid ZIP code");
        }
    }
}
//uc3
let addressBook = []  //array to store address
//function to store addressbook to array
function addAddress(address){
    //uc7
    let duplicateLength = addressBook.filter(existingAddress => existingAddress.firstName === address.firstName);
    if(duplicateLength > 0){
        console.log(address.firstName, " already exist");
        return;
    }
    addressBook.push(address);
}
//uc4
function editAddress(name, address){ //function to find and edit contact
    let existingAddress = addressBook.find(address => address.firstName === name);
    if (existingAddress) {
        Object.assign(existingAddress, address);
        address.validate();
    } else {
        console.log("address not found");
    }
}
function deleteAddress(name){ //uc5
    let index = addressBook.findIndex(address => address.firstName === name)
    if(index !== -1){
        addressBook.splice(index,1);
    }else{
        console.log("address not found");
    }
}
function findNumberOfAddress(){ //uc6
    let totalCount = addressBook.reduce(count => count+1, 0);
    return totalCount;
}