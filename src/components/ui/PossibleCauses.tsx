import React from 'react';

export interface Cause {
  /** Unique identifier */
  id: string;
  /** Human-readable description of the cause */
  description: string;
  /** Confidence level (0-100) */
  confidence: number;
  /** Optional supporting evidence */
  evidence?: string;
}

export interface PossibleCausesProps {
  /** List of potential causes */
  causes: Cause[];
  /** Optional header text */
  header?: string;
}

export const PossibleCauses: React.FC<PossibleCausesProps> = ({
  causes,
  header = 'Possible Causes',
}) => {
  const getConfidenceLabel = (confidence: number) => {
    if (confidence >= 80) return 'High confidence';
    if (confidence >= 50) return 'Medium confidence';
    return 'Low confidence';
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'bg-purple-100 text-purple-800';
    if (confidence >= 50) return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-300 p-5">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">{header}</h3>

      <div className="space-y-3">
        {causes.map((cause) => (
          <div
            key={cause.id}
            className="border-l-4 border-gray-300 pl-4 py-2"
          >
            <div className="flex items-start justify-between gap-3 mb-1">
              <p className="font-medium text-gray-900 flex-1">
                {cause.description}
              </p>
              <span
                className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${getConfidenceColor(
                  cause.confidence
                )}`}
              >
                {getConfidenceLabel(cause.confidence)}
              </span>
            </div>

            {cause.evidence && (
              <p className="text-sm text-gray-600 mt-1">{cause.evidence}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};