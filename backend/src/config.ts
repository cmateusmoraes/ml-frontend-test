import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  allowedDomain: process.env.ALLOWED_DOMAIN || "*",
  apiBaseUrl: process.env.API_BASE_URL || "",
};
