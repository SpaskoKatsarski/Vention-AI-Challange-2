import { useState } from 'react';
import {
  ChevronDown,
  GraduationCap,
  Presentation,
  Smile,
  Star,
} from 'lucide-react';
import type { CategoryId, RankedEmployee } from '../types';
import { CATEGORY_DISPLAY_ORDER } from '../data/categories';
import { RecentActivity } from './RecentActivity';

interface LeaderboardRowProps {
  entry: RankedEmployee;
}

const ICON_BY_CATEGORY: Record<CategoryId, typeof Presentation> = {
  'public-speaking': Presentation,
  education: GraduationCap,
  'university-partners': Smile,
};

export function LeaderboardRow({ entry }: LeaderboardRowProps) {
  const [expanded, setExpanded] = useState(false);
  const { employee, rank, totalPoints, categoryCounts, filteredActivities } = entry;

  return (
    <div className="rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-slate-100">
      <div className="grid grid-cols-[auto_auto_1fr_auto_auto_auto] items-center gap-4 px-4 md:px-5 py-4">
        <div className="text-3xl font-semibold text-slate-300 w-8 text-center">
          {rank}
        </div>

        <img
          src={employee.avatarUrl}
          alt={employee.name}
          className="h-10 w-10 rounded-full bg-white object-cover"
        />

        <div className="min-w-0">
          <div className="font-bold text-slate-900 text-base truncate">
            {employee.name}
          </div>
          <div className="text-sm text-slate-500 truncate">
            {employee.title} ({employee.departmentCode})
          </div>
        </div>

        <div className="flex items-center gap-5">
          {CATEGORY_DISPLAY_ORDER.map((catId) => {
            const count = categoryCounts[catId];
            if (count === 0) return null;
            const Icon = ICON_BY_CATEGORY[catId];
            return (
              <div
                key={catId}
                className="flex flex-col items-center text-slate-500"
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-semibold mt-0.5">{count}</span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-end pr-2">
          <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
            Total
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="h-5 w-5 fill-sky-500 text-sky-500" />
            <span className="text-2xl font-bold text-sky-500">
              {totalPoints}
            </span>
          </span>
        </div>

        <button
          type="button"
          aria-label={expanded ? 'Collapse activity' : 'Expand activity'}
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <ChevronDown
            className={`h-5 w-5 text-slate-600 transition-transform ${
              expanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {expanded && (
        <div className="px-4 md:px-5 pb-4">
          <RecentActivity activities={filteredActivities} />
        </div>
      )}
    </div>
  );
}
