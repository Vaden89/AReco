import { useState } from "react";
import { Button } from "../Button";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { SchoolService } from "../../services/school.service";

export const AddStudent = ({ className }) => {
  return (
    <>
      <Button
        onClick={() => {
          document.getElementById("add-student-modal")?.showModal();
        }}
        className={`rounded-lg bg-primary px-4 font-semibold text-white ${className}`}
      >
        Add Student <Plus size={16} />
      </Button>
      <AddStudentModal />
    </>
  );
};

const AddStudentModal = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const data = await SchoolService.addStudent(formData);
      document.getElementById("add-student-modal")?.close();
      console.log(data);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog id="add-student-modal" className="modal">
      <div className="modal-box">
        <h3 className="text-xl font-semibold">Add Student</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-5">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="studentId">Student ID</label>
            <input
              type="text"
              {...register("studentId", { required: true })}
              placeholder="e.g, 123AD0921CG"
            />
            {errors.studentId && (
              <span className="text-sm bg-red-500 px-1">
                {errors?.studentId?.message}
              </span>
            )}
          </div>
          <Button
            loading={loading}
            className="w-full bg-primary text-white mt-5 rounded-lg"
          >
            Confirm
          </Button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
