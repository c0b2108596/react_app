import React, { useState, useEffect } from 'react';
import axios from "axios";

type Fruit = {
  id: number;
  name: string;
}

function App() {
  const [fruits, setFruits] = useState<Fruit[]>([{ id: 0, name: ""}])

  useEffect(() => {
    (
      async () => {
        const data = await axios.get("http://localhost:8080")
        setFruits(data.data)
      }
    )()
  }, [])

  return (
    <div>
      {fruits.map(fruit => (
        <p key={fruit.id}>
          <span>{fruit.name}</span>
        </p>
      ))}
    </div>
  );
}

export default App;

