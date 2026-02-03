import { z } from "zod"

export const IncidentStatusSchema = z
  .enum(["active", "investigating", "resolved", "monitoring"])
  .describe("Current status of the incident")

export const IncidentSeveritySchema = z
  .enum(["critical", "high", "medium", "low"])
  .describe("Severity level")

export const IncidentSummarySchema = z.object({
  title: z
    .string()
    .describe("Brief, human-readable title of what happened"),

  status: IncidentStatusSchema,

  detectedAt: z
    .string()
    .describe("When the incident was first detected"),

  affectedMetric: z
    .string()
    .describe('Primary metric affected (e.g., "Revenue", "Conversions")'),

  impactMagnitude: z
    .string()
    .describe('Magnitude of impact (e.g., "-23%", "$12K loss")'),

  severity: IncidentSeveritySchema,

  summary: z
    .string()
    .optional()
    .describe("Optional one-sentence summary"),
})

/** TypeScript props (auto-inferred) */
export type IncidentSummaryProps = z.infer<typeof IncidentSummarySchema>
