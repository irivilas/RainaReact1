const products = [
    { id: "1", name: "Castillo Nº1", price: 2500, category: "juguetes", description: "Castillo para niños de 3 años en adelante", stock: 5 },
    { id: "2", name: "Castillo nº2", price: 2700, category: "juguetes", description: "Castillo mas grande para niños de 4 años en adelante", stock: 3 },
    { id: "3", name: "casita de muñecas", price: 1500, category: "juguetes", description: "Casita de muñecas encastrable", stock: 5 },
    { id: "4", name: "Granja", price: 3000, category: "juguetes", description: "Granja para animales, para niños de 3 años en adelante", stock: 10 },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos aqui!");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };