import type { Activity } from '../types';
import { CATEGORY_BY_ID } from '../data/categories';

interface RecentActivityProps {
  activities: Activity[];
}

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${d}-${MONTHS[parseInt(m, 10) - 1]}-${y}`;
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const sorted = [...activities].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="mt-4 border-t border-slate-100 pt-4">
      <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
        Recent Activity
      </div>

      <div>
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-6 px-2 pb-2 text-xs font-semibold tracking-wider text-slate-400 uppercase border-b border-slate-100">
          <div>Activity</div>
          <div>Category</div>
          <div>Date</div>
          <div className="text-right">Points</div>
        </div>

        {sorted.map((a) => (
          <div
            key={a.id}
            className="grid grid-cols-[1fr_auto_auto_auto] gap-x-6 items-center px-2 py-3 border-b border-slate-100 last:border-b-0"
          >
            <div className="font-bold text-slate-900 text-sm">{a.title}</div>
            <div>
              <span className="rounded-full bg-slate-200 text-slate-700 px-3 py-1 text-sm">
                {CATEGORY_BY_ID[a.categoryId].name}
              </span>
            </div>
            <div className="text-sm text-slate-500 whitespace-nowrap">
              {formatDate(a.date)}
            </div>
            <div className="text-sm font-bold text-sky-500 text-right whitespace-nowrap">
              +{a.points}
            </div>
          </div>
        ))}

        {sorted.length === 0 && (
          <div className="px-2 py-6 text-sm text-slate-400">
            No activities match the current filters.
          </div>
        )}
      </div>
    </div>
  );
}
