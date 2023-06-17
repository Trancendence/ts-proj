"use strict";
class House {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
    }
    showAddress() {
        console.log('Address ' + this.street);
    }
    showType() {
        console.log('Type ' + this.type);
    }
    addTenant(name) {
        this.tenants.push(name);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
class StoneHouse extends House {
    constructor(street, general) {
        super('stone', street);
        this.chargeOfTheHouse = general;
    }
    showTenants() {
        console.log('General:' + this.chargeOfTheHouse);
        super.showTenants();
    }
}
const stoneHouse = new StoneHouse('Stone-world', 'Nikita');
//# sourceMappingURL=app.js.map