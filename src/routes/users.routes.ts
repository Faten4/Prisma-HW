import express from 'express';
import { adduser, getusers } from '../controller/users.controller';
import validate from '../middleware/validate';
import { usersSchema } from '../zod_schema/users.schema';



const router = express.Router();
router.get('/', getusers);

router.post('/', validate(usersSchema) ,adduser);

export default router;