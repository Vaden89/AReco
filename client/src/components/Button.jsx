import { Spinner } from "../assets/spinner";

export const Button = ({ loading, children, onClick, className, type }) => {
  return (
    <button
      type={type}
      className={`${className} flex items-center justify-center gap-2 py-1.5`}
      onClick={onClick}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};
