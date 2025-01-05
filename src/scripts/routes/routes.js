/* eslint-disable linebreak-style */
import Author from '../views/pages/author';
import Omdb from '../views/pages/omdb';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Author, // default page
  '/author': Author,
  '/omdb': Omdb,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
