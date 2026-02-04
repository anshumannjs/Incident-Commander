import React from "react";
import { ChannelImpactProps } from "./schema";

// export interface Channel {
//   /** Channel identifier */
//   id: string;
//   /** Channel name (e.g., "Paid Search", "Email", "Direct") */
//   name: string;
//   /** Impact severity on this channel */
//   impactLevel: 'severe' | 'moderate' | 'minor' | 'none';
//   /** Change in metric (e.g., "-45%", "$3K loss") */
//   change: string;
// }

// export interface ChannelImpactProps {
//   /** List of channels with their impact levels */
//   channels: Channel[];
//   /** Optional header text */
//   header?: string;
// }

export const ChannelImpact: React.FC<ChannelImpactProps> = ({
  channels,
  header = "Channel Impact",
}) => {
  const impactStyles = {
    severe: "bg-red-100 border-red-400 text-red-900",
    moderate: "bg-orange-100 border-orange-400 text-orange-900",
    minor: "bg-yellow-100 border-yellow-400 text-yellow-900",
    none: "bg-gray-100 border-gray-300 text-gray-600",
  };

  const impactLabels = {
    severe: "Severe Impact",
    moderate: "Moderate Impact",
    minor: "Minor Impact",
    none: "No Impact",
  };

  // Sort by impact severity
  const sortedChannels =
    channels &&
    [...channels].sort((a, b) => {
      const order = { severe: 0, moderate: 1, minor: 2, none: 3 };
      return order[a.impactLevel] - order[b.impactLevel];
    });

  return (
    <div className="bg-white rounded-lg border border-gray-300 p-5">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">{header}</h3>

      <div className="space-y-2">
        {sortedChannels?.map((channel) => (
          <div
            key={channel.id}
            className={`rounded-lg border-2 p-4 ${impactStyles[channel.impactLevel]}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-base mb-1">
                  {channel.name}
                </div>
                <div className="text-xs opacity-70">
                  {impactLabels[channel.impactLevel]}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">{channel.change}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
