import React from 'react';
import { SEOHead } from '../components/SEOHead';

export function Disclaimer() {
  return (
    <>
      <SEOHead
        title="Disclaimer | MindCheck"
        description="Read our disclaimer regarding the information provided by MindCheck’s self-assessment quizzes and mental health content."
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Disclaimer
            </h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  General Information
                </h2>
                <p className="text-gray-600">
                  The information provided by MindCheck through our
                  self-assessment quizzes and content is intended for general
                  informational purposes only. We do not provide medical or
                  psychological advice, diagnosis, or treatment.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  No Professional Advice
                </h2>
                <p className="text-gray-600">
                  While our tools may help you better understand your mental
                  well-being, they are not a substitute for professional advice.
                  Always seek the guidance of a qualified healthcare provider
                  with any questions you may have regarding your mental health.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  No Warranties
                </h2>
                <p className="text-gray-600">
                  We make no guarantees as to the accuracy or reliability of the
                  information provided. The use of MindCheck is at your own
                  risk, and the platform is provided "as is" without any
                  warranties, express or implied.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Limitation of Liability
                </h2>
                <p className="text-gray-600">
                  Under no circumstances will MindCheck or its partners be
                  liable for any loss or damage arising from the use of our
                  platform, including indirect or consequential losses.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Changes to This Disclaimer
                </h2>
                <p className="text-gray-600">
                  MindCheck reserves the right to modify this disclaimer at any
                  time. Any changes will be posted on this page, and your
                  continued use of our services will constitute acceptance of
                  the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Contact Us
                </h2>
                <p className="text-gray-600">
                  If you have any questions about this disclaimer, please
                  contact us at support@mindcheck.shop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
