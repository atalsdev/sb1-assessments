export interface Question {
  id: string;
  text: string;
  options: {
    value: number;
    label: string;
  }[];
}

export interface Assessment {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  icon: 'Brain' | 'Activity' | 'Heart' | 'Puzzle' | 'Zap' | 'Moon' | 'Users' | 'Scale' | 'Flame';
  timeToComplete: string;
  disclaimer: string;
}

export interface Result {
  score: number;
  severity: 'Low' | 'Moderate' | 'High';
  description: string;
  recommendations: string[];
}