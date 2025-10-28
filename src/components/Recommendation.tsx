

export interface RecommendationProps {
  recommendation: string;
}


const Recommendation: React.FC<RecommendationProps> = ({ recommendation }) => {
    return (
              <div className="text-[13px] text-gray-900 bg-white p-3 rounded-lg border border-gray-200 leading-relaxed">
          <div className="font-bold text-indigo-600 mb-1.5 flex items-center gap-1.5">
            <span>💡</span>
            <span>Recommendation</span>
          </div>
          {recommendation}
        </div>
    );
}
  export default Recommendation


