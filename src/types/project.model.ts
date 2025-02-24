export type ProjectTag = 'Digital' | 'Analog' | 'Mixed';

export type ProjectFilters = 'All' | ProjectTag;

export interface Project {
  title: string;
  description: string;
  tags: ProjectTag[];
}
