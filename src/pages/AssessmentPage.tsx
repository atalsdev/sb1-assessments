import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { assessments } from '../data/assessments';
import { QuizProgress } from '../components/QuizProgress';
import { SEOHead } from '../components/SEOHead';

export function AssessmentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const assessment = assessments.find(a => a.id === id);

  if (!assessment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Assessment Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const question = assessment.questions[currentQuestion];
  const isLastQuestion = currentQuestion === assessment.questions.length - 1;

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (isLastQuestion) {
      // Calculate result and navigate to results page
      navigate(`/assessment/${id}/results`, { state: { answers: newAnswers } });
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  return (
    <>
      <SEOHead 
        title={`${assessment.title} | MindCheck`}
        description={assessment.description}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-8">
              <div className="p-2 bg-blue-50 rounded-lg mr-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{assessment.title}</h1>
                <p className="text-gray-600 mt-1">{assessment.description}</p>
              </div>
            </div>

            <QuizProgress 
              current={currentQuestion + 1} 
              total={assessment.questions.length} 
            />

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {question.text}
              </h2>

              <div className="space-y-4">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left px-6 py-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic">
                {assessment.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}