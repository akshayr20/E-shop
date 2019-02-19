export interface User {
  email: string;
  password: string;
}

export interface Order {
  product: String;
  quantity: number;
}

export interface Product {
  name: FormData;
  price: FormData;
  productImage: FormData;
}
