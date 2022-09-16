class Company{
   

    constructor(id, name, address){
        this.id = id;
        this.name = name;
        this.address = address;
    }
     getId() {
            return this.id;
        }

	 setId( id) {
        this.id = id;
    }

    getName() {
    return this.name;
}

 setName( name) {
    this.name = name;
}

getAddress() {
    return this.address;
}

setAddress( address) {
    this.address = address;
}

   }

    

export default Company;