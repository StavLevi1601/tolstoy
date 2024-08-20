import { z } from "zod";

export const urlSchema = z.object({
  url1: z.string().url("Invalid URL").nonempty("URL is required"),
  url2: z.string().url("Invalid URL").nonempty("URL is required"),
  url3: z.string().url("Invalid URL").nonempty("URL is required"),
});
