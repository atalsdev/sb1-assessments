import React from 'react';
import { SEOHead } from '../components/SEOHead';

export function FAQ() {
  return (
    <>
      <SEOHead
        title="Frequently Asked Questions | MindCheck"
        description="Find answers to common questions about MindCheck's mental health assessments and privacy policies."
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Are these assessments diagnostic tools?
                </h2>
                <p className="text-gray-600">
                  No, these assessments are screening tools designed to help you
                  understand your mental health better. They are not diagnostic
                  tools and should not replace professional medical advice.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  How long do assessments take?
                </h2>
                <p className="text-gray-600">
                  Most assessments take between 5-10 minutes to complete. Each
                  assessment indicates the estimated time at the beginning.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Is my information kept private?
                </h2>
                <p className="text-gray-600">
                  Yes, we take your privacy seriously. All data is encrypted and
                  protected following HIPAA guidelines. We never share your
                  personal information without consent.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Can I retake assessments?
                </h2>
                <p className="text-gray-600">
                  Yes, you can retake any assessment at any time. We encourage
                  you to track your results over time to see how your mental
                  health may change.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  What should I do if my results indicate high severity?
                </h2>
                <p className="text-gray-600">
                  If your results indicate high severity, we strongly recommend
                  seeking help from a mental health professional. You can find
                  resources and recommendations within the assessment results
                  page to guide you to the appropriate support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
