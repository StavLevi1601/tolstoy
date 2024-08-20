import { z } from "zod";

export const metadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.array(z.string()),
  url: z.string(),
  error: z.string().optional(),
});
