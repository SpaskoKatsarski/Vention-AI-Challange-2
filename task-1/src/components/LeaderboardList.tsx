import type { RankedEmployee } from '../types';
import { LeaderboardRow } from './LeaderboardRow';

interface LeaderboardListProps {
  entries: RankedEmployee[];
}

export function LeaderboardList({ entries }: LeaderboardListProps) {
  if (entries.length === 0) {
    return (
      <div className="rounded-xl bg-white p-8 text-center text-slate-500 shadow-sm border border-slate-100">
        No employees match the current filters.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {entries.map((e) => (
        <LeaderboardRow key={e.employee.id} entry={e} />
      ))}
    </div>
  );
}
