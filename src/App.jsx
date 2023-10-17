import { useState } from "react";
import data from "./Data";
import { List } from "./List";
import "./app.css";
function App() {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };
  return (
    <>
      <main>
        <section>
          <h3>There are {people.length} birthdays today!</h3>
          <List people={people} />
          <button onClick={handleClick}>Clear All</button>
        </section>
      </main>
    </>
  );
}

export default App;
