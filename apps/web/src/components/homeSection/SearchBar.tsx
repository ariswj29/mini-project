'use client';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { getSearchEvents } from '@/api/event';
import { useDebounce } from 'use-debounce';

const SearchBar = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch] = useDebounce(search, 1000);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getSearchEvents(debouncedSearch);
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, [debouncedSearch]);

  return (
    <div className="container mx-auto px-12 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center w-full max-w-lg">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            value={search}
            placeholder="Search events"
            className="py-2 px-4 rounded-l-md border border-secondary w-full"
          />
          <button className="bg-secondary text-white py-2 px-4 border-2 border-secondary rounded-r-md hover:font-bold focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50">
            <span>
              <FaSearch size={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
