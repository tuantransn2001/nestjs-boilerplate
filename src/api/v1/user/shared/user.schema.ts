import { z } from 'zod';

import { BaseEntitySchema } from '../../common/shared/common.schema';

export const UserSchema = z
  .object({
    phone: z.string().optional(),
    email: z.string().optional(),
    password: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    middle_name: z.string(),
    is_active: z.boolean().default(true),
    is_reported: z.boolean().default(false),
    is_blocked: z.boolean().default(false),
    last_active_at: z.date().optional(),
  })
  .merge(BaseEntitySchema);
