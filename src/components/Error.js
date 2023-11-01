import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Ooops! Something went wrong! 🐈</h1>
      <h2>Status : {err.status}</h2>
      <h2>{err.data}</h2>
    </div>
  );
};

export default Error;
