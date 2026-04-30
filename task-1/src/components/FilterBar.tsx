import { Search } from 'lucide-react';
import type {
  CategoryFilter,
  Filters,
  QuarterFilter,
  YearFilter,
} from '../types';

interface FilterBarProps {
  filters: Filters;
  onChange: (next: Filters) => void;
}

const YEARS: YearFilter[] = ['all', 2025, 2024, 2023];
const QUARTERS: QuarterFilter[] = ['all', 1, 2, 3, 4];
const CATEGORIES: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'education', label: 'Education' },
  { value: 'public-speaking', label: 'Public Speaking' },
  { value: 'university-partners', label: 'University Partners' },
];

const selectClass =
  'rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300';

export function FilterBar({ filters, onChange }: FilterBarProps) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <select
          className={selectClass}
          value={String(filters.year)}
          onChange={(e) => {
            const v = e.target.value;
            onChange({ ...filters, year: v === 'all' ? 'all' : Number(v) });
          }}
        >
          {YEARS.map((y) => (
            <option key={String(y)} value={String(y)}>
              {y === 'all' ? 'All Years' : y}
            </option>
          ))}
        </select>

        <select
          className={selectClass}
          value={String(filters.quarter)}
          onChange={(e) => {
            const v = e.target.value;
            onChange({
              ...filters,
              quarter: v === 'all' ? 'all' : (Number(v) as QuarterFilter),
            });
          }}
        >
          {QUARTERS.map((q) => (
            <option key={String(q)} value={String(q)}>
              {q === 'all' ? 'All Quarters' : `Q${q}`}
            </option>
          ))}
        </select>

        <select
          className={selectClass}
          value={filters.categoryId}
          onChange={(e) =>
            onChange({ ...filters, categoryId: e.target.value as CategoryFilter })
          }
        >
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>

        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden
          />
          <input
            type="text"
            value={filters.searchTerm}
            onChange={(e) => onChange({ ...filters, searchTerm: e.target.value })}
            placeholder="Search employee..."
            className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 py-2 text-sm text-slate-700 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
        </div>
      </div>
    </div>
  );
}
