import Link from 'next/link';
import { Play, Heart, BarChart3, Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Reduce Surgery Anxiety
            <span className="block text-emerald-600 mt-2">
              Through Understanding
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Watch gentle, clear explanations of your procedure to feel more prepared and confident about your upcoming surgery.
          </p>
          
          <Link
            href="/videos"
            className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            <Play className="w-6 h-6" />
            Browse Video Library
          </Link>
        </div>

        {/* Featured Video */}
        <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden mb-16">
          <div className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Procedure</h2>
              <p className="text-gray-600">A simple, common outpatient procedure</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Video Preview */}
              <div className="relative">
                <Link href="/videos/carpal-tunnel-release" className="group block">
                  <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden">
                    <img 
                      src="https://img.youtube.com/vi/nRP-TcwfLxQ/maxresdefault.jpg"
                      alt="Carpal Tunnel Release Surgery"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-emerald-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-2 py-1 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      3:45
                    </div>
                  </div>
                </Link>
              </div>

              {/* Video Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Carpal Tunnel Release Surgery</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Learn how carpal tunnel syndrome is treated through a simple outpatient procedure to relieve nerve pressure. This gentle animation shows exactly what happens during the surgery.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">15-30 minute procedure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">Outpatient surgery - go home same day</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">Return to normal activities in 2-6 weeks</span>
                  </div>
                </div>

                <Link
                  href="/videos/carpal-tunnel-release"
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Watch full explanation
                  <Play className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Purpose Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Patients */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-emerald-100">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Patients</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Reduce Pre-Surgery Anxiety</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Seeing what actually happens during your procedure helps calm nerves and reduces fear of the unknown.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Feel More Prepared</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Understanding each step helps you know exactly what to expect before, during, and after surgery.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Better Recovery</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Educated patients often follow instructions better and have smoother recovery experiences.
                </p>
              </div>
            </div>
          </div>

          {/* For Doctors */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-orange-100">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Doctors</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Measure Patient Outcomes</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Track how patient education affects anxiety levels, recovery times, and satisfaction scores.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Improve Care Quality</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Evidence shows educated patients have better surgical experiences and outcomes.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Generate Research Data</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Collect valuable data on the impact of patient education on surgical care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Learn About Your Procedure?
          </h2>
          <p className="text-gray-600 mb-6">
            Browse our collection of patient-friendly surgical education videos
          </p>
          <Link
            href="/videos"
            className="inline-flex items-center gap-3 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
          >
            <Play className="w-5 h-5" />
            View All Procedures
          </Link>
        </div>
      </div>
    </div>
  );
}