import { JSX } from "react";

const Card = (props: { children: JSX.Element }) => {
  const { children } = props;
  return (
    <div className="w-full h-full p-6 bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
};

export default Card;
