// This
const reservation = {
    name: 'Chris',
    lastname: 'Redfield',
    total: 5000,
    paid: false,
    information: function() {
        console.log(`The client ${this.name} ${this.lastname} has a reservation of $${this.total}`);
    }
}