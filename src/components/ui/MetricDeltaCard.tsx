import React from 'react';
import { MetricDeltaCardProps } from './schema';

// export interface MetricDeltaCardProps {
//   /** Name of the metric (e.g., "Revenue", "Conversion Rate") */
//   metricName: string;
//   /** Previous value */
//   before: string;
//   /** Current value */
//   after: string;
//   /** Change amount (e.g., "-23%", "-$12K") */
//   delta: string;
//   /** Direction of change */
//   direction: 'up' | 'down' | 'neutral';
//   /** Whether this change is bad (true) or good (false) */
//   isNegative: boolean;
//   /** Time period for comparison (e.g., "vs. last week") */
//   comparisonPeriod?: string;
// }

export const MetricDeltaCard: React.FC<MetricDeltaCardProps> = ({
  metricName,
  before,
  after,
  delta,
  direction,
  isNegative,
  comparisonPeriod,
}) => {
  const getColorClasses = () => {
    if (direction === 'neutral') {
      return 'bg-gray-50 border-gray-300 text-gray-900';
    }
    
    if (isNegative) {
      return 'bg-red-50 border-red-400 text-red-900';
    }
    
    return 'bg-green-50 border-green-400 text-green-900';
  };

  const getArrow = () => {
    if (direction === 'neutral') return '→';
    if (direction === 'up') return '↑';
    return '↓';
  };

  return (
    <div className={`rounded-lg border-2 p-5 ${getColorClasses()}`}>
      <div className="text-sm font-medium opacity-70 mb-2">
        {metricName}
      </div>

      <div className="flex items-baseline gap-3 mb-3">
        <div className="text-4xl font-bold">{after}</div>
        <div className="text-xl opacity-60 line-through">{before}</div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">
          {getArrow()} {delta}
        </span>
        {comparisonPeriod && (
          <span className="text-sm opacity-70">{comparisonPeriod}</span>
        )}
      </div>
    </div>
  );
};