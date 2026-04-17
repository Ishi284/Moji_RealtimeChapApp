import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

// nhận file từ client
export const upload = multer({
  storage: multer.memoryStorage(), // lưu file dưới dạng dữ liệu thô (buffer - có dạng mảng byte) trong ram,
  // việc gửi file từ ram lên cloudinary sẽ nhanh hơn và tối ưu hơn so với việc lưu file tạm thời trên ổ đĩa rồi mới gửi lên
  limits: {
    fileSize: 1024 * 1024 * 1, // 1MB
  },
});

// gửi file từ ram lên cloudinary
export const uploadImageFromBuffer = (buffer, options) => {
  return new Promise((resolve, reject) => {
    // upload_stream là phương thức của cloudinary để upload buffer file lên trực tiếp
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "moji_chat/avatars",
        resource_type: "image",
        transformation: [{ width: 200, height: 200, crop: "fill" }],
        ...options,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      },
    );

    uploadStream.end(buffer);
  });
};
