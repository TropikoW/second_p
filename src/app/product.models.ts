export interface Products {
  id : number;
  name : string;
  price : number;
  image : string;
  category? : string;
};

// I used this interface in the function btnAdd
export interface Product {
  name : string;
  price : number;
};
