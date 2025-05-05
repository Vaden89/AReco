import * as yup from "yup";
import { Button } from "../Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImageUpload } from "./ImageUpload";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserService } from "../../services/user.service";

export const EditSchoolDetails = ({ className }) => {
  return (
    <>
      <Button
        onClick={() => {
          document.getElementById("editSchoolModal")?.showModal();
        }}
        className={`text-white bg-primary py-3 sm:py-1.5 mt-4 sm:mt-0 font-semibold rounded-xl ${className}`}
      >
        Edit Details
      </Button>

      <EditStudentDetailsModal />
    </>
  );
};

const schoolDetailsSchema = yup.object({
  address: yup.string().required("Address is required"),
  phone: yup.string().required("Phone number is required"),
  state: yup.string().required("State is required"),
});

const EditStudentDetailsModal = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schoolDetailsSchema),
  });

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const data = await UserService.editSchoolDetails(formData);
      document.getElementById("editSchoolModal")?.close();
      console.log(data);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog id="editSchoolModal" className="modal">
      <div className="modal-box">
        <h3 className="text-xl font-semibold">Edit school information</h3>
        <ImageUpload setLoading={setLoading} />
        <form
          className="mt-5 flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="address">School address</label>
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
            <label htmlFor="state">State of origin</label>
            <input {...register("state")} placeholder="e.g, Lagos" />
            {errors.state && (
              <span className="text-red-500 text-sm px-1">
                {errors.state.message}
              </span>
            )}
          </div>
          <Button
            type="submit"
            loading={loading}
            className="bg-primary text-white rounded-xl mt-4"
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
