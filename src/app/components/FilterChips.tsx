'use client';

interface FilterChipsProps {
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  availableTags: string[];
}

const FilterChips = ({ selectedTags, onTagToggle, availableTags }: FilterChipsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagToggle('All')}
        className={`px-3 py-1 text-sm rounded-full border transition-colors ${
          selectedTags.length === 0 || selectedTags.includes('All')
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
        }`}
      >
        All
      </button>
      {availableTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagToggle(tag)}
          className={`px-3 py-1 text-sm rounded-full border transition-colors ${
            selectedTags.includes(tag)
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;  
