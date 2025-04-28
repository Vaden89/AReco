import mongoose from "mongoose";
import bcrypt from "bcrypt";

const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
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
    address: String,
    state_of_origin: String,
    lga: String,
    dob: String,
    role: { type: String, default: "student", immutable: true },
    transcripts: {
      type: [String],
      default: [],
    },
    attendedSchools: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "School",
      default: [],
    },
    currentSchool: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
    },
    otp: Number,
    otpExpiry: Date,
    isVerified: Boolean,
  },
  { timestamps: true }
);

studentSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 17);
  }
  next();
});

studentSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const Student = mongoose.model("Student", studentSchema);
