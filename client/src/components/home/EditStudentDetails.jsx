import { useState } from "react";
import * as yup from "yup";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserService } from "../../services/user.service";

export const EditStudentDetails = ({ className }) => {
  return (
    <>
      <Button
        onClick={() => {
          document.getElementById("editDetailsModal")?.showModal();
        }}
        className={`text-white bg-primary py-3 sm:py-1.5 mt-4 sm:mt-0 font-semibold rounded-xl ${className}`}
      >
        Edit Details
      </Button>

      <EditStudentDetailsModal />
    </>
  );
};

const studentDetailsSchema = yup.object({
  address: yup.string().required("Address is required"),
  phone: yup.string().required("Phone number is required"),
  state_of_origin: yup.string().required("State of origin is required"),
  lga: yup.string().required("Lga is required"),
  dob: yup.string().required("Data of birth is required"),
});

const EditStudentDetailsModal = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(studentDetailsSchema),
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const data = await UserService.editStudentDetails(formData);
      document.getElementById("editDetailsModal")?.close();
      console.log(data);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog id="editDetailsModal" className="modal">
      <div className="modal-box">
        <h3 className="text-xl font-semibold">Edit student information</h3>
        <form
          className="mt-5 flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="address">Home address</label>
            <input
              {...register("address")}
              placeholder="e.g, David adeleke street "
            />
            {errors.address && (
              <span className="text-red-500 text-sm px-1">
                {errors.address.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone">Phone No.</label>
            <input {...register("phone")} placeholder="+234 7890923432" />
            {errors.phone && (
              <span className="text-red-500 text-sm px-1">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="state_of_origin">State of origin</label>
            <input {...register("state_of_origin")} placeholder="e.g, Ogun" />
            {errors.state_of_origin && (
              <span className="text-red-500 text-sm px-1">
                {errors.state_of_origin.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lga">LGA</label>
            <input {...register("lga")} placeholder="e.g, Shagamu" />
            {errors.lga && (
              <span className="text-red-500 text-sm px-1">
                {errors.lga.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="dob">Date of birth</label>
            <input {...register("dob")} />
            {errors.dob && (
              <span className="text-red-500 text-sm px-1">
                {errors.dob.message}
              </span>
            )}
          </div>

          <Button
            type="submit"
            loading={loading}
            className="bg-primary text-white rounded-xl"
          >
            Save Details
          </Button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
