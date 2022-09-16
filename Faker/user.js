class User{
    constructor(id,firstName,lastName,phoneNumber,email,password){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }
    getId() {
            return this.id;
        }

	setId(id) {
        this.id = id;
    }

    getFirstName() {
    return this.firstName;
}

	setFirstName(firstName) {
    this.firstName = firstName;
}

 getLastName() {
    return this.lastName;
}

	setLastName(lastName) {
    this.lastName = lastName;
}

getPhoneNumber() {
    return this.phoneNumber;
}

 setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
}

 getEmail() {
    return this.email;
}
setEmail( email) {
    this.email = email;
}

getPassword() {
    return this.password;
}

setPassword(password) {
    this.password = password;
}

    

}

export default User;