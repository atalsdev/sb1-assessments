import React from 'react';
import { SEOHead } from '../components/SEOHead';

export function TermsOfService() {
  return (
    <>
      <SEOHead
        title="Terms of Service | MindCheck"
        description="Read the terms and conditions for using MindCheck’s self-assessment quizzes and mental health resources."
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                  By accessing and using the MindCheck website, you agree to
                  comply with and be bound by these Terms of Service. If you do
                  not agree to these terms, you should not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Use of Services
                </h2>
                <p className="text-gray-600">
                  Our self-assessment quizzes and other mental health resources
                  are provided for informational purposes only. They are not
                  intended to replace professional medical advice or treatment.
                  You agree to use the services responsibly and understand that
                  your results are not a diagnosis.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  User Conduct
                </h2>
                <p className="text-gray-600">
                  You agree to use our platform in a manner that does not
                  violate any applicable laws or regulations. Any abusive or
                  harmful use of our services may result in the termination of
                  your access.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Limitation of Liability
                </h2>
                <p className="text-gray-600">
                  MindCheck is not liable for any damages resulting from your
                  use of our services. The platform is provided “as is” without
                  warranties of any kind, whether express or implied.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Modifications
                </h2>
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time.
                  Changes will be effective immediately upon posting. Continued
                  use of our services after changes are made constitutes your
                  acceptance of the revised terms.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Contact Us
                </h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please
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
