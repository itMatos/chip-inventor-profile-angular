import { Project } from './project.model';

export interface User {
  name: string;
  email: string;
  phone: string;
  photo: string;
  projects: Project[];
}
