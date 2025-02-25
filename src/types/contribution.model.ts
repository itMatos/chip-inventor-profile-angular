import { Project } from './project.model';
import { User } from './user.model';

export interface Contribution {
  user: User;
  action: 'starred' | 'forked' | 'created';
  timestamp: string;
  project: Project;
}
