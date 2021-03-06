import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://Admin:ZrC5TgeTUHksXuZQ@cluster0.bdyqr.mongodb.net/blog?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  await client.connect();
  req.dbClient = client;
  req.db = client.db('blog');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;