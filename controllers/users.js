//UUID is an import that gurantees that no two users in the DB has the same id
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

//array of users
let users = [];

export const createUser = (req, res) => {    //contains the user object to add to database 
    const user = req.body;
    //get unique user ID
    const userID = uuidv4();
    //create new obj with user and add one value ontop of users
    const userWithID = { ... user, id: userID} // "..." is the spread operator that takes all props of user

    //push user into users array
    users.push(userWithID);

    res.send(`User with the name ${user.firstName} added to database.`)
}

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
};

export const getUser = (req, res)=> {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
};

// /user/2 => req.params { id: 2 }
export const deleteUser = (req, res)=> {
    const { id } = req.params;
    //remove the id that matchs the req.params id
    users = users.filter((user) => user.id !== id);

    res.send(`User with the ID ${id} deleted from the database.`)
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;
    
    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with id ${id} has been updated`);
};