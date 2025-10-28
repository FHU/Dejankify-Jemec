import type { ScoreNumberProps} from "../types/interfaces"


const ScoreNumberBox: React.FC<ScoreNumberProps> = ({ score }) => {
      const getScoreBgClass = (score: number): string => {
            if (score >= 80) return 'bg-green-100 text-green-800';
            if (score >= 50) return 'bg-yellow-100 text-yellow-800';
            return 'bg-red-100 text-red-800';
        };

    return (
      <div className={`text-[28px] font-extrabold px-4 py-2 rounded-lg ${getScoreBgClass(score)}`}>
          {score}
    </div>
    );
}
  export default ScoreNumberBox

