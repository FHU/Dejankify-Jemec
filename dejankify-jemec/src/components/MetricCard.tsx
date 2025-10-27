import Metric from "../types/Metric";
import Card from "./Card";
import MetricDisplay from "./MetricDisplay";

interface MetricCardProps {
  metric: Metric;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  return (
    <Card>
      <MetricDisplay metric={metric} />
    </Card>
  );
};

export default MetricCard;