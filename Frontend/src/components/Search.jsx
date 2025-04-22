const Searching = () => {
  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-search-icon lucide-search"
        className="text-gray-400"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        type="text"
        placeholder="Search a post..."
        className="bg-transparent ring-0 outline-none"
      />
    </div>
  );
};

export default Searching;
