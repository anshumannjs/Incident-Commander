# CommandShift UI Components

Pure, stateless React components for adaptive AI interfaces. Built for [Tambo](https://tambo.ai) dynamic rendering.

## Philosophy

These components are **not** a traditional UI library. They are **generative UI primitives** that:

- Answer one human question per component
- Are completely stateless and pure
- Receive all data via props (no fetching, no logic)
- Emit structured events via callbacks (for interactable components)
- Stand alone and make sense in isolation

## Component Catalog

### `IncidentSummary`
**Answers:** "What happened?"  
**Use when:** User needs to understand an incident at a glance  
**Props:** title, status, severity, affected metric, impact magnitude

### `MetricDeltaCard`
**Answers:** "How much did it change?"  
**Use when:** User needs to see before/after comparison  
**Props:** metric name, before/after values, delta, direction

### `PossibleCauses`
**Answers:** "Why did this happen?"  
**Use when:** User needs to understand potential root causes  
**Props:** list of causes with confidence levels

### `SuggestedActions`
**Answers:** "What should I do?"  
**Use when:** User needs actionable next steps  
**Props:** list of actions, onActionSelect callback  
**Interactive:** Yes - emits action selection events

### `ActionPreview`
**Answers:** "What will happen if I do this?"  
**Use when:** User has selected an action and needs to see projected outcome  
**Props:** action name, outcome, time to impact, risk level

### `ChannelImpact`
**Answers:** "Which channels are affected?"  
**Use when:** User needs to see distribution of impact across channels  
**Props:** list of channels with impact levels and changes

### `FunnelDiff`
**Answers:** "Where did conversion break?"  
**Use when:** User needs to identify funnel drop-off points  
**Props:** list of funnel stages with before/after rates

## Design Principles

### Clarity Over Flair
- Strong visual hierarchy
- Minimal noise
- Business-friendly language
- Emphasis on meaning, not data volume

### Stateless & Pure
```typescript
// ✅ GOOD: Pure component
const MetricCard = ({ value, change }) => (
  <div>{value} ({change})</div>
);

// ❌ BAD: Stateful component
const MetricCard = () => {
  const [data, setData] = useState(null);
  useEffect(() => { fetchData(); }, []);
  return <div>...</div>;
};
```

### Event Emission (Not State Mutation)
```typescript
// ✅ GOOD: Emits event
<SuggestedActions 
  actions={actions}
  onActionSelect={(id) => console.log('Selected:', id)}
/>

// ❌ BAD: Mutates state
<SuggestedActions 
  actions={actions}
  onActionSelect={(id) => dispatch(selectAction(id))}
/>
```

## What These Components Are NOT

❌ Dashboards  
❌ Tables of raw data  
❌ Filters or dropdowns  
❌ Navigation UI  
❌ Multi-panel layouts  
❌ Complex charts (unless minimal and essential)

## Usage with Tambo

These components are designed to be registered with Tambo, which will:
- Decide when to render each component
- Determine rendering order
- Provide appropriate props based on user intent

```typescript
// Example Tambo registration
import { IncidentSummary, SuggestedActions } from './components';

tambo.register({
  'incident.summary': IncidentSummary,
  'actions.suggest': SuggestedActions,
  // ... other components
});
```

## Styling

Components use Tailwind utility classes for styling. No external UI libraries are included by default.

If you need to customize styling:
1. Maintain the visual hierarchy
2. Keep the business-friendly tone
3. Ensure clarity over decoration

## Contributing New Components

When adding new components:

1. **Answer one question** - What human question does this answer?
2. **Keep it pure** - No state, no side effects, no logic
3. **Type your props** - Use TypeScript interfaces
4. **Make it standalone** - Should work in isolation
5. **Use minimal styling** - Tailwind utilities preferred
6. **Export cleanly** - Add to index.ts

## License

[Your license here]