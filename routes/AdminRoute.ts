import express, { Request, Response, NextFunction } from 'express';
import { CreateVendor, GetVendorById, GetVendors } from '../controllers';

const router = express.Router();

router.post('/vendors', CreateVendor);
router.get('/vendors', GetVendors);
router.get('/vendors/:id', GetVendorById);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(11111);
  res.json({ message: 'Hi from AdminRoute!!' });
});

export { router as AdminRoute };
