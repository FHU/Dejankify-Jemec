import type { SectionProps} from "../types/interfaces"
import IssueItem from "./IssueItem";
import ScoreNumberBox from "./ScoreNumberBox";

const Section: React.FC<SectionProps> = ({ title, subtitle, icon, score, issues, iconBg }) => {

  return (
    <div className="bg-white rounded-2xl p-7 mb-7 shadow-sm border border-gray-200">
      <div className="flex items-center gap-3.5 mb-6 pb-5 border-b-2 border-gray-100">
        <div className={`w-[42px] h-[42px] rounded-lg ${iconBg} flex items-center justify-center text-xl flex-shrink-0`}>
          {icon}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">{title}</h2>
          <div className="text-[13px] text-gray-600">{subtitle}</div>
        </div>

        <ScoreNumberBox score={score}/>
       
      </div>

      <div className="flex flex-col gap-4">
        {issues.map((issue, index) => (
          <IssueItem key={index} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default Section