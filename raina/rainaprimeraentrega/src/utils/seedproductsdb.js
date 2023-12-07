import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";




const products = [
    {  name: "Castillo Nº1", price: 2500, category: "juguetes", description: "Castillo para niños de 3 años en adelante", stock: 5 },
    { name: "Castillo nº2", price: 2700, category: "juguetes", description: "Castillo mas grande para niños de 4 años en adelante", stock: 3 },
    { name: "casita de muñecas", price: 1500, category: "juguetes", description: "Casita de muñecas encastrable", stock: 5 },
    {  name: "Granja", price: 3000, category: "juguetes", description: "Granja para animales, para niños de 3 años en adelante", stock: 10 },
  ];
  

export const seedProductsDb = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};