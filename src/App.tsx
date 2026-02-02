import { TamboProvider } from "@tambo-ai/react"
import { ActionPreview, ChannelImpact, FunnelDiff, IncidentSummary, MetricDeltaCard, PossibleCauses, SuggestedActions } from "./components/ui"
import { MessageThreadFull } from "./components/tambo/message-thread-full"

function App() {

  return (
    <TamboProvider
      apiKey={process.env.TAMBO_API_KEY || ""}
      components={
        [
          {
            name: "ActionPreview",
            component: ActionPreview,
            description: "Previews an AI-generated action before execution."
          },
          {
            name: "SuggestedActions",
            component: SuggestedActions,
            description: "Displays a list of suggested actions for the user to consider."
          },
          {
            name: "ChannelImpact",
            component: ChannelImpact,
            description: "Shows the impact of actions across different channels."
          },
          {
            name: "FunnelDiff",
            component: FunnelDiff,
            description: "Compares funnel stages to highlight differences."
          },
          {
            name: "IncidentSummary",
            component: IncidentSummary,
            description: "Summarizes incidents detected in the system."
          },
          {
            name: "MetricDeltaCard",
            component: MetricDeltaCard,
            description: "Displays changes in key metrics over time."
          },
          {
            name: "PossibleCauses",
            component: PossibleCauses,
            description: "Lists possible causes for detected incidents."
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
      <MessageThreadFull />
    </TamboProvider>
  )
}

export default App
