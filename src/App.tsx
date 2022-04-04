import Layout from "./components/navigation/Appbar";
import MyRoutes from "./navigation/routes";
import ioclient from "socket.io-client";

export const ioc = ioclient("http://localhost:8080", {});

const App = () => {
  return (
    <Layout>
      <MyRoutes />
    </Layout>
  );
};

export default App;
