import Table from './Table.jsx';
import Form from './Form.jsx';
import { useReducer } from "react";

function App() {

  const [square, dispatch] = useReducer(reducer, {
    color: "green",
    width: "150px",
    height: "150px",
    borderTop: "1px solid white",
    borderRight: "1px solid white",
    borderBottom: "1px solid white",
    borderLeft: "1px solid white",
});

  return (
    <>
    <Form />
    <Table />
    </>
  )
};

export default App;
