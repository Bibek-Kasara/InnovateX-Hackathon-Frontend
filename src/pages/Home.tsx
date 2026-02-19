import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Play, Shield, Zap, Star, Quote } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    { icon: CheckCircle, title: '99% Accuracy', description: 'Industry-leading precision in gesture recognition' },
    { icon: Zap, title: 'Real-time Translation', description: 'Instant communication without delays' },
    { icon: Shield, title: 'Privacy Protected', description: 'Your data stays secure and private' }
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Teacher',
      content: 'SignSpeak has revolutionized how I communicate with my deaf students. The accuracy is incredible!',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Software Developer',
      content: 'As someone who is deaf, this technology has opened up so many opportunities for me.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      content: 'My daughter can now communicate with her hearing classmates effortlessly. Thank you SignSpeak!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Breaking</span>{' '}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Communication
                </span>{' '}
                <span className="text-gray-900 dark:text-white">Barriers</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-lg">
                Empowering the deaf and mute community with real-time AI gesture translation that bridges the gap between sign language and spoken communication.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group"
                >
                  Start Detecting
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center justify-center group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-3xl p-8 shadow-2xl">
                <img
                  src="hero.jpg"
                  alt="Person unable to speak trying to communicate with others using gestures"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-emerald-500">1
                  0K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Lives Changed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="bg-gradient-to-r from-blue-400 to-emerald-400 p-3 rounded-xl w-fit mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
              Real stories from people whose lives have been transformed by SignSpeak
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
              >
                <Quote className="h-8 w-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-light italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Break Down Barriers?
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-light">
            Join thousands of users who are already communicating without limits
          </p>
          <Link
            to="/services"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;