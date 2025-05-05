"use client";
import { useRef, useState } from "react";
import { MiscService } from "../../services/misc.service";
import { UserRoundPlus, X } from "lucide-react";

export const ImageUpload = ({ setLoading }) => {
  const imageInputRef = useRef(null);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.match("image.*")) {
      setError("Please only input Images");
      setImagePreview(null);
      return;
    }

    if (file.size > 1.5 * 1024 * 1024) {
      setError("Image size exceeds 1.5MB limit");
      setImagePreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    handleFileUpload(file);
    setError("");
  };

  const handleClick = () => {
    imageInputRef.current.click();
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setImagePreview(null);
    setError("");
    imageInputRef.current.value = "";
  };

  const handleFileUpload = async (file) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await MiscService.uploadFile(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="w-1/4 aspect-square rounded-xl bg-gray-300 text-gray-500 mt-5 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 transition relative overflow-hidden"
      >
        {imagePreview ? (
          <>
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-full object-cover absolute inset-0"
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1 rounded-full z-10"
            >
              <X size={20} className="text-gray-700" />
            </button>
          </>
        ) : (
          <>
            <UserRoundPlus />
            <span className="text-sm mt-2">Max 1.5MB</span>
            <input
              ref={imageInputRef}
              onChange={handleFileChange}
              type="file"
              className="hidden"
              accept="images/*"
            />
          </>
        )}
      </div>
      {error && (
        <span className="text-sm text-center text-red-500">{error}</span>
      )}
    </>
  );
};
