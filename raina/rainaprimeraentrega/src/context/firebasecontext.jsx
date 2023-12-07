import { useState } from "react";
import { createContext } from "react";
import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [changes, setChanges] = useState(true);

  const getProductsDB = (category) => {
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));

    getDocs(myProducts).then((resp) => {
      const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);
    }).catch(error => {
      console.error("Error fetching products: ", error);
    });
  };

  const getProductById = (id) => {
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((resp) => {
      if (resp.exists()) {
        const prod = {
          id: resp.id,
          ...resp.data(),
        };
        setProduct(prod);
      }
    }).catch(error => {
      console.error("Error fetching product by ID: ", error);
    });
  };

  const addProductDB = (product) => {
    addDoc(collection(db, "products"), product)
      .then(() => setChanges(!changes))
      .catch(error => {
        console.error("Error adding product: ", error);
      });
  };

  const addOrderDB = (order) => {
    addDoc(collection(db, "orders"), order)
      .then(() => setChanges(!changes))
      .catch(error => {
        console.error("Error adding order: ", error);
      });
  }

  const objetValue = {
    products,
    product,
    changes,
    getProductsDB,
    getProductById,
    addProductDB,
    addOrderDB
  };

  return <FirebaseContext.Provider value={objetValue}> {children} </FirebaseContext.Provider>;
};
