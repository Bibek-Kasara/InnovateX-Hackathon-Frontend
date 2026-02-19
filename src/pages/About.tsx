import React from 'react';
import { Heart,  Shield, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { icon: Heart, title: 'Accessibility', description: 'Making technology inclusive for everyone' },
    { icon: Shield, title: 'Trust', description: 'Building reliable solutions with integrity' },
    { icon: Lightbulb, title: 'Innovation', description: 'Pushing boundaries of what\'s possible' }
  ];

  const team = [
    {
      name: 'Aarshee Ale Magar',
      role: 'Backend Developer',
      image: 'Aarshee.jpg',
      bio: 'Aspiring backend developer passionate about building secure, efficient systems that support inclusive and accessible technology.'
    },
    {
      name: 'Aakriti Thakuri',
      role: 'Project Manager',
      image: 'Aakriti.jpg',
      bio: 'Motivated project manager driven to lead inclusive tech projects that create real-world impact through collaboration and innovation.'
    },
    {
      name: 'Bibek Kasara',
      role: 'Frontend Developer',
      image: 'Bibek.jpg',
      bio: 'Focused on creating intuitive, accessible interfaces that bridge design and usability for everyone.'
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Mission Statement */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Born from Real Need
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
              P-SETU was inspired by the real-life challenges faced by people with hearing and speech disabilities in South Asia. Witnessing how simple daily communication became a struggle, our team of engineers and educators came together with one goal — to build a digital bridge that enables seamless, real-time communication through AI-powered sign detection.
What began as a passion project has now become a growing movement, helping individuals regain their voice, confidence, and connection in schools, hospitals, and public spaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                In 2019, one of our team members witnessed a talented student being rejected during a university admission process — not because of merit, but because of a communication gap. The student, who was deaf, couldn’t express himself during the interview. That moment lit a fire in us.
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                We created P-SETU – a bridge between sign language and spoken words. Powered by real-time AI and computer vision, P-SETU translates sign language into readable text, giving deaf and mute individuals a voice in classrooms, offices, hospitals, and beyond.
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">What started as a simple idea is now a mission to break down communication barriers and build a more inclusive world — one sign at a time.</p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
                  <div className="text-4xl font-bold text-emerald-500 mb-2">50K+</div>
                  <div className="text-gray-600 dark:text-gray-300 font-light">Lives Changed</div>
                  <div className="text-2xl font-bold text-blue-400 mt-4 mb-2">99%</div>
                  <div className="text-gray-600 dark:text-gray-300 font-light">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center group"
              >
                <div className="bg-gradient-to-r from-blue-400 to-emerald-400 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
              The passionate individuals making SignSpeak a reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center group max-w-sm mx-auto">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full  group-hover:opacity-100 opacity-0 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-light text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Changing Lives Globally
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-blue-100">Translations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-blue-100">Satisfaction</div>
            </div>
          </div>

          <p className="text-xl text-blue-100 font-light max-w-3xl mx-auto">
            Every day, SignSpeak helps thousands of people communicate, learn, work, and connect. 
            From classrooms in Tokyo to boardrooms in New York, we're building a more inclusive world, one conversation at a time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;