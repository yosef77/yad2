export class Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  city: string;
  sellerPhone: string;
  publishDate: string; 

  constructor(
    id: number,
    name: string,
    description: string,
    imageUrl: string,
    price: number,
    city: string,
    sellerPhone: string,
    publishDate: string 
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
    this.city = city;
    this.sellerPhone = sellerPhone;
    this.publishDate = publishDate;
  }
}
