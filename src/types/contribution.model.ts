import { Project } from './project.model';
import { User } from './user.model';

export interface ActionsContribution {
  action: 'favoritou' | 'fez fork' | 'criou';
}

export interface Contribution {
  user: User;
  action: ActionsContribution;
  timestamp: string;
  project: Project;
}
