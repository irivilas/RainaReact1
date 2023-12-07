import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    
    const newProduct = {
      name: "Castillo Nº1 ",
      price: 2500,
      description: "Juguetes para  niños",
      stock: 5,
    };
    
    setName("");
    setEmail("");
  };

  return (
    <Box display={"flex"} flexDirection={"column"} width={500} component="form" onSubmit={handleForm}>
      <Stack spacing={3}>
        <TextField label={"Nombre"} value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button variant="contained" color="primary" type="submit">
          Comprar
        </Button>
      </Stack>
    </Box>
  );
};
