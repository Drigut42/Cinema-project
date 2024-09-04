import { Outlet } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import MovieProvider from "./components/MovieProvider";
import ChangePath from "./utils/ChangePath";
// statt Layout importieren = Header und Footer importieren

function App() {
  return (
    <>
      {/* Header */}
      <Layout>
        <MovieProvider>
          <ChangePath />
          {/* aktives Kind: Outlet */}
          <Outlet />
        </MovieProvider>
      </Layout>
      {/* Footer */}
    </>
  );
}

export default App;
