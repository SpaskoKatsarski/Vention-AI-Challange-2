import { Star } from 'lucide-react';
import type { RankedEmployee } from '../types';

interface PodiumProps {
  top: RankedEmployee[];
}

interface SlotConfig {
  rank: 1 | 2 | 3;
  badgeClass: string;
  ringClass: string;
  blockHeight: string;
  blockBg: string;
  digitColor: string;
  scorePill: 'gold' | 'blue';
  avatarTopOffset: string;
}

const SLOTS: Record<1 | 2 | 3, SlotConfig> = {
  1: {
    rank: 1,
    badgeClass: 'bg-yellow-500',
    ringClass: 'border-4 border-yellow-400',
    blockHeight: 'h-40',
    blockBg: 'bg-gradient-to-b from-yellow-300 to-yellow-200',
    digitColor: 'text-yellow-100/80',
    scorePill: 'gold',
    avatarTopOffset: '-mt-6',
  },
  2: {
    rank: 2,
    badgeClass: 'bg-slate-400',
    ringClass: 'border-4 border-white',
    blockHeight: 'h-28',
    blockBg: 'bg-slate-200',
    digitColor: 'text-slate-300',
    scorePill: 'blue',
    avatarTopOffset: 'mt-4',
  },
  3: {
    rank: 3,
    badgeClass: 'bg-orange-800',
    ringClass: 'border-4 border-white',
    blockHeight: 'h-20',
    blockBg: 'bg-slate-200',
    digitColor: 'text-slate-300',
    scorePill: 'blue',
    avatarTopOffset: 'mt-8',
  },
};

function PodiumSlot({ entry, rank }: { entry: RankedEmployee; rank: 1 | 2 | 3 }) {
  const cfg = SLOTS[rank];
  const avatarSize = rank === 1 ? 'w-24 h-24' : 'w-20 h-20';

  return (
    <div className="flex flex-col items-center">
      <div className={`flex flex-col items-center ${cfg.avatarTopOffset}`}>
        <div className="relative">
          <img
            src={entry.employee.avatarUrl}
            alt={entry.employee.name}
            className={`${avatarSize} rounded-full bg-white object-cover ${cfg.ringClass}`}
          />
          <div
            className={`${cfg.badgeClass} absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-white ring-2 ring-white`}
          >
            {rank}
          </div>
        </div>

        <div className="mt-3 text-center">
          <div className="text-base font-bold text-slate-900">
            {entry.employee.name}
          </div>
          <div className="text-sm text-slate-500">
            {entry.employee.title} ({entry.employee.departmentCode})
          </div>
        </div>

        {cfg.scorePill === 'gold' ? (
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm font-bold text-slate-800">
              {entry.totalPoints}
            </span>
          </div>
        ) : (
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1">
            <Star className="h-4 w-4 fill-sky-500 text-sky-500" />
            <span className="text-sm font-bold text-sky-500">
              {entry.totalPoints}
            </span>
          </div>
        )}
      </div>

      <div
        className={`relative mt-4 w-full ${cfg.blockHeight} ${cfg.blockBg} rounded-t-xl flex items-start justify-center pt-3`}
      >
        <span className={`text-5xl font-extrabold ${cfg.digitColor}`}>
          {rank}
        </span>
      </div>
    </div>
  );
}

export function Podium({ top }: PodiumProps) {
  if (top.length === 0) return null;

  const first = top[0];
  const second = top[1];
  const third = top[2];

  return (
    <div className="grid grid-cols-3 gap-3 md:gap-6 items-end">
      <div>{second && <PodiumSlot entry={second} rank={2} />}</div>
      <div>{first && <PodiumSlot entry={first} rank={1} />}</div>
      <div>{third && <PodiumSlot entry={third} rank={3} />}</div>
    </div>
  );
}
