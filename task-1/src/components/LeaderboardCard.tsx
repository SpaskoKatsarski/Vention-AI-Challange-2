import type { ReactNode } from 'react';

interface LeaderboardCardProps {
  children: ReactNode;
}

export function LeaderboardCard({ children }: LeaderboardCardProps) {
  return (
    <div className="rounded-2xl bg-white shadow-md p-5 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Leaderboard
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Top performers based on contributions and activity
        </p>
      </div>
      {children}
    </div>
  );
}
