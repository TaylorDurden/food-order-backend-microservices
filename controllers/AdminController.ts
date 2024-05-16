import { Request, Response, NextFunction } from 'express';
import { CreateVandorInput } from '../dto';

export const CreateVendor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    address,
    pincode,
    foodType,
    email,
    password,
    ownerName,
    phone,
  } = <CreateVandorInput>req.body;
  console.log('1111');
  return res.json({
    name,
    address,
    pincode,
    foodType,
    email,
    password,
    ownerName,
    phone,
  });
};
export const GetVendors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
export const GetVendorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
