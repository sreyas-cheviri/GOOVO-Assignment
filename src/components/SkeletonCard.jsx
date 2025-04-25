export default function SkeletonCard() {
  return (
    <div className="bg-[#E7E7E7] rounded-xl overflow-hidden animate-pulse w-full">
      <div className="h-40 sm:h-44 md:h-48 lg:h-52 bg-gray-300"></div>
      <div className="p-4 sm:p-6 md:p-8 w-full">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="h-3 sm:h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 sm:h-4 bg-gray-300 rounded w-12"></div>
        </div>
        <div className="h-2.5 sm:h-3 bg-gray-300 rounded w-full mb-4 sm:mb-6"></div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300"></div>
            <div className="h-2.5 sm:h-3 bg-gray-300 rounded w-2/3"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300"></div>
            <div className="h-2.5 sm:h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300"></div>
            <div className="h-2.5 sm:h-3 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
