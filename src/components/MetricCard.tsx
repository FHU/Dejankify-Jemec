import type {MetricCardProps} from "../types/interfaces";
import Card from "./Card";
import MetricDisplay from "./MetricDisplay";



const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  return (
    <Card>
      <MetricDisplay metric={metric} />
    </Card>
  );
};

export default MetricCard;