import { Outlet } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import ScrollToTop from "./utils/ScrollToTop";
import MovieProvider from "./components/MovieProvider";
// statt Layout importieren = Header und Footer importieren

function App() {
  return (
    <>
      {/* Header */}
      <Layout>
        <MovieProvider>
          <ScrollToTop />
          {/* aktives Kind: Outlet */}
          <Outlet />
        </MovieProvider>
      </Layout>
      {/* Footer */}
    </>
  );
}

export default App;
