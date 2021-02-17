//Patch => partial updates, PUT => change everything
import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';
const router = express.Router();

//all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

//':' suspects anything after the path
router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);
export default router;