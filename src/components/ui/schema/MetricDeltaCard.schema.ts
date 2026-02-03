import { z } from "zod"

export const MetricDirectionSchema = z
  .enum(["up", "down", "neutral"])
  .describe("Direction of change")

export const MetricDeltaCardSchema = z.object({
  metricName: z
    .string()
    .describe('Name of the metric (e.g., "Revenue", "Conversion Rate")'),

  before: z
    .string()
    .describe("Previous value"),

  after: z
    .string()
    .describe("Current value"),

  delta: z
    .string()
    .describe('Change amount (e.g., "-23%", "-$12K")'),

  direction: MetricDirectionSchema,

  isNegative: z
    .boolean()
    .describe("Whether this change is bad (true) or good (false)"),

  comparisonPeriod: z
    .string()
    .optional()
    .describe('Time period for comparison (e.g., "vs. last week")'),
})

/** TypeScript props (auto-inferred) */
export type MetricDeltaCardProps = z.infer<typeof MetricDeltaCardSchema>
