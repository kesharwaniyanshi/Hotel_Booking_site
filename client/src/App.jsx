import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Error } from './pages/Error';
import { Logout } from './pages/Logout';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer/Footer';
import { Hotels } from './pages/Hotels';
import { AdminLayout } from './components/layouts/Admin-layout';
import { AdminUsers } from './pages/AdminUsers';
import { AdminContacts } from './pages/AdminContacts';
import { AdminHotel } from './pages/AdminHotel';
import { AdminUpdate } from './pages/Admin-Update';
const App = () => {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
        <Route path='/api/admin' element={<AdminLayout />}>
          <Route path='users' element={<AdminUsers />} />
          <Route path='contacts' element={<AdminContacts />} />
          <Route path='hotel' element={<AdminHotel />} />
          <Route path='users/:id/edit' element={<AdminUpdate />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>)
};
export default App;