import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};

    for (const productId in itemsMap) {
      if (productId) {
        const item = itemsMap[productId];
        this.items.push(new ShoppingCartItem({ ...item, _id: productId }));
      }
    }
  }

  getQuantity(product: Product) {
    const item = this.itemsMap[product._id];
    return item ? item.quantity : 0;
  }

  get totalPrice() {
    let sum = 0;
    for (const productId in this.items) sum += this.items[productId].totalPrice;
    return sum;
  }

  get totalItemsCount() {
    let count = 0;
    for (const productId in this.itemsMap)
      count += this.itemsMap[productId].quantity;
    return count;
  }
}
