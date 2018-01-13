import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';

import config from './config';
import routes from './routes/routes';
import errors from './errors/errors';

// Connects to Mongodb
import './connection';

const app = express();

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

// Routes
routes(app);

// Error handling
errors(app);

app.listen(config.port, () => {
  console.log(`Server has started on port ${config.port}`);
});