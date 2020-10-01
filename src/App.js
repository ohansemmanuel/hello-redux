import React, { useState } from "react";
import HelloWorld from "./HelloWorld";

const App = () => {
  const [tech] = useState("React");
  return <HelloWorld tech={tech} />;
};

export default App;
