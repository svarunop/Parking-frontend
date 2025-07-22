import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Admin from './Admin-Components/Admin';
import AddCustomer from './Admin-Components/AddCustomer';
import ViewCustomer from './Admin-Components/ViewCustomer';
import ViewBookings from './Admin-Components/ViewBookings';
import ViewSlots from './Admin-Components/ViewSlots';
import ViewPayments from './Admin-Components/ViewPayments';
import Customer from './Customer-Component/Customer';
import BookSlot from './Customer-Component/BookSlot';
import UpdateProfile from './Customer-Component/UpdateProfile';
import Payment from './Customer-Component/Payment';
import AddSlot from './Admin-Components/AddSlot';
import ViewAllBookings from './Customer-Component/ViewAllBookings';
import EditCustomer from './Admin-Components/EditCustomer';

function App() {
  return (
    <div className="App">
      <Router>
     <Routes>
      

      <Route path="/" element={<Home />}></Route>
       <Route path="/about" element={<About />}></Route>
       <Route exact path="/signin" element={<Signin />}></Route>
       <Route exact path="/signup" element={<Signup />}></Route>
  
       
       
 
 
 
       <Route exact path="/admin" element={<Admin/>}></Route>
       <Route exact path="/admin/addcustomer" element={<AddCustomer/>}></Route>
       <Route exact path="/admin/viewcustomer" element={<ViewCustomer/>}></Route>
       <Route exact path="/admin/viewbookings" element={<ViewBookings/>}></Route>
       <Route exact path="/admin/viewslots" element={<ViewSlots/>}></Route>
       <Route exact path="/admin/viewpayments" element={<ViewPayments/>}></Route>
       <Route exact path="/admin/addslot" element={<AddSlot/>}></Route>
       <Route exact path="/admin/editcustomer/:id" element={<EditCustomer/>}></Route>


       <Route exact path="/customer" element={<Customer/>}></Route>
       <Route exact path="/customer/bookslot" element={<BookSlot/>}></Route>
       <Route exact path="/customer/updateprofile" element={<UpdateProfile/>}></Route>
       <Route exact path="/customer/payment" element={<Payment/>}></Route>
       <Route exact path="/customer/viewallbookings" element={<ViewAllBookings/>}></Route>
       <Route exact path="/customer/updateprofile" element={<UpdateProfile/>}></Route>

       {/* 
       
       <Route exact path="/admin/editcustomer/:id" element={<EditCustomer/>}></Route>
       <Route exact path="/admin/viewparking" element={<AdminViewParking/>}></Route>
       <Route exact path="/admin/editparking" element={<AdminEditParking/>}></Route>
       <Route exact path="/admin/viewpayment" element={<AdminViewPayment/>}></Route>


       
       <Route exact path="/customer/editprofile/" element={<CustomerEdit/>}></Route>
       <Route exact path="/customer/viewbooking/" element={<CustomerViewBooking/>}></Route>
       <Route exact path="/customer/viewpayment/" element={<CustomerPayment/>}></Route>
       <Route exact path="/customer/bookslot/" element={<BookSlot/>}></Route>
       <Route exact path="/customer/payment/" element={<Payment/>}></Route>
 */}  
      </Routes>
      {/* <Footer/> */}
      </Router>
     </div>

  );
}

export default App;
