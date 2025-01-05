/* eslint-disable linebreak-style */
import Author from '../views/pages/author';
import Omdb from '../views/pages/omdb';
import Detail from '../views/pages/detail';
import Detail2 from '../views/pages/detail2';
import Jikan from '../views/pages/jikan';

const routes = {
  '/': Author, // default page
  '/author': Author,
  '/omdb': Omdb,
  '/detail/:id': Detail,
  '/detail2/:id': Detail2,
  '/jikan': Jikan,
};

export default routes;
