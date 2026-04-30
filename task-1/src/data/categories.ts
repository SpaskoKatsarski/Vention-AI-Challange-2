import type { Category, CategoryId } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'public-speaking', name: 'Public Speaking', iconName: 'Presentation' },
  { id: 'education', name: 'Education', iconName: 'GraduationCap' },
  { id: 'university-partners', name: 'University Partners', iconName: 'Smile' },
];

export const CATEGORY_DISPLAY_ORDER: CategoryId[] = [
  'public-speaking',
  'education',
  'university-partners',
];

export const CATEGORY_BY_ID: Record<CategoryId, Category> = CATEGORIES.reduce(
  (acc, c) => {
    acc[c.id] = c;
    return acc;
  },
  {} as Record<CategoryId, Category>,
);
