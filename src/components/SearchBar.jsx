export default function SearchBar({ search, setSearch }) {
  return (
    <input
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      placeholder="Search tasks..."
      className="w-full p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
    />
  );
}

