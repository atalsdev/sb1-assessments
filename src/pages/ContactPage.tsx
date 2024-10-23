import React from 'react';
import { SEOHead } from '../components/SEOHead';

export function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us | MindCheck"
        description="Reach out to MindCheck for any inquiries regarding our self-assessment quizzes or mental health resources."
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! If you have any questions or need more
              information about our self-assessment quizzes and mental health
              resources, feel free to contact us using the details below.
            </p>

            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Email Us
                </h2>
                <p className="text-gray-600">support@mindcheck.online</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900">Call Us</h2>
                <p className="text-gray-600">+1 800 123 4567</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Follow Us
                </h2>
                <p className="text-gray-600">Facebook | Twitter | Instagram</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">
                Office Location
              </h2>
              <p className="text-gray-600">
                MindCheck, 123 Wellness St., Suite 101, Mental Health City, MH
                56789
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">
                Business Hours
              </h2>
              <p className="text-gray-600">
                Monday to Friday: 9:00 AM - 5:00 PM
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Get In Touch
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-600">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-600">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    rows="4"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
