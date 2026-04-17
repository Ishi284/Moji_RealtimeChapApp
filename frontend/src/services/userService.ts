import api from "@/lib/axios";

export const userService = {
  // FormData là kiểu dữ liệu tiêu chuẩn của js khi upload file từ form
  uploadAvatar: async (formData: FormData) => {
    const res = await api.post("/users/uploadAvatar", formData, {
      headers: { "Content-Type": "multipart/form-data" }, // để backend biết là upload file
    });

    if (res.status === 400) {
      throw new Error(res.data.message);
    }

    return res.data;
  },
};
