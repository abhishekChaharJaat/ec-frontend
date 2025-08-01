import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import BaseLayout from "./Layouts/BaseLayout.jsx";
import EditUserInfoPopup from "./component/EditUserInfoPopup.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import ProtectedRoute from "./component/ProtectedRoute.jsx";
import Cart from "./pages/Cart.jsx";
import Myorders from "./pages/MyOrders.jsx";
import ErrorBoundary from "./component/ErrorBoundary.jsx";

function App() {
  return (
    <ErrorBoundary>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/my-orders" element={<Myorders />} />
          </Route>
        </Routes>
        <EditUserInfoPopup />
      </BaseLayout>
    </ErrorBoundary>
  );
}

export default App;
