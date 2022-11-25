import express from 'express';
import validate from '../middleware/validate';

import {
  addmovie,
  deletemovie,
  getmovie,
  getmoviename,
  getmovierating,
  updatemovie,
} from '../controller/movie.controller';
import {
  addmovieSchema,
  deletemovieSchema,
  getmovieSchemagenre,
  getmovieSchemaname,
  getmovieSchemarating,
//  getOneContactSchema,
  updatemovieSchema,
} from '../zod_schema/movie.schema';
import { movie } from '@prisma/client';


const router = express.Router();



router.get('/', getmovie);

router.post('/', validate(addmovieSchema), addmovie);

router.put('/:id',validate(updatemovieSchema), updatemovie);

router.delete('/:id', validate(deletemovieSchema),deletemovie);

router.get('./:name', validate(getmovieSchemaname),getmoviename )

router.get('./:genre', validate(getmovieSchemagenre),getmoviename)

router.get('./:rating', validate(getmovieSchemarating),getmovierating)
export default router;