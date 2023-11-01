import { useEffect, useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <input
        value={count}
        onChange={(event) => {
          setCount(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let new_count = Number(count) + 1;
          setCount(new_count);
        }}
      >
        Increase Count
      </button>
      <input
        value={count2}
        onChange={(event) => {
          setCount2(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let new_count = Number(count2) + 1;
          setCount2(new_count);
        }}
      >
        Increase Count
      </button>
      <h1>Contact Us</h1>
      <h2>You reach out to us on support@foodapp.com</h2>
    </div>
  );
};

export default Contact;
