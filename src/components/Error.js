import { Link } from "react-router-dom";
import error_image from "../assets/images/404_food_image.jpeg";

const Error = () => {
  return (
    <div className="text-center ">
      <img
        src={error_image}
        alt="404 error"
        className="mx-auto max-h-[500px]"
      />
      <Link to="/">
        <button className="mt-5 px-4 py-1.5 bg-orange-700 text-white rounded-md">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
