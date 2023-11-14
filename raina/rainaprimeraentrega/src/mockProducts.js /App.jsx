import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { NavBar } from "../components/NavBar/NavBar";

const productos = [
  {
    titulo: "Castillo n1",
    mensaje: "Este juguete está especialmente diseñado para niños mayores a 4 años. Se puede utilizar en todas las edades bajo supervisión de un adulto."
  },
  {
    titulo: "Castillo n2",
    mensaje: "Igual que el castillo número 1 pero con diferentes puertas y ventanas."
  },
  {
    titulo: "Casitas de Muñecas",
    mensaje: "Al igual que el castillo, se pueden utilizar en todas las edades con supervisión de un adulto. Se arma fácilmente y se puede transportar."
  }
];

export const App = () => {
  return (


<BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a RAINA"} />} />
        <Route path="/category/:category" element={<ItemListContainer greeting={"Bienvenidos a RAINA"} />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>

 
  );
};

