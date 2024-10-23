import React from 'react';
import { SEOHead } from '../components/SEOHead';

export function AboutUs() {
  return (
    <>
      <SEOHead
        title="About Us | MindCheck"
        description="Learn more about MindCheck's mission to support mental health awareness and provide accessible self-assessment tools."
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              About MindCheck
            </h1>
            <p className="text-gray-600 mb-4">
              At MindCheck, we believe that understanding your mental health is
              the first step toward better well-being. Our mission is to provide
              easy-to-use, confidential self-assessment quizzes designed to help
              you gain insights into your mental health and encourage proactive
              care.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're seeking to better understand your current mental
              state or looking for guidance on your next steps, MindCheck is
              here to support you. Our tools are created in consultation with
              mental health professionals to ensure they’re both informative and
              respectful of your privacy.
            </p>
            <p className="text-gray-600">
              Remember, these assessments are not a replacement for professional
              diagnosis. Instead, they’re a first step toward seeking the care
              you deserve.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
