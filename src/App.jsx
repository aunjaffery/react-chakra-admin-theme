import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Layout from "./components/layout/Layout";
import _routeServices from "./services/_routeServices";

function App() {
  return (
    <Box>
      <Layout>
        <Routes>
          {_routeServices.map((x) => (
            <Route path={x.route} element={x.component} key={x.id} />
          ))}
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
