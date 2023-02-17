import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import AddItem from "./pages/AddItem"
import Sales from "./pages/Sales"
import Customers from "./pages/Customers"
import Expenses from "./pages/Expenses"
import Purchases from "./pages/Purchases"
import Reports from "./pages/Reports"
import Suppliers from "./pages/Suppliers"
import MainLayout from "./components/MainLayout/index";


function App() {
  return (
   <Routes>
   <Route path="/" exact element={
     <MainLayout>
     <Home/>
     </MainLayout>
     }/>
   <Route path="/addItem"  element={
     <MainLayout>
       <AddItem/>
     </MainLayout>
   }/>
   <Route path="/customers"  element={
     <MainLayout>
       <Customers/>
     </MainLayout>
   }/>
   <Route path="/expenses"  element={
     <MainLayout>
       <Expenses/>
     </MainLayout>
   }/>
   <Route path="/purchases"  element={
     <MainLayout>
       <Purchases/>
     </MainLayout>
   }/>
   <Route path="/reports"  element={
     <MainLayout>
       <Reports/>
     </MainLayout>
   }/>
   <Route path="/suppliers"  element={
     <MainLayout>
       <Suppliers/>
     </MainLayout>
   }/>
   <Route path="/sales"  element={
     <MainLayout>
       <Sales/>
     </MainLayout>
   }/>

   </Routes>
  );
}

export default App;
