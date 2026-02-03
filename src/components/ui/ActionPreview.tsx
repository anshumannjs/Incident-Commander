import React from 'react';
import { ActionPreviewProps } from './schema';

// export interface ActionPreviewProps {
//   /** Name of the action being previewed */
//   actionName: string;
//   /** Projected outcome description */
//   outcome: string;
//   /** Estimated time to see results (e.g., "2-4 hours", "1 day") */
//   timeToImpact: string;
//   /** Projected metric change (e.g., "+15%", "$8K recovery") */
//   projectedChange?: string;
//   /** Risk level */
//   risk: 'low' | 'medium' | 'high';
//   /** Optional additional context or warnings */
//   notes?: string;
// }

export const ActionPreview: React.FC<ActionPreviewProps> = ({
  actionName,
  outcome,
  timeToImpact,
  projectedChange,
  risk,
  notes,
}) => {
  const riskColors = {
    low: 'text-green-700 bg-green-100',
    medium: 'text-yellow-700 bg-yellow-100',
    high: 'text-red-700 bg-red-100',
  };

  const riskLabels = {
    low: 'Low Risk',
    medium: 'Medium Risk',
    high: 'High Risk',
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg border-2 border-indigo-300 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-indigo-600 font-semibold mb-1">
            Action Preview
          </div>
          <h3 className="text-xl font-bold text-gray-900">{actionName}</h3>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${riskColors[risk]}`}
        >
          {riskLabels[risk]}
        </span>
      </div>

      <div className="mb-4">
        <div className="text-sm font-medium text-gray-700 mb-1">
          Expected Outcome
        </div>
        <p className="text-base text-gray-900">{outcome}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white/60 rounded p-3">
          <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">
            Time to Impact
          </div>
          <div className="font-semibold text-gray-900">{timeToImpact}</div>
        </div>

        {projectedChange && (
          <div className="bg-white/60 rounded p-3">
            <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">
              Projected Change
            </div>
            <div className="font-bold text-lg text-green-700">
              {projectedChange}
            </div>
          </div>
        )}
      </div>

      {notes && (
        <div className="bg-white/40 rounded p-3 border border-indigo-200">
          <p className="text-sm text-gray-700">{notes}</p>
        </div>
      )}
    </div>
  );
};