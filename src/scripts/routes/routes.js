/* eslint-disable linebreak-style */
import Author from '../views/pages/author';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Author, // default page
  '/author': Author,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
