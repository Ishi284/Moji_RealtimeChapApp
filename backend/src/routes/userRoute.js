import express from "express";
import {
  authMe,
  searchUserByUsername,
  uploadAvatar,
} from "../controllers/userController.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.get("/me", authMe);
router.get("/search", searchUserByUsername);
router.post("/uploadAvatar", upload.single("file"), uploadAvatar); // middleware này sẽ tìm trường có tên là "file" trong request body (form-data),
// đọc file đó vào ram rồi gán dữ liệu thô của file vào request.file trước khi chuyển sang hàm controller

export default router;
