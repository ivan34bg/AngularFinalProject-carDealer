import { User } from "../models/user.module";

let user = new User('test', 'test', 'test', 'test');

let users: User[] = [];
users.push(user);

export{users};