import type { Activity, CategoryId, Employee } from '../types';

const TALK_TITLES = [
  'Lightning Talk #3: My favorite VS Code extension',
  'Brown Bag: How I learned to love TypeScript',
  'Tech Demo #7: Building dashboards with WebGL',
  'Lightning Talk #5: My favorite debugging tool',
  'Conference Recap: ReactConf 2024 highlights',
  'Internal Talk: Why we picked Vite over Webpack',
  'Lightning Talk #11: Regex tricks I wish I knew sooner',
  'Brown Bag: Demystifying browser rendering',
  'Tech Demo #2: Real-time collaboration with CRDTs',
  'Lightning Talk #8: Five Git aliases that changed my life',
  'Internal Talk: The case for monorepos',
  'Brown Bag: Postgres index types in 30 minutes',
  'Tech Demo #4: A visual diff for JSON payloads',
  'Lightning Talk #14: From callbacks to async/await',
  'Conference Recap: KubeCon 2025 highlights',
  'Internal Talk: Designing for accessibility from day one',
  'Brown Bag: Memory leaks I have known and loved',
  'Lightning Talk #19: SVG animation in 5 minutes',
  'Tech Demo #9: Edge functions vs serverless',
  'Internal Talk: Reading Postgres EXPLAIN like a pro',
];

const LEARN_TITLES = [
  'Workshop: Intro to Functional Programming',
  'Course Completion: Advanced React Patterns',
  'Certification: AWS Solutions Architect',
  'Workshop: Designing resilient distributed systems',
  'Course Completion: Rust for TypeScript developers',
  'Certification: Kubernetes Application Developer',
  'Workshop: System design interview drills',
  'Course Completion: Performance budgets in practice',
  'Workshop: Writing testable React components',
  'Certification: Google Cloud Professional Developer',
  'Course Completion: SQL window functions deep dive',
  'Workshop: Effective code review habits',
  'Course Completion: GraphQL schema design',
  'Certification: HashiCorp Terraform Associate',
  'Workshop: Approachable observability with OpenTelemetry',
  'Course Completion: Designing typography systems',
  'Workshop: Domain-driven design starter kit',
  'Course Completion: Modern CSS layout',
  'Certification: Certified Scrum Product Owner',
  'Workshop: Refactoring legacy JavaScript safely',
];

const PARTNER_TITLES = [
  'Guest Lecture at Riverside University',
  'Mentoring Session: Capstone Project Reviews',
  'Career Fair Booth - Spring 2025',
  'Guest Lecture at Lakeshore Polytechnic',
  'Hackathon Judge: CityCode Student Championship',
  'Mentoring Session: Resume reviews for graduating seniors',
  'Career Fair Booth - Autumn 2024',
  'Guest Lecture at Hilltop Institute of Technology',
  'Workshop with Eastview College students',
  'Mentoring Session: Mock technical interviews',
  'Career Fair Booth - Spring 2024',
  'Guest Lecture at Greenwood University',
  'Hackathon Judge: Northbridge Open',
  'Mentoring Session: Open-source onboarding for students',
  'Career Fair Booth - Autumn 2025',
  'Guest Lecture at Westcliff Community College',
  'Workshop with Stonebridge University data club',
  'Mentoring Session: Portfolio review night',
  'Hackathon Judge: SpringBoard Student Cup',
  'Career Fair Booth - Spring 2023',
];

const TITLES = [
  'Software Engineer',
  'Senior Software Engineer',
  'Lead QA Engineer',
  'QA Engineer',
  'Group Manager',
  'Team Manager',
  'Senior Designer',
  'Designer',
  'Project Manager',
  'Business Analyst',
  'DevOps Engineer',
];

const REGIONS = ['ZX', 'QV', 'XJ', 'WP', 'JV', 'KQ', 'NP', 'BX'];
const DEPT_LABELS = ['IPSD.Services', 'CORE.Ops', 'PLAT.Build', 'EXP.Lab'];

interface EmployeeSeed {
  name: string;
  titleIdx: number;
  count: number;
  pointsBoost: number;
  deptStyle: 'short' | 'medium' | 'long' | 'label';
  regionIdx: number;
}

const SEEDS: EmployeeSeed[] = [
  { name: 'Alex Rivera',      titleIdx: 1,  count: 25, pointsBoost: 3, deptStyle: 'long',   regionIdx: 0 },
  { name: 'Priya Sharma',     titleIdx: 4,  count: 24, pointsBoost: 3, deptStyle: 'long',   regionIdx: 1 },
  { name: 'Marcus Wagner',    titleIdx: 1,  count: 23, pointsBoost: 2, deptStyle: 'medium', regionIdx: 2 },
  { name: 'Jordan Chen',      titleIdx: 2,  count: 18, pointsBoost: 2, deptStyle: 'medium', regionIdx: 3 },
  { name: 'Sofia Bianchi',    titleIdx: 6,  count: 17, pointsBoost: 1, deptStyle: 'long',   regionIdx: 4 },
  { name: 'Dmitri Volkov',    titleIdx: 10, count: 16, pointsBoost: 1, deptStyle: 'medium', regionIdx: 5 },
  { name: 'Hana Tanaka',      titleIdx: 0,  count: 15, pointsBoost: 1, deptStyle: 'long',   regionIdx: 6 },
  { name: "Liam O'Connor",    titleIdx: 1,  count: 14, pointsBoost: 1, deptStyle: 'medium', regionIdx: 7 },
  { name: 'Amara Okafor',     titleIdx: 5,  count: 14, pointsBoost: 0, deptStyle: 'long',   regionIdx: 0 },
  { name: 'Mateo Silva',      titleIdx: 0,  count: 13, pointsBoost: 1, deptStyle: 'short',  regionIdx: 1 },
  { name: 'Zara Nasser',      titleIdx: 8,  count: 13, pointsBoost: 0, deptStyle: 'medium', regionIdx: 2 },
  { name: 'Kai Lindqvist',    titleIdx: 1,  count: 12, pointsBoost: 0, deptStyle: 'long',   regionIdx: 3 },
  { name: 'Rohan Iyer',       titleIdx: 9,  count: 12, pointsBoost: 0, deptStyle: 'medium', regionIdx: 4 },
  { name: 'Anya Petrova',     titleIdx: 7,  count: 12, pointsBoost: 0, deptStyle: 'label',  regionIdx: 5 },
  { name: 'Tomas Novak',      titleIdx: 0,  count: 11, pointsBoost: 0, deptStyle: 'medium', regionIdx: 6 },
  { name: 'Yuki Watanabe',    titleIdx: 3,  count: 11, pointsBoost: 0, deptStyle: 'long',   regionIdx: 7 },
  { name: 'Camila Reyes',     titleIdx: 6,  count: 11, pointsBoost: 0, deptStyle: 'short',  regionIdx: 0 },
  { name: 'Nadia Hassan',     titleIdx: 1,  count: 10, pointsBoost: 0, deptStyle: 'medium', regionIdx: 1 },
  { name: 'Felix Brandt',     titleIdx: 0,  count: 10, pointsBoost: 0, deptStyle: 'long',   regionIdx: 2 },
  { name: 'Leyla Demir',      titleIdx: 9,  count: 10, pointsBoost: 0, deptStyle: 'medium', regionIdx: 3 },
  { name: 'Idris Bah',        titleIdx: 1,  count: 10, pointsBoost: 0, deptStyle: 'label',  regionIdx: 4 },
  { name: 'Inka Salonen',     titleIdx: 7,  count: 9,  pointsBoost: 0, deptStyle: 'medium', regionIdx: 5 },
  { name: 'Diego Marin',      titleIdx: 10, count: 9,  pointsBoost: 0, deptStyle: 'long',   regionIdx: 6 },
  { name: 'Mei Lin',          titleIdx: 0,  count: 9,  pointsBoost: 0, deptStyle: 'short',  regionIdx: 7 },
  { name: 'Ravi Subramanian', titleIdx: 2,  count: 9,  pointsBoost: 0, deptStyle: 'medium', regionIdx: 0 },
  { name: 'Olabisi Adewale',  titleIdx: 8,  count: 9,  pointsBoost: 0, deptStyle: 'long',   regionIdx: 1 },
  { name: 'Petra Kovac',      titleIdx: 1,  count: 8,  pointsBoost: 0, deptStyle: 'medium', regionIdx: 2 },
  { name: 'Hugo Bernard',     titleIdx: 0,  count: 8,  pointsBoost: 0, deptStyle: 'long',   regionIdx: 3 },
  { name: 'Saanvi Kapoor',    titleIdx: 6,  count: 8,  pointsBoost: 0, deptStyle: 'medium', regionIdx: 4 },
  { name: 'Stefan Bauer',     titleIdx: 10, count: 8,  pointsBoost: 0, deptStyle: 'short',  regionIdx: 5 },
  { name: 'Nina Vasquez',     titleIdx: 4,  count: 7,  pointsBoost: 0, deptStyle: 'long',   regionIdx: 6 },
  { name: 'Kenji Mori',       titleIdx: 0,  count: 7,  pointsBoost: 0, deptStyle: 'medium', regionIdx: 7 },
  { name: 'Aurelia Costa',    titleIdx: 7,  count: 7,  pointsBoost: 0, deptStyle: 'label',  regionIdx: 0 },
  { name: 'Bilal Hadi',       titleIdx: 1,  count: 7,  pointsBoost: 0, deptStyle: 'medium', regionIdx: 1 },
  { name: 'Ines Romero',      titleIdx: 9,  count: 7,  pointsBoost: 0, deptStyle: 'long',   regionIdx: 2 },
  { name: 'Marek Wojcik',     titleIdx: 0,  count: 6,  pointsBoost: 0, deptStyle: 'medium', regionIdx: 3 },
  { name: 'Selin Kara',       titleIdx: 3,  count: 6,  pointsBoost: 0, deptStyle: 'short',  regionIdx: 4 },
  { name: 'Andre Mensah',     titleIdx: 2,  count: 6,  pointsBoost: 0, deptStyle: 'medium', regionIdx: 5 },
  { name: 'Reina Park',       titleIdx: 6,  count: 6,  pointsBoost: 0, deptStyle: 'long',   regionIdx: 6 },
  { name: 'Emil Larsen',      titleIdx: 1,  count: 6,  pointsBoost: 0, deptStyle: 'medium', regionIdx: 7 },
  { name: 'Carmen Aguirre',   titleIdx: 8,  count: 6,  pointsBoost: 0, deptStyle: 'label',  regionIdx: 0 },
  { name: 'Vihaan Joshi',     titleIdx: 0,  count: 5,  pointsBoost: 0, deptStyle: 'short',  regionIdx: 1 },
  { name: 'Tatiana Sokolova', titleIdx: 4,  count: 5,  pointsBoost: 0, deptStyle: 'long',   regionIdx: 2 },
  { name: 'Noor Karimi',      titleIdx: 7,  count: 5,  pointsBoost: 0, deptStyle: 'medium', regionIdx: 3 },
  { name: 'Gabriel Souza',    titleIdx: 10, count: 5,  pointsBoost: 0, deptStyle: 'medium', regionIdx: 4 },
  { name: 'Helga Stein',      titleIdx: 9,  count: 5,  pointsBoost: 0, deptStyle: 'short',  regionIdx: 5 },
];

const POINTS_CYCLE = [16, 8, 32, 4, 8, 16, 8, 32, 16, 4, 8, 16, 32, 8, 16, 4, 8, 32, 16, 8, 4, 32, 16, 8, 16];
const HIGH_POINTS = [32, 16, 32, 16, 32, 8, 32, 16, 32, 16, 32, 16, 8, 32, 16, 32, 16, 32, 16, 8, 32, 16, 32, 16, 32];

function makeDept(seed: EmployeeSeed, idx: number): string {
  const region = REGIONS[seed.regionIdx];
  switch (seed.deptStyle) {
    case 'short':
      return `${region}.U${(idx % 3) + 1}`;
    case 'medium':
      return `${region}.U${(idx % 3) + 1}.D${(idx % 4) + 1}.G${(idx % 2) + 1}`;
    case 'long':
      return `${region}.U${(idx % 3) + 1}.D${(idx % 4) + 1}.G${(idx % 2) + 1}.T${(idx % 5) + 1}`;
    case 'label':
      return `${DEPT_LABELS[idx % DEPT_LABELS.length]}.${region}`;
  }
}

function makeId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function genActivities(seed: EmployeeSeed, idx: number, employeeId: string): Activity[] {
  const acts: Activity[] = [];
  const pointsArr = seed.pointsBoost > 0 ? HIGH_POINTS : POINTS_CYCLE;
  for (let i = 0; i < seed.count; i++) {
    const catIdx = (i + idx) % 3;
    const categoryId: CategoryId =
      catIdx === 0 ? 'public-speaking' : catIdx === 1 ? 'education' : 'university-partners';
    const pool =
      categoryId === 'public-speaking'
        ? TALK_TITLES
        : categoryId === 'education'
        ? LEARN_TITLES
        : PARTNER_TITLES;
    const prefix =
      categoryId === 'public-speaking'
        ? '[TALK]'
        : categoryId === 'education'
        ? '[LEARN]'
        : '[PARTNER]';
    const titleIdx = (i * 7 + idx * 3) % pool.length;
    const points = pointsArr[(i + idx) % pointsArr.length];
    const year = 2023 + ((i + idx) % 3);
    const monthCycle = [2, 5, 8, 11, 3, 6, 9, 12, 1, 4, 7, 10];
    const month = monthCycle[(i + idx) % monthCycle.length];
    const day = ((i * 13 + idx * 17) % 27) + 1;
    acts.push({
      id: `${employeeId}-act-${i}`,
      title: `${prefix} ${pool[titleIdx]}`,
      categoryId,
      date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      points,
    });
  }
  return acts;
}

export const EMPLOYEES: Employee[] = SEEDS.map((seed, idx) => {
  const id = makeId(seed.name);
  return {
    id,
    name: seed.name,
    title: TITLES[seed.titleIdx],
    departmentCode: makeDept(seed, idx),
    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${id}`,
    activities: genActivities(seed, idx, id),
  };
});
