import users from './users';

export default app => {
  app.use('/users', users);
  // app.use('/xxx', 'xxx');
  // app.use('/', 'xxx'); Default route needs to be last as it can be fired by any path
};
