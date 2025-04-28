import { Button } from "../Button";

export const EditStudentDetails = ({ className }) => {
  return (
    <>
      <Button
        className={`text-white bg-primary py-3 sm:py-1.5 mt-4 sm:mt-0 font-semibold rounded-xl ${className}`}
      >
        Edit Details
      </Button>
    </>
  );
};
