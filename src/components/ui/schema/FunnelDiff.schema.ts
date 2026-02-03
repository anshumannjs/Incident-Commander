import { z } from "zod"

/** Single funnel stage */
export const FunnelStageSchema = z.object({
  id: z.string().describe("Stage identifier"),
  name: z
    .string()
    .describe('Stage name (e.g., "Landing", "Add to Cart", "Checkout")'),
  current: z
    .string()
    .describe("Current conversion rate or count"),
  previous: z
    .string()
    .describe("Previous conversion rate or count"),
  hasIssue: z
    .boolean()
    .describe("Whether this stage has a significant drop"),
})

/** Component props */
export const FunnelDiffSchema = z.object({
  stages: z
    .array(FunnelStageSchema)
    .describe("List of funnel stages in order"),
  header: z.string().optional().describe("Optional header text"),
})

/** TypeScript types (auto-inferred) */
export type FunnelStage = z.infer<typeof FunnelStageSchema>
export type FunnelDiffProps = z.infer<typeof FunnelDiffSchema>
