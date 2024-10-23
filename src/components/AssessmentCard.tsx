import React from 'react';
import { Clock, ArrowRight, Brain, Activity, Heart, Puzzle, Zap, Moon, Users, Scale, Flame } from 'lucide-react';
import { Assessment } from '../types';
import { Link } from 'react-router-dom';

const iconMap = {
  Brain,
  Activity,
  Heart,
  Puzzle,
  Zap,
  Moon,
  Users,
  Scale,
  Flame
};

interface Props {
  assessment: Assessment;
}

export function AssessmentCard({ assessment }: Props) {
  const IconComponent = iconMap[assessment.icon as keyof typeof iconMap];
  
  return (
    <Link 
      to={`/assessment/${assessment.id}`}
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {assessment.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {assessment.description}
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span>{assessment.timeToComplete}</span>
          </div>
        </div>
        <div className="ml-4">
          <div className="p-2 bg-blue-50 rounded-lg">
            {IconComponent && <IconComponent className="w-6 h-6 text-blue-600" />}
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
        Start Assessment
        <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </Link>
  );
}