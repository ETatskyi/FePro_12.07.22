function getAccess() {
    return this.access
}

const guest = {
    firstName: "John",
    lastName: "Konor",
    access: false,
}

const admin = {
    firstName: "Bob",
    lastName: "Morley",
    access: true,
    getAccess // variant 1
}

guest.getAccess = getAccess; // variant 2

console.log(guest.getAccess());// "Sorry, you don't have access, John Konor"
console.log(admin.getAccess());// "Access granted, welcome Bob Morley"