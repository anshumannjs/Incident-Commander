import React from 'react';
import { IncidentSummaryProps } from './schema';

// export interface IncidentSummaryProps {
//   /** Brief, human-readable title of what happened */
//   title: string;
//   /** Current status of the incident */
//   status: 'active' | 'investigating' | 'resolved' | 'monitoring';
//   /** When the incident was first detected */
//   detectedAt: string;
//   /** Primary metric affected (e.g., "Revenue", "Conversions", "Traffic") */
//   affectedMetric: string;
//   /** Magnitude of impact (e.g., "-23%", "$12K loss") */
//   impactMagnitude: string;
//   /** Severity level */
//   severity: 'critical' | 'high' | 'medium' | 'low';
//   /** Optional one-sentence summary */
//   summary?: string;
// }

export const IncidentSummary: React.FC<IncidentSummaryProps> = ({
  title,
  status,
  detectedAt,
  affectedMetric,
  impactMagnitude,
  severity,
  summary,
}) => {
  const severityColors = {
    critical: 'bg-red-100 text-red-900 border-red-300',
    high: 'bg-orange-100 text-orange-900 border-orange-300',
    medium: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    low: 'bg-blue-100 text-blue-900 border-blue-300',
  };

  const statusLabels = {
    active: 'Active',
    investigating: 'Investigating',
    resolved: 'Resolved',
    monitoring: 'Monitoring',
  };

  return (
    <div className={`rounded-lg border-2 p-6 ${severityColors[severity]}`}>
      <div className="flex items-start justify-between mb-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/50">
          {statusLabels[status]}
        </span>
      </div>

      {summary && (
        <p className="text-base mb-4 opacity-90">{summary}</p>
      )}

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <div className="text-xs uppercase tracking-wide opacity-70 mb-1">
            Detected
          </div>
          <div className="font-semibold">{detectedAt}</div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wide opacity-70 mb-1">
            Affected Metric
          </div>
          <div className="font-semibold">{affectedMetric}</div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wide opacity-70 mb-1">
            Impact
          </div>
          <div className="font-bold text-lg">{impactMagnitude}</div>
        </div>
      </div>
    </div>
  );
};