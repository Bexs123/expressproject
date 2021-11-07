// Our fake database
let users = [
    { id: 1, name: "larry", orders: [{ id: 8, item: "cheese" }, { id: 24, item: "clothes" }] },
    { id: 2, name: "curly", orders: [{ id: 26, item: "snacks" }] },
    { id: 3, name: "moe", orders: [{ id: 12, item: "coffee" }, { id: 53, item: "tea" }, { id: 32, item: "sugar" }] },
    { id: 4, name: "Neil", orders: [{ id: 97, item: "t-shirt" }, { id: 28, item: "hat" }, { id: 43, item: "shorts" }] },
    { id: 5, name: "Ben", orders: [{ id: 3, item: "coke" }] }
];

const addUser = (user) => users.push(user);
const editUser = (user, id) => {
    users = users.filter(user => user.id != id);
    users.push(user);
};

const getUsers = () => users;
const getUser = (id) => users.find(user => user.id == id);
const deleteUser = (id) => users = users.filter(user => user.id != id);

module.exports = {
    addUser,
    editUser,
    getUser,
    getUsers,
    deleteUser
};