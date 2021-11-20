import React from "react";
import Messages from "./componentes/Messages";
import Layout from "./layout";
import Pages from "./pages";

function App() {
  return (
    <Layout>
      <Messages />
      <Pages />
    </Layout>
  );
}

export default App;
