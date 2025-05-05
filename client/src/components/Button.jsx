import { Spinner } from "../assets/spinner";

export const Button = ({ loading, children, onClick, className, type }) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`${className} flex items-center justify-center gap-2 py-1.5 px-2 ${
        loading && "opacity-60"
      }`}
      onClick={onClick}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};
