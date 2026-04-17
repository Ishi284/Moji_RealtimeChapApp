import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    refreshToken: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    expireAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

// tự động xóa document sau khi hết hạn
sessionSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model("Session", sessionSchema);
