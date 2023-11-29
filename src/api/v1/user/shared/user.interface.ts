import { z } from 'zod';
import { UserSchema } from './user.schema';

export type IUser = z.infer<typeof UserSchema>;
