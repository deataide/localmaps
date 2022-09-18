import { AppDataSource } from './../../data-source';
import { Request, Response } from 'express';
import { Store } from '../entity/store';

export async function save(req: Request, res: Response) {
  const storeRepository = AppDataSource.getRepository(Store);

  const savedStore = await storeRepository.save(req.body);

  return res.json(savedStore);
}

export async function getAll(req: Request, res: Response) {
  const storeRepository = AppDataSource.getRepository(Store);

  const allStores = await storeRepository.find();

  return res.json(allStores);
}
