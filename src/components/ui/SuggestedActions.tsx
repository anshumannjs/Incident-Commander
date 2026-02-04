import React from "react";

export interface Action {
  /** Unique identifier */
  id: string;
  /** Title of the action */
  title: string;
  /** Brief description of what this action does */
  description: string;
  /** Estimated impact (e.g., "Could recover 15%", "Low risk") */
  impact?: string;
  /** Priority level */
  priority: "high" | "medium" | "low";
}

export interface SuggestedActionsProps {
  /** List of suggested actions */
  actions: Action[];
  /** Callback when an action is selected */
  onActionSelect: (actionId: string) => void;
  /** Optional header text */
  header?: string;
}

export const SuggestedActions: React.FC<SuggestedActionsProps> = ({
  actions,
  onActionSelect,
  header = "Suggested Actions",
}) => {
  const priorityStyles = {
    high: "border-red-300 bg-red-50 hover:bg-red-100",
    medium: "border-yellow-300 bg-yellow-50 hover:bg-yellow-100",
    low: "border-blue-300 bg-blue-50 hover:bg-blue-100",
  };

  const priorityLabels = {
    high: "High Priority",
    medium: "Medium Priority",
    low: "Low Priority",
  };

  return (
    <div className="bg-white rounded-lg border border-gray-300 p-5">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">{header}</h3>

      <div className="space-y-3">
        {actions?.map((action) => (
          <button
            key={action.id}
            onClick={() => onActionSelect(action.id)}
            className={`w-full text-left border-2 rounded-lg p-4 transition-colors ${priorityStyles[action.priority]}`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h4 className="font-semibold text-gray-900">{action.title}</h4>
              <span className="px-2 py-1 rounded text-xs font-medium bg-white/60 whitespace-nowrap">
                {priorityLabels[action.priority]}
              </span>
            </div>

            <p className="text-sm text-gray-700 mb-2">{action.description}</p>

            {action.impact && (
              <div className="text-sm font-medium text-gray-900 mt-2">
                {action.impact}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
