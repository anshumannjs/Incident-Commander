import React from "react";
import { FunnelDiffProps } from "./schema";

// export interface FunnelStage {
//   /** Stage identifier */
//   id: string;
//   /** Stage name (e.g., "Landing", "Add to Cart", "Checkout") */
//   name: string;
//   /** Current conversion rate or count */
//   current: string;
//   /** Previous conversion rate or count */
//   previous: string;
//   /** Whether this stage has a significant drop */
//   hasIssue: boolean;
// }

// export interface FunnelDiffProps {
//   /** List of funnel stages in order */
//   stages: FunnelStage[];
//   /** Optional header text */
//   header?: string;
// }

export const FunnelDiff: React.FC<FunnelDiffProps> = ({
  stages,
  header = "Funnel Breakdown",
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-300 p-5">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">{header}</h3>

      <div className="space-y-3">
        {stages?.map((stage, index) => (
          <div key={stage.id}>
            <div
              className={`rounded-lg p-4 ${
                stage.hasIssue
                  ? "bg-red-50 border-2 border-red-400"
                  : "bg-gray-50 border border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">
                    {index + 1}.
                  </span>
                  <span
                    className={`font-semibold ${
                      stage.hasIssue ? "text-red-900" : "text-gray-900"
                    }`}
                  >
                    {stage.name}
                  </span>
                  {stage.hasIssue && (
                    <span className="px-2 py-0.5 bg-red-200 text-red-800 text-xs font-medium rounded">
                      Issue detected
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-baseline gap-4">
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Now</div>
                  <div
                    className={`text-2xl font-bold ${
                      stage.hasIssue ? "text-red-900" : "text-gray-900"
                    }`}
                  >
                    {stage.current}
                  </div>
                </div>
                <div className="text-gray-400 text-xl">→</div>
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Before</div>
                  <div className="text-xl text-gray-500 line-through">
                    {stage.previous}
                  </div>
                </div>
              </div>
            </div>

            {index < stages.length - 1 && (
              <div className="flex justify-center py-1">
                <div className="text-gray-400 text-2xl">↓</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
