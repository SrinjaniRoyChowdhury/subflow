import { Router } from "express";

const userRouter = Router();

// GET /users -> get all users (static type)
//GEt /users/:id -> get user by id (specific -> dynamic type)

userRouter.get('/', (req, res) => res.send({ title: 'Get all users'}));

userRouter.get('/:id', (req, res) => res.send({ title: 'GET user details'}));

userRouter.post('/', (req, res) => res.send({ title: 'CREATE new user'}));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user'}));

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user'}));

export default userRouter;