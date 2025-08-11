import { Heart, Shield, Users, Play, Brain, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Reducing Surgery Anxiety Through Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A clinical research initiative to help patients feel calmer and more prepared before orthopedic surgery
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pre-surgical anxiety affects up to 80% of patients and can impact recovery outcomes. We believe that 
            patient education through visual learning can significantly reduce anxiety, improve surgical experiences, 
            and potentially enhance recovery outcomes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This platform provides evidence-based video education to help patients understand their procedures, 
            while allowing healthcare providers to measure the impact of education on patient well-being and clinical outcomes.
          </p>
        </div>

        {/* Research Goals */}
        <div className="bg-blue-50 rounded-lg p-8 mb-8 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
            Research & Clinical Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Brain className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Reduce Pre-Surgery Anxiety</h3>
                <p className="text-blue-800 text-sm">Measure anxiety levels before and after video education</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <TrendingUp className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Improve Recovery Outcomes</h3>
                <p className="text-blue-800 text-sm">Track recovery metrics and patient compliance</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Enhance Patient Experience</h3>
                <p className="text-blue-800 text-sm">Monitor satisfaction and confidence levels</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Evidence-Based Care</h3>
                <p className="text-blue-800 text-sm">Build data to support patient education protocols</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Helps Patients */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How This Helps Patients</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Reduces Fear of the Unknown</h4>
                <p className="text-gray-600">Seeing exactly what happens removes mystery and uncertainty</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Builds Confidence</h4>
                <p className="text-gray-600">Knowledge about the procedure increases trust in the surgical team</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Improves Communication</h4>
                <p className="text-gray-600">Better informed patients ask better questions and feel more involved</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-semibold text-sm">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Supports Family Members</h4>
                <p className="text-gray-600">Loved ones can better provide emotional support when they understand too</p>
              </div>
            </div>
          </div>
        </div>

        {/* For Healthcare Providers */}
        <div className="bg-gray-100 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">For Healthcare Providers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This platform enables clinicians to study the relationship between patient education and:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Pre-operative anxiety levels</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Post-operative pain management</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Recovery timeline adherence</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Patient satisfaction scores</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Surgical complication rates</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Length of hospital stay</span>
            </li>
          </ul>
        </div>

        {/* Important disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">Clinical Research Platform</h3>
          <p className="text-yellow-700 leading-relaxed">
            This is a demonstration platform for clinical research into patient education and surgical outcomes. 
            All content is for educational purposes only and should not replace consultation with your healthcare provider. 
            Your surgeon will provide personalized information specific to your condition and treatment plan.
          </p>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Feel More Prepared?</h3>
          <p className="text-gray-600 mb-6">
            Explore our educational videos and take control of your surgical journey.
          </p>
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Play className="w-5 h-5" />
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
}