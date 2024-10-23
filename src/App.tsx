import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  ChevronDown,
  Phone,
  Mail,
  Users,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { AssessmentCard } from './components/AssessmentCard';
import { AssessmentPage } from './pages/AssessmentPage';
import { AssessmentResults } from './pages/AssessmentResults';
import { assessments } from './data/assessments';
import { SEOHead } from './components/SEOHead';
import { AboutUs } from './pages/AboutUsPage';
import { FAQ } from './pages/FAQPage';
import { Contact } from './pages/ContactPage';
import { PrivacyPolicy } from './pages/PrivacyPage';
import { TermsOfService } from './pages/TermsPage';
import { Disclaimer } from './pages/DisclaimerPage';

function HomePage() {
  return (
    <>
      <SEOHead />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">
                Understanding Your Mental Health Starts Here
              </h1>
              <p className="text-xl mb-8">
                Take our confidential self-assessment quizzes to gain insights
                into your mental well-being and find professional support when
                needed.
              </p>
              <Link
                to="/assessment/anxiety"
                className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50"
              >
                Take Your First Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Why Choose MindCheck?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Confidential & Secure
                </h3>
                <p className="text-gray-600">
                  Your privacy is our priority with HIPAA-compliant security
                  measures.
                </p>
              </div>
              <div className="text-center p-6">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Professional Guidance
                </h3>
                <p className="text-gray-600">
                  Developed by mental health experts following clinical
                  guidelines.
                </p>
              </div>
              <div className="text-center p-6">
                <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Immediate Results
                </h3>
                <p className="text-gray-600">
                  Get instant insights and recommendations after completing
                  assessments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Assessments Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Available Assessments
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {assessments.slice(0, 6).map((assessment) => (
                <AssessmentCard key={assessment.id} assessment={assessment} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/assessments"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              >
                View All Assessments
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Are these assessments diagnostic tools?
                </h3>
                <p className="text-gray-600">
                  No, these assessments are screening tools designed to help you
                  understand your mental health better. They are not diagnostic
                  tools and should not replace professional medical advice.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  How long do assessments take?
                </h3>
                <p className="text-gray-600">
                  Most assessments take between 5-10 minutes to complete. Each
                  assessment indicates the estimated time at the beginning.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Is my information kept private?
                </h3>
                <p className="text-gray-600">
                  Yes, we take your privacy seriously. All data is encrypted and
                  protected following HIPAA guidelines. We never share your
                  personal information without consent.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function App() {
  const [isAssessmentsOpen, setIsAssessmentsOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Brain className="w-8 h-8 text-blue-600" />
                  <span className="ml-2 text-xl font-semibold text-gray-900">
                    MindCheck
                  </span>
                </Link>
                <nav className="hidden md:flex ml-8 space-x-6">
                  <div className="relative">
                    <button
                      onClick={() => setIsAssessmentsOpen(!isAssessmentsOpen)}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      Assessments
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {isAssessmentsOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 mt-1">
                        {assessments.map((assessment) => (
                          <Link
                            key={assessment.id}
                            to={`/assessment/${assessment.id}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsAssessmentsOpen(false)}
                          >
                            {assessment.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="text-sm">HIPAA Compliant</span>
                </div>
                <Link
                  to="/assessment/anxiety"
                  className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Start Assessment
                </Link>
              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/assessments" element={<HomePage />} />
          <Route path="/assessment/:id" element={<AssessmentPage />} />
          <Route
            path="/assessment/:id/results"
            element={<AssessmentResults />}
          />
        </Routes>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About MindCheck</h3>
                <p className="text-gray-400 text-sm">
                  Providing accessible mental health screening tools to help
                  individuals make informed decisions about their well-being.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/about" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/assessments" className="hover:text-white">
                      Assessments
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="hover:text-white">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/privacy" className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="hover:text-white">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/disclaimer" className="hover:text-white">
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>1-800-6701-990</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>support@mindcheck.shop</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} MindCheck. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
