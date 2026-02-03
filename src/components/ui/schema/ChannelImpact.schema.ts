import { z } from "zod"

/** Single channel schema */
export const ChannelSchema = z.object({
  id: z.string().describe("Channel identifier"),
  name: z.string().describe('Channel name (e.g., "Paid Search", "Email")'),
  impactLevel: z
    .enum(["severe", "moderate", "minor", "none"])
    .describe("Impact severity on this channel"),
  change: z
    .string()
    .describe('Change in metric (e.g., "-45%", "$3K loss")'),
})

/** Component props schema */
export const ChannelImpactSchema = z.object({
  channels: z
    .array(ChannelSchema)
    .describe("List of channels with their impact levels"),
  header: z.string().optional().describe("Optional header text"),
})

/** TypeScript types (auto-inferred) */
export type Channel = z.infer<typeof ChannelSchema>
export type ChannelImpactProps = z.infer<typeof ChannelImpactSchema>
