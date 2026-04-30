import { useMemo, useState } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { LeaderboardCard } from './components/LeaderboardCard';
import { Podium } from './components/Podium';
import { LeaderboardList } from './components/LeaderboardList';
import { EMPLOYEES } from './data/employees';
import { rankEmployees } from './utils/filtering';
import type { Filters } from './types';

const INITIAL_FILTERS: Filters = {
  year: 'all',
  quarter: 'all',
  categoryId: 'all',
  searchTerm: '',
};

function App() {
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);

  const ranked = useMemo(() => rankEmployees(EMPLOYEES, filters), [filters]);
  const top = useMemo(() => ranked.slice(0, 3), [ranked]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="mx-auto max-w-6xl px-4 md:px-6 py-6 md:py-8">
        <LeaderboardCard>
          <div className="mb-6">
            <FilterBar filters={filters} onChange={setFilters} />
          </div>

          <div className="mb-8">
            <Podium top={top} />
          </div>

          <LeaderboardList entries={ranked} />
        </LeaderboardCard>
      </main>
    </div>
  );
}

export default App;
