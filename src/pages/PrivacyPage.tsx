import React from 'react';
import { SEOHead } from '../components/SEOHead';

export function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | MindCheck"
        description="Learn how MindCheck handles your data and respects your privacy according to HIPAA guidelines."
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-6">
              At MindCheck, we value your privacy and are committed to
              protecting your personal data. This privacy policy outlines how we
              collect, use, and safeguard your information.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Information We Collect
                </h2>
                <p className="text-gray-600">
                  When you use MindCheck’s self-assessment tools, we collect
                  certain information such as your answers to quiz questions,
                  your IP address, and any other data you provide. All data is
                  anonymized unless you explicitly provide identifiable
                  information.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  How We Use Your Information
                </h2>
                <p className="text-gray-600">
                  Your information is used to provide insights into your mental
                  well-being through our assessment tools. We may also use
                  aggregated data for research purposes to improve our services,
                  but this data will never identify you personally.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Data Security
                </h2>
                <p className="text-gray-600">
                  We implement strict security measures to protect your data.
                  All personal information is encrypted and stored following
                  HIPAA guidelines. We ensure that only authorized personnel
                  have access to your information.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Your Rights
                </h2>
                <p className="text-gray-600">
                  You have the right to access, update, or delete your
                  information at any time. If you would like to exercise these
                  rights, please contact us at support@mindcheck.com.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Third-Party Services
                </h2>
                <p className="text-gray-600">
                  We may use third-party services for analytics, but these
                  providers are bound by confidentiality agreements. Your
                  personal information is never sold or shared without your
                  explicit consent.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Changes to Our Privacy Policy
                </h2>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. Any
                  changes will be communicated through our website, and your
                  continued use of our services indicates acceptance of the
                  revised policy.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                If you have any questions about our privacy policy, feel free to
                contact us at support@mindcheck.online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
