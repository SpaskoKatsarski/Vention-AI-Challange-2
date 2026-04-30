import type {
  Activity,
  CategoryCounts,
  Employee,
  Filters,
  RankedEmployee,
} from '../types';

function quarterOf(date: string): number {
  const month = parseInt(date.slice(5, 7), 10);
  return Math.floor((month - 1) / 3) + 1;
}

function yearOf(date: string): number {
  return parseInt(date.slice(0, 4), 10);
}

function emptyCounts(): CategoryCounts {
  return {
    'public-speaking': 0,
    education: 0,
    'university-partners': 0,
  };
}

export function filterActivities(
  activities: Activity[],
  filters: Filters,
): Activity[] {
  return activities.filter((a) => {
    if (filters.year !== 'all' && yearOf(a.date) !== filters.year) return false;
    if (filters.quarter !== 'all' && quarterOf(a.date) !== filters.quarter)
      return false;
    if (filters.categoryId !== 'all' && a.categoryId !== filters.categoryId)
      return false;
    return true;
  });
}

export function computeForEmployee(
  employee: Employee,
  filters: Filters,
): { filteredActivities: Activity[]; totalPoints: number; categoryCounts: CategoryCounts } {
  const filteredActivities = filterActivities(employee.activities, filters);
  let totalPoints = 0;
  const categoryCounts = emptyCounts();
  for (const a of filteredActivities) {
    totalPoints += a.points;
    categoryCounts[a.categoryId] += 1;
  }
  return { filteredActivities, totalPoints, categoryCounts };
}

export function rankEmployees(
  employees: Employee[],
  filters: Filters,
): RankedEmployee[] {
  const search = filters.searchTerm.trim().toLowerCase();
  const matchesSearch = (e: Employee) =>
    search.length === 0 || e.name.toLowerCase().includes(search);

  const survivors: Omit<RankedEmployee, 'rank'>[] = [];
  for (const emp of employees) {
    if (!matchesSearch(emp)) continue;
    const { filteredActivities, totalPoints, categoryCounts } = computeForEmployee(
      emp,
      filters,
    );
    if (filteredActivities.length === 0) continue;
    survivors.push({ employee: emp, filteredActivities, totalPoints, categoryCounts });
  }

  survivors.sort((a, b) => {
    if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints;
    return a.employee.name.localeCompare(b.employee.name);
  });

  return survivors.map((s, i) => ({ ...s, rank: i + 1 }));
}
