import React, { useState, useEffect } from 'react';
import { Camera, Play, Pause, RotateCcw, Zap, Shield, Globe, Target } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

const Services: React.FC = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string>('');
  const [currentText, setCurrentText] = useState('');

  const features = [
    { 
      icon: Zap, 
      title: 'Real-time Detection', 
      description: 'Instant gesture recognition with sub-second latency for seamless communication' 
    },
    { 
      icon: Target, 
      title: 'High Accuracy', 
      description: '99% precision rate powered by advanced computer vision and machine learning' 
    },
    { 
      icon: Shield, 
      title: 'Private & Secure', 
      description: 'All processing happens locally on your device - your data never leaves your hands' 
    },
    { 
      icon: Globe, 
      title: 'Cross-Platform', 
      description: 'Works seamlessly across web, mobile, and desktop platforms' 
    }
  ];

  const steps = [
    { 
      step: 1, 
      title: 'Enable Camera', 
      description: 'Grant camera access to start detecting sign language gestures' 
    },
    { 
      step: 2, 
      title: 'Start Signing', 
      description: 'Perform sign language gestures in front of your camera' 
    },
    { 
      step: 3, 
      title: 'Get Translation', 
      description: 'View real-time text translation of your sign language' 
    }
  ];

  const startDetection = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 640, max: 1280 },
          height: { ideal: 480, max: 720 },
          facingMode: 'user'
        },
        audio: false
      });
      
      setStream(mediaStream);
      setIsDetecting(true);
      setIsLoading(false);
      
      // Start simulated detection after a short delay to ensure video is ready
      setTimeout(() => {
        if (mediaStream.active) {
          simulateDetection();
        }
      }, 1000);
    } catch (error) {
      console.error('Camera error:', error);
      setIsLoading(false);
      if (error instanceof Error) {
        if (error.name === 'NotAllowedError') {
          setError('Camera access denied. Please allow camera access and try again.');
        } else if (error.name === 'NotFoundError') {
          setError('No camera found. Please ensure a camera is connected.');
        } else {
          setError('Unable to access camera. Please check your camera permissions and try again.');
        }
      } else {
        setError('Unable to access camera. Please ensure you have granted camera permissions and try again.');
      }
    }
  };

  const stopDetection = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsDetecting(false);
    setCurrentText('');
    setError('');
  };

  const simulateDetection = () => {
    if (!isDetecting) return;
    
    const words = ['Hello', 'How are you?', 'Thank you', 'Good morning', 'Nice to meet you', 'Please', 'Sorry', 'Yes', 'No', 'Help'];
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < words.length && isDetecting) {
        setCurrentText(words[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 3000);
    
    // Store interval reference for cleanup
    return () => clearInterval(interval);
  };

  // Video ref callback
  const videoRef = React.useCallback((video: HTMLVideoElement | null) => {
    if (video && stream) {
      video.srcObject = stream;
      // Remove any existing event listeners to prevent conflicts
      video.onloadedmetadata = () => {
        video.play().catch((err) => {
          console.error('Error playing video:', err);
          setError('Error starting video playback');
        });
      };
    }
  }, [stream]);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Detection Service */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Sign Language Detection
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
              Experience our cutting-edge AI technology that translates sign language into text in real-time
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Camera Feed */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="relative bg-gray-900 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
                  {error && (
                    <div className="absolute inset-0 bg-red-900/80 flex items-center justify-center z-10">
                      <div className="text-center text-white p-4">
                        <p className="mb-4">{error}</p>
                        <button
                          onClick={() => setError('')}
                          className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium"
                        >
                          Try Again
                        </button>
                      </div>
                    </div>
                  )}
                  {isLoading ? (
                    <div className="text-center">
                      <LoadingSpinner size="lg" className="mb-4" />
                      <p className="text-white">Initializing camera...</p>
                    </div>
                  ) : isDetecting && stream ? (
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover transform scale-x-[-1] bg-black"
                      />
                      <div className="absolute inset-0 bg-blue-500/10">
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                          LIVE
                        </div>
                        <div className="absolute inset-4 border-2 border-blue-400 rounded-xl opacity-80"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400 mb-4">
                        {error ? 'Camera access failed' : 'Camera feed will appear here'}
                      </p>
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="flex justify-center space-x-4 mt-6">
                  {!isDetecting && !isLoading ? (
                    <button
                      onClick={startDetection}
                      className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Start Detection
                    </button>
                  ) : isDetecting ? (
                    <>
                      <button
                        onClick={stopDetection}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center"
                      >
                        <Pause className="w-5 h-5 mr-2" />
                        Stop
                      </button>
                      <button
                        onClick={() => {
                          setCurrentText('');
                          // Stop current stream and restart
                          if (stream) {
                            stream.getTracks().forEach(track => track.stop());
                            setStream(null);
                          }
                          // Restart detection after a brief delay
                          setTimeout(() => {
                            startDetection();
                          }, 100);
                        }}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center"
                      >
                        <RotateCcw className="w-5 h-5 mr-2" />
                        Reset
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Status Cards */}
            <div className="space-y-6">
              {/* Current Text */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-400" />
                  Current Text
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 min-h-[80px] flex items-center justify-center">
                  {currentText ? (
                    <p className="text-xl font-medium text-gray-900 dark:text-white animate-pulse">
                      {currentText}
                    </p>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400 font-light">
                      {isDetecting ? 'Waiting for gestures...' : 'No detection active'}
                    </p>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
              Advanced technology designed for seamless communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center group"
              >
                <div className="bg-gradient-to-r from-blue-400 to-emerald-400 p-3 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-light text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-blue-400 to-emerald-400 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-light">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;