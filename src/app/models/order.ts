import {Product} from './product';

export class Order {
  id: string;
  product: Product;
  quantity: number;
  datetime: string;

  constructor(private productIn: Product, private quantityIn: number) {
    this.product = productIn;
    this.quantity = quantityIn;
  }
}
