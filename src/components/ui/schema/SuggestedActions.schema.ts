import { z } from 'zod';

export const SuggestedActionsSchema = z.object({
  actions: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      impact: z.string().optional(),
      priority: z.enum(['high', 'medium', 'low']),
    })
  ),

  // onActionSelect: z
  //   .function()
  //   // .args(z.string())
  //   // .returns(z.void()),
  //   ,

  header: z.string().optional(),
});

export type SuggestedActionsProps = z.infer<typeof SuggestedActionsSchema>;
