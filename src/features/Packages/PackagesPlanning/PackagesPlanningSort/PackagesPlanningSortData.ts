export type SortPossibility = 'no' | 'gps' | 'name'

export const PackagesPlanningSortData = [
  {
    id: 1,
    title: 'sort.without' as const,
    sort: 'no' as SortPossibility,
  },
  {
    id: 2,
    title: 'sort.gps' as const,
    sort: 'gps' as SortPossibility,
  },
  {
    id: 3,
    title: 'sort.name' as const,
    sort: 'name' as SortPossibility,
  },
]
