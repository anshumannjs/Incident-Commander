import { TamboProvider } from "@tambo-ai/react"
import { ActionPreview, ChannelImpact, FunnelDiff, IncidentSummary, MetricDeltaCard, PossibleCauses, SuggestedActions, SuggestedActionsProps } from "./components/ui"
import { MessageThreadFull } from "./components/tambo/message-thread-full"
import { ActionPreviewSchema, ChannelImpactSchema, FunnelDiffSchema, IncidentSummarySchema, MetricDeltaCardSchema, PossibleCausesSchema, SuggestedActionsSchema } from "./components/ui/schema"

function App() {

  return (
    <TamboProvider
      apiKey={import.meta.env.VITE_TAMBO_API_KEY}
      components={
        [
          {
            name: "ActionPreview",
            component: ActionPreview,
            description: "Previews an AI-generated action before execution.",
            propsSchema: ActionPreviewSchema
          },
          {
            name: "SuggestedActions",
            component: SuggestedActions,
            description: "Displays a list of suggested actions for the user to consider.",
            propsSchema: SuggestedActionsSchema
          },
          {
            name: "ChannelImpact",
            component: ChannelImpact,
            description: "Shows the impact of actions across different channels.",
            propsSchema: ChannelImpactSchema
          },
          {
            name: "FunnelDiff",
            component: FunnelDiff,
            description: "Compares funnel stages to highlight differences.",
            propsSchema: FunnelDiffSchema
          },
          {
            name: "IncidentSummary",
            component: IncidentSummary,
            description: "Summarizes incidents detected in the system.",
            propsSchema: IncidentSummarySchema
          },
          {
            name: "MetricDeltaCard",
            component: MetricDeltaCard,
            description: "Displays changes in key metrics over time.",
            propsSchema: MetricDeltaCardSchema
          },
          {
            name: "PossibleCauses",
            component: PossibleCauses,
            description: "Lists possible causes for detected incidents.",
            propsSchema: PossibleCausesSchema
          }
        ]
      }
      tools={
        [
          /* your tools */
        ]
      }
    >
      {/* <YourApp /> */}
      <div className="h-screen">
      <MessageThreadFull />
      </div>
    </TamboProvider>
  )
}

export default App
