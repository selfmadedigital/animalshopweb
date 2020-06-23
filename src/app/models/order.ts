import {Product} from './product';

export class Order {
  id: string;
  product: Product;
  quantity: number;
  datetime: string;
}
