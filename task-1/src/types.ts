export type CategoryId = 'public-speaking' | 'education' | 'university-partners';

export type IconName = 'Presentation' | 'GraduationCap' | 'Smile';

export interface Category {
  id: CategoryId;
  name: string;
  iconName: IconName;
}

export interface Activity {
  id: string;
  title: string;
  categoryId: CategoryId;
  date: string;
  points: number;
}

export interface Employee {
  id: string;
  name: string;
  title: string;
  departmentCode: string;
  avatarUrl: string;
  activities: Activity[];
}

export type YearFilter = number | 'all';
export type QuarterFilter = 1 | 2 | 3 | 4 | 'all';
export type CategoryFilter = CategoryId | 'all';

export interface Filters {
  year: YearFilter;
  quarter: QuarterFilter;
  categoryId: CategoryFilter;
  searchTerm: string;
}

export interface CategoryCounts {
  'public-speaking': number;
  education: number;
  'university-partners': number;
}

export interface RankedEmployee {
  employee: Employee;
  filteredActivities: Activity[];
  totalPoints: number;
  categoryCounts: CategoryCounts;
  rank: number;
}
