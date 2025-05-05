"use client";
import { useState } from "react";
import { Button } from "../Button";
import { useFieldArray, useForm } from "react-hook-form";
import { SchoolService } from "../../services/school.service";
import { TrashIcon, PlusIcon } from "lucide-react";

export const AddTranscriptBtn = ({ id, disabled }) => {
  return (
    <>
      <Button
        onClick={() =>
          (document.getElementById("transcript-drawer").checked = true)
        }
        className={`${
          disabled && "sm:flex hidden"
        } w-full bg-primary text-white rounded-lg`}
      >
        Add Results
      </Button>
      <TranscriptDrawer id={id} />
    </>
  );
};

const TranscriptDrawer = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      courses: [
        {
          courseName: "",
          score: "",
          grade: "",
        },
      ],
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formattedData = {
        courses: data.courses.map((course) => ({
          ...course,
          score: Number(course.score),
        })),
      };

      console.log(formattedData);
      // const result = await SchoolService.addResult(id, formattedData);
      // console.log("Submission successful:", result);

      document.getElementById("transcript-drawer").checked = false;
      reset();
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="drawer drawer-end">
      <input id="transcript-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="transcript-drawer" className="drawer-overlay" />
        <div className="menu bg-base-200 text-base-content h-full w-4/5 sm:w-96 p-4">
          <h2 className="text-xl font-bold mb-4">Add Result</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col h-[90%]"
          >
            <div className="flex-grow overflow-y-auto">
              <CourseFields
                register={register}
                control={control}
                errors={errors}
              />
            </div>

            <div className="mt-4 space-y-2">
              <Button
                type="submit"
                loading={loading}
                className="w-full bg-primary text-white rounded-lg"
              >
                Submit Transcript
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const CourseFields = ({ register, control, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "courses",
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="card bg-base-100 p-4 shadow relative">
          <div className="flex items-center justify-between">
            <h3 className="font-medium mb-2">Course {index + 1}</h3>

            {index > 0 && (
              <button type="button" onClick={() => remove(index)}>
                <TrashIcon size={16} color="red" />
              </button>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex flex-col gap-1">
              <label className="label">Course Name</label>
              <input
                type="text"
                className={`${
                  errors.courses?.[index]?.courseName
                    ? "input-error"
                    : "form-input"
                }`}
                {...register(`courses.${index}.courseName`, {
                  required: "Course name is required",
                })}
                placeholder="e.g. Mathematics"
              />
              {errors.courses?.[index]?.courseName && (
                <span className="text-red-400 text-xs">
                  {errors.courses[index].courseName.message}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="label">Score</label>
                <input
                  type="number"
                  className={` ${
                    errors.courses?.[index]?.score
                      ? "input-error"
                      : "form-input"
                  }`}
                  {...register(`courses.${index}.score`, {
                    required: "Score is required",
                    min: { value: 0, message: "Minimum score is 0" },
                    max: { value: 100, message: "Maximum score is 100" },
                  })}
                  placeholder="0-100"
                />
                {errors.courses?.[index]?.score && (
                  <span className="text-red-400 text-xs">
                    {errors.courses[index].score.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="label">Grade</label>
                <input
                  type="text"
                  className={` ${
                    errors.courses?.[index]?.grade
                      ? "input-error"
                      : "form-input"
                  }`}
                  {...register(`courses.${index}.grade`, {
                    required: "Grade is required",
                    pattern: {
                      value: /^[A-F][+-]?$/,
                      message: "Invalid grade format (e.g. A, B+, C-)",
                    },
                  })}
                  placeholder="e.g. A, B+"
                />
                {errors.courses?.[index]?.grade && (
                  <span className="text-red-400 text-xs">
                    {errors.courses[index].grade.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        onClick={() => append({ courseName: "", score: "", grade: "" })}
        className=" w-full mt-4"
      >
        <PlusIcon size={16} className="mr-2" />
        Add Another Course
      </Button>
    </div>
  );
};
