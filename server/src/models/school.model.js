import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid Email"],
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      select: false,
    },
    phone: String,
    establishedYear: { type: Number, required: true },
    level: { type: String, enum: ["primary", "secondary", "tertiary"] },
    students: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Student",
      default: [],
    },
    address: {
      city: String,
      state: String,
      country: { type: String, default: "Nigeria" },
    },
    logoUrl: String,
    isVerified: Boolean,
    otp: Number,
    otpExpiry: Date,
  },
  { timestamps: true }
);

export const School = mongoose.model("School", schoolSchema);
