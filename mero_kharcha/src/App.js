import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import CustomForm from "./components/form";

// import axios from "axios";

function App() {
  // const [open, setOpen] = React.useState(false);

  // const [data, setData] = React.useState([]);
  // React.useEffect(() => {
  //   axios.get("http://fakeapi.jsonparseronline.com/users").then((res) => {
  //     console.log("data", res.data);
  //     setData(res.data);
  //   });
  // }, []);

  return (
    <>
      {/* {data.map((e) => {
        return (
          <div>
            <p>Name:{e.firstName}</p>
            <p>
              image: <img src={e.avatar} alt="hhhh" width="100" height="100" />
            </p>
          </div>
        );
      })}
      <button onClick={() => setOpen(!open)}>open</button> */}

      <Navbar />
      <CustomForm />
    </>
  );
}

export default App;
