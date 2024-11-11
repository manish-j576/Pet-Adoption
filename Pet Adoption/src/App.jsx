import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Table } from "../components/Table";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      Breed: "Breed",
      Email: "Email",
      PetName: "PetName",
      PetType: "PetType",
      Phone: "Phone",
      YourName: "YourName",
    },
  ]);
  return (
    <>
      <div
        style={{
          margin: 0,
          background: "#d3ad2d",
          width: "100%",
          height: "150vh",
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBkb2d8ZW58MHx8MHx8fDA%3D")',
          backgroundSize: "cover",
        }}
      >
        <BrowserRouter>
          <Link to="/home"></Link>
          <br></br>
          <Link to="/table"></Link>
          <Routes>
            <Route
              path="/"
              element={<Home data={data} setData={setData}></Home>}
            ></Route>
            <Route
              path="/table"
              element={<Table data={data} setData={setData}></Table>}
            ></Route>
          </Routes>
        </BrowserRouter>
        {console.log("inside app . jsx  data = ")}
        {console.log(data)}
      </div>
    </>
  );
}

export default App;
