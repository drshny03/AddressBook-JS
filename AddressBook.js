//class to store contant details
class Address {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
       
        this.validate();
    }
    validate() { 
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

let addressBook = []  
function addAddress(address){
    
    let duplicateLength = addressBook.filter(existingAddress => existingAddress.firstName === address.firstName);
    if(duplicateLength > 0){
        console.log(address.firstName, " already exist");
        return;
    }
    addressBook.push(address);
}

function editAddress(name, address){ 
     let existingAddress = addressBook.find(address => address.firstName === name);
    if (existingAddress) {
        Object.assign(existingAddress, address);
        address.validate();
    } else {
        console.log("address not found");
    }
}
function deleteAddress(name){ 
    let index = addressBook.findIndex(address => address.firstName === name)
    if(index !== -1){
        addressBook.splice(index,1);
    }else{
        console.log("address not found");
    }
}
function findNumberOfAddress(){ 
    let totalCount = addressBook.reduce(count => count+1, 0);
    return totalCount;
}

function searchByCityOrState(city, state)
 { 
    return addressBook.filter(address => address.city === city || address.state === state);
}

function viewByCityOrState(city, state)
{
    let viewAddress = addressBook.filter(address => address.city === city || address.state === state);
    console.log(viewAddress);
    
}
function countByCityOrState(city, state)
{
    return searchByCityOrState(city,state).length;
}

function sortByName()
{ 
    addressBook.sort((first, second) => 
        (first.firstName > second.firstName) ? 1:-1);
}

function sortByCity(){//uc12
    addressBook.sort((first, second) => 
        (first.city > second.city) ? 1:-1);
}
//test 
let darshanAddress = new Address("Darshan", "Yadav", "Narela", "Bhopal", "Madhya Pradesh", 402022,7049752155, "drshny@gmail.com");
let rajveerAddress = new Address("Rajveer", "Kajle", "AnandNagar", "Bhopal", "Madhya Pradesh", 402022,1234567890, "rajveer@gmail.com");

addAddress(darshanAddress);
addAddress(veerAddress);
viewByCityOrState("Bhopal");
let totalAddresss = findNumberOfAddress();
console.log(totalAddresss);
