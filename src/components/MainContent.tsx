import type { MainContentProps} from "../types/interfaces"



const MainContent: React.FC<MainContentProps> = ({ analysis }) => {
  if (!analysis) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center text-gray-500 p-12">
          <div className="text-6xl mb-6 opacity-30">⚡</div>
          <div className="text-xl font-semibold text-gray-900 mb-2">No Analysis Selected</div>
          <div className="text-sm">Enter a URL and run an analysis to get started</div>
        </div>
      </div>
    );
  }
}
  export default MainContent