import { EnvVariables } from '@src/helpers/env';
import { User } from '@src/models/user.model';
import { z } from 'zod';

export const createTodoDto = {
  body: z
    .object({
      name: z.string().openapi({ example: 'john' }),
    })
    .openapi('createTodoDtoBody'),
  params: z.object({}),
  queryParams: z.object({}),
};

export type CreateTodoDto = {
  body: z.infer<typeof createTodoDto.body>;
  params: z.infer<typeof createTodoDto.params>;
  queryParams: z.infer<typeof createTodoDto.queryParams>;
  user: User;
  env: EnvVariables;
};
