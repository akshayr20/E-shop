export class ShoppingCartItem {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;

  constructor(init?: Partial<ShoppingCartItem>) {
    Object.assign(this, init);
  }

  get totalPrice() { return this.price * this.quantity; }
}
