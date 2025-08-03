import { useRouteError, useNavigate } from "react-router";
import Lottie from "lottie-react";
import { FaBackward } from "react-icons/fa";
import errorAnimation from "../../assets/lottie/404 Error - Doodle animation.json";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* 404 Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-warning  animate-bounce">
        404
      </h1>
      {/* illustration or animation */}
      <div className="mb-8 max-w-48">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Oops! This page doesn't exist.
      </h2>
      <p className="text-sm md:text-base text-gray-500 mb-6">
        {error?.statusText ||
          error?.message ||
          "The page you're looking for might have been moved or deleted."}
      </p>

      {/* Go back button */}
      <button
        onClick={() => navigate("/")}
        className="btn btn-accent text-black px-6 py-2 text-lg rounded-xl shadow-md hover:scale-105 transition-transform"
      >
        <FaBackward /> Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
