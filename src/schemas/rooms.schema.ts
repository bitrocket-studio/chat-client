import { z } from 'zod';

export const SchemaRoom = z.object({
  name: z.string(),
  id: z.string(),
  created_at: z.date(),
});

export type ModelRoom = z.infer<typeof SchemaRoom>;
