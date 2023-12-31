
import React, { useEffect, useContext } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import { CartContext } from "../../context/CartContext";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CardItem } from "../CardItem/CardItem";
import { collection, query, getDocs } from 'firebase/firestore'; // Add Firestore imports
import { db } from 'path-to-your-firebase-config'; // Replace with your actual path

export const Products = () => {
  const { totalProducts } = useContext(CartContext);
  const { getProductsDB, products, changes } = useContext(FirebaseContext);

  useEffect(() => {
    getProductsDB();
  }, [changes]);

  const fetchDataFromFirestore = async () => {
    const myCollection = collection(db, "rainakids");
    const myQuery = query(myCollection);

    try {
      const querySnapshot = await getDocs(myQuery);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
      <Box component="nav" display="flex" justifyContent="space-around">
        <Button variant="contained" color="inherit" onClick={() => getProductsDB()}>
          Home
        </Button>

        <Button variant="contained" color="inherit" onClick={() => fetchDataFromFirestore()}>
          Juguetes
        </Button>
        <Box display="flex">
          <ShoppingCartSharpIcon color="action" />
          <Typography style={{ fontSize: 20 }}> {totalProducts} </Typography>
        </Box>
      </Box>
      <Typography style={{ fontSize: 20, marginBottom: 3 }}>
        Productos
      </Typography>
      <Box component="div" display="flex" flexWrap="wrap">
        {products.map((product) => (
          <CardItem key={product.id} {...product} />
        ))}
      </Box>
    </>
  );
};
