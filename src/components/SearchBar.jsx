import { SearchIcon } from './icons';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full min-w-24 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search events..."
        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:ring-1 focus:ring-[#EE1A73]/50  transition-colors duration-200 bg-white shadow-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
}
