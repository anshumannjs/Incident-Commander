import { z } from "zod"

/** Single cause */
export const CauseSchema = z.object({
  id: z.string().describe("Unique identifier"),

  description: z
    .string()
    .describe("Human-readable description of the cause"),

  confidence: z
    .number()
    .min(0)
    .max(100)
    .describe("Confidence level from 0 to 100"),

  evidence: z
    .string()
    .optional()
    .describe("Optional supporting evidence"),
})

/** Component props */
export const PossibleCausesSchema = z.object({
  causes: z
    .array(CauseSchema)
    .min(1)
    .describe("List of potential causes"),

  header: z
    .string()
    .optional()
    .describe("Optional header text"),
})

/** TypeScript types (auto-inferred) */
export type Cause = z.infer<typeof CauseSchema>
export type PossibleCausesProps = z.infer<typeof PossibleCausesSchema>
