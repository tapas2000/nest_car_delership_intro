import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

const currentDate = new Date();

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    id: uuid(),
    name: 'Honda',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    id: uuid(),
    name: 'Ford',
    createdAt: currentDate,
    updatedAt: currentDate,
  },
];
