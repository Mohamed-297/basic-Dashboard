import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import Home from "./Pages/home/Home";
import "./app.css" 
import UserList from "./Pages/userList/UserList";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser";
import ProductsList from "./Pages/products/ProductsList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";
function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/user/:userId" element={<User/>}/>
          <Route path="/newUser" element={<NewUser/>}/>
          <Route path="/products" element={<ProductsList/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/newProduct" element={<NewProduct/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
