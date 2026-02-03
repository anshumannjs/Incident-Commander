import { z } from "zod"

export const ActionPreviewSchema = z.object({
  actionName: z.string().describe("Name of the action being previewed"),
  outcome: z.string().describe("Projected outcome description"),
  timeToImpact: z.string().describe("Estimated time to see results"),
  projectedChange: z.string().optional().describe("Projected metric change"),
  risk: z.enum(["low", "medium", "high"]).describe("Risk level"),
  notes: z.string().optional().describe("Additional context or warnings"),
})

export type ActionPreviewProps = z.infer<typeof ActionPreviewSchema>