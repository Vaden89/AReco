import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
    role: { type: String, default: "school", immutable: true },
    phone: String,
    state: String,
    address: String,
    logoUrl: String,
    establishedYear: { type: Number, required: true },
    type: { type: String, enum: ["primary", "secondary", "tertiary"] },
    students: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Student",
      default: [],
    },
    isVerified: Boolean,
    otp: Number,
    otpExpiry: Date,
  },
  { timestamps: true }
);

schoolSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 17);
  }
  next();
});

schoolSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const School = mongoose.model("School", schoolSchema);
