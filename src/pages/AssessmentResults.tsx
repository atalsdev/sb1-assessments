import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, AlertTriangle, XCircle, ArrowLeft } from 'lucide-react';
import { assessments } from '../data/assessments';
import { SEOHead } from '../components/SEOHead';

export function AssessmentResults() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || [];

  const assessment = assessments.find(a => a.id === id);

  if (!assessment || !answers.length) {
    navigate(`/assessment/${id}`);
    return null;
  }

  const totalScore = answers.reduce((sum, value) => sum + value, 0);
  const maxPossibleScore = assessment.questions.length * 3;
  const scorePercentage = (totalScore / maxPossibleScore) * 100;

  let severity: 'Low' | 'Moderate' | 'High';
  let Icon;
  let colorClass;

  if (scorePercentage < 33) {
    severity = 'Low';
    Icon = CheckCircle;
    colorClass = 'text-green-500';
  } else if (scorePercentage < 66) {
    severity = 'Moderate';
    Icon = AlertTriangle;
    colorClass = 'text-yellow-500';
  } else {
    severity = 'High';
    Icon = XCircle;
    colorClass = 'text-red-500';
  }

  return (
    <>
      <SEOHead 
        title={`${assessment.title} Results | MindCheck`}
        description="View your mental health assessment results and get personalized recommendations."
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
                <Icon className={`w-8 h-8 ${colorClass}`} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Results</h1>
              <p className="text-gray-600">
                Based on your responses to the {assessment.title}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Severity Level</span>
                <span className={`font-semibold ${colorClass}`}>{severity}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className={`h-full rounded-full ${
                    severity === 'Low' ? 'bg-green-500' : 
                    severity === 'Moderate' ? 'bg-yellow-500' : 
                    'bg-red-500'
                  }`}
                  style={{ width: `${scorePercentage}%` }}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">What This Means</h2>
                <p className="text-gray-600">
                  {severity === 'Low' ? 
                    "Your responses suggest minimal symptoms. However, if you're concerned, consider discussing this with a healthcare provider." :
                    severity === 'Moderate' ?
                    "Your responses indicate moderate symptoms. It's recommended to consult with a mental health professional for a thorough evaluation." :
                    "Your responses suggest significant symptoms. We strongly recommend seeking professional help for a proper evaluation and support."
                  }
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Next Steps</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Consider sharing these results with a healthcare provider</li>
                  <li>Keep track of your symptoms and their frequency</li>
                  <li>Explore self-care strategies and stress management techniques</li>
                  {severity !== 'Low' && (
                    <li>Schedule an appointment with a mental health professional</li>
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Take Another Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}