import express from 'express';
import bodyParser from 'body-parser';
import { AdminRoute, VendorRoute } from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', AdminRoute);
app.use('/vendors', VendorRoute);

app.listen(8000, () => {
  console.log('App is running on port 8000...');
});
