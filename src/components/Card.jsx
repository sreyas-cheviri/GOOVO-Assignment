import first from '../assets/1.jpg';
import second from '../assets/2.jpg';
import third from '../assets/3.jpg';

const cardImages = [first, second, third];

export default function Card({ productList, currentPage }) {
  const pageSize = 10;
  const start = currentPage * pageSize;
  const end = start + pageSize;

  const getImageForIndex = (index) => {
    return cardImages[index % 3];
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-6 md:m-16 sm:m-7">
      {productList.slice(start, end).map((event, index) => (
        <div
          key={event.id}
          className="bg-[#E7E7E7] rounded-xl transition-shadow duration-300 overflow-hidden min-h-[320px]  relative flex flex-col"
        >
          <div className="relative h-52 overflow-hidden p-4 pb-0 rounded-lg">
            <img
              src={getImageForIndex(index)}
              alt={`Event ${event.eventName}`}
              className="w-full h-full object-cover transition-transform rounded-xl "
            />
           
          </div>

          <div className="p-6 flex-1 pt-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-md font-semibold text-gray-900 line-clamp-2">
                {event.eventName}
              </h2>
              <span className="font-semibold">FREE</span>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-500 font-mono text-sm">
                Please add your content here. Keep it short and simple. And smile :) 
              </p>

              <div className="text-gray-500 font-mono text-sm space-y-3">
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF0808]"></span>
                  Location : {event.location}
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-black"></span>
                  Date : {(() => {
                    const d = new Date(event.date);
                    const day = String(d.getDate()).padStart(2, '0');
                    const month = String(d.getMonth() + 1).padStart(2, '0');
                    const year = d.getFullYear();
                    return `${year}-${month}-${day}`;
                  })()}
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#66FF00]"></span>
                  Organizer : {event.organizer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
