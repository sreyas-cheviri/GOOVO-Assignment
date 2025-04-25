import { useState } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import SkeletonCard from "../components/SkeletonCard";
import useEvents from "../hooks/useEvents";

export default function Events() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("all"); 
  const { productList, loading, error } = useEvents();



  //filtering
  const filterEvents = (events) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let filtered = events;
    if (dateFilter !== "all") {
      filtered = events.filter((event) => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        return dateFilter === "upcoming" 
          ? eventDate >= today 
          : eventDate < today;
      });
    }
    return filtered.filter((event) =>
      event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredProducts = filterEvents(productList);

  if (loading) return (
    <div className="bg-[#E82677] p-1 pb-12 min-h-screen ">
      <div className="max-w-6xl mx-auto shadow-all-sides shadow-black/50 p-28 pt-16 sm:px-6 px-20 bg-white mt-16 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-32 md:p-20 min-w-7xl gap-6">
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-red-500">Error: {error}</div>
    </div>
  );

  return (
    <div className="bg-[#E82677] min-h-screen p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-all-sides rounded-2xl mt-10 min-h-screen  p-4 sm:p-6 md:p-8 lg:p-10">
      
        <div className="mb-6 sm:mb-8 text-center px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2 sm:mb-4">
            Events
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
          </p>
        </div>

        <div className="flex  mx-auto flex-col sm:flex-row gap-4 sm:items-center justify-between mb-6 sm:mb-8 px-2 md:px-16">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <button
              onClick={() => setDateFilter("all")}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg flex-1 sm:flex-none ${
                dateFilter === "all"
                  ? "bg-[#EE1A73] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setDateFilter("upcoming")}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg flex-1 sm:flex-none ${
                dateFilter === "upcoming"
                  ? "bg-[#EE1A73] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setDateFilter("past")}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg flex-1 sm:flex-none ${
                dateFilter === "past"
                  ? "bg-[#EE1A73] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Past Events
            </button>
          </div>
          
          <div className="w-full sm:w-auto">
            <SearchBar 
              value={searchQuery}
              onChange={(value) => {
                setSearchQuery(value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>


        {filteredProducts.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 text-base sm:text-lg">
              No events found matching.
            </p>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            <Card 
              productList={filteredProducts} 
              currentPage={currentPage - 1} 
            />
            
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              ProductList={filteredProducts}
            />
          </div>
        )}
      </div>
    </div>
  );
}