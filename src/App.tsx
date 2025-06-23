import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Youtube, 
  Instagram, 
  ChevronDown,
  Menu,
  X,
  Clock,
  Star,
  CheckCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'teachers', 'students', 'videos', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'teachers', label: 'Teachers' },
    { id: 'students', label: 'Students' },
    { id: 'videos', label: 'Videos' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-700" />
              <span className="text-xl font-bold text-gray-900">Poly Academy</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                    activeSection === item.id ? 'text-blue-700' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-blue-700 hover:bg-gray-50 ${
                    activeSection === item.id ? 'text-blue-700 bg-blue-50' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <GraduationCap className="h-16 w-16 text-blue-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-700">Poly Academy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Excellence in Education Since 2013
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Under the expert guidance of <span className="font-semibold text-blue-700">Mr. Jamal Ahmad</span>, 
              we provide comprehensive coaching for classes 1-12 across all boards and mediums.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => scrollToSection('students')}
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
              >
                Enroll Now
              </button>
              <button 
                onClick={() => scrollToSection('teachers')}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Join Our Team
              </button>
            </div>
          </div>
        </div>
        <div className="text-center pb-8">
          <ChevronDown className="h-8 w-8 text-gray-400 animate-bounce mx-auto" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Poly Academy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over a decade of educational excellence and student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-blue-700 mr-3" />
                <span className="text-2xl font-bold text-gray-900">10+ Years of Legacy</span>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Since 2013, Poly Academy has been a beacon of educational excellence, 
                nurturing thousands of students and helping them achieve their academic goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Expert Master Teachers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">CBSE, ICSE & UP Board Coverage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">English & Hindi Medium</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">All Streams & Classes (1-12)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <Users className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">5000+</h3>
                <p className="text-gray-600">Students Taught</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-xl text-center">
                <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">95%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <BookOpen className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">All</h3>
                <p className="text-gray-600">Boards Covered</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.youtube.com/@PolyAcademyGlobal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Youtube className="h-6 w-6 mr-2" />
                YouTube Channel
              </a>
              <div className="flex items-center bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed shadow-lg">
                <Instagram className="h-6 w-6 mr-2" />
                Instagram (Coming Soon)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Application Section */}
      <section id="teachers" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Teaching Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of our legacy of excellence. We're looking for passionate educators.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Teaching Opportunities</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-700 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Classes Available</h4>
                    <p className="text-gray-600">Classes 1-12, all streams and subjects</p>
                  </div>
                  <div className="border-l-4 border-emerald-600 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Boards</h4>
                    <p className="text-gray-600">CBSE, ICSE, UP Board</p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Medium</h4>
                    <p className="text-gray-600">English & Hindi Medium</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Streams</h4>
                    <p className="text-gray-600">Science (PCM, PCB), Commerce, Humanities</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply Now</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Competitive Salary</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Professional Growth</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Supportive Environment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Flexible Timings</span>
                  </div>
                </div>
                <a 
                  href="mailto:info.polyacademy@gmail.com?subject=Teaching Position Application&body=Dear Poly Academy Team,%0D%0A%0D%0AI am interested in applying for a teaching position at your esteemed institution. Please find my details below:%0D%0A%0D%0AName: %0D%0AQualification: %0D%0AExperience: %0D%0ASubjects I can teach: %0D%0APreferred Classes: %0D%0AContact Number: %0D%0A%0D%0AThank you for considering my application.%0D%0A%0D%0ABest regards"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  Apply for Teaching Position
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Enrollment Section */}
      <section id="students" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Enrollment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of successful students. Choose your batch and start your journey to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Primary Classes */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1-8</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Primary Classes</h3>
                <p className="text-gray-600">Foundation Building</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3" />
                  <span className="text-gray-700">Classes 1st - 8th</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3" />
                  <span className="text-gray-700">Hindi & English Medium</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3" />
                  <span className="text-gray-700">All Subjects Covered</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-700 mr-3" />
                  <span className="text-gray-700">Interactive Learning</span>
                </div>
              </div>
            </div>

            {/* Secondary Classes */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">9-10</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Secondary Classes</h3>
                <p className="text-gray-600">Board Preparation</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Classes 9th - 10th</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">UP Board, CBSE, ICSE</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Board Exam Focus</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Regular Mock Tests</span>
                </div>
              </div>
            </div>

            {/* Senior Secondary Classes */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold">11-12</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Senior Secondary</h3>
                <p className="text-gray-600">Career Preparation</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">Classes 11th - 12th</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">PCM, PCB Streams</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">Commerce & Humanities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">Competitive Exam Prep</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf1UgNRBh8mnSOAcD4p-hXgqtI9jlFyATYPo7xXMJYS5BL4qQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl text-lg"
            >
              <BookOpen className="h-6 w-6 mr-2" />
              Enroll Now - Fill Enquiry Form
            </a>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section id="videos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Educational Videos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive video library for enhanced learning
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <Youtube className="h-12 w-12 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Coming Soon!</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're working on creating an extensive library of educational videos to support your learning journey. 
              Stay tuned for exciting content!
            </p>
            <a 
              href="https://www.youtube.com/@PolyAcademyGlobal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Youtube className="h-6 w-6 mr-2" />
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your educational journey? Get in touch with us today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+918218488230" className="text-blue-700 hover:text-blue-800 font-medium">
                    +91 8218488230
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:info.polyacademy@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                    info.polyacademy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                  <a 
                    href="https://g.co/kgs/8fFS9rZ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Enquiry</h3>
              <p className="text-gray-600 mb-6">
                Have questions about admissions, courses, or career opportunities? 
                Fill out our enquiry form and we'll get back to you promptly.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf1UgNRBh8mnSOAcD4p-hXgqtI9jlFyATYPo7xXMJYS5BL4qQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl w-full justify-center"
              >
                <Mail className="h-6 w-6 mr-2" />
                Fill Enquiry Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Poly Academy</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Excellence in education since 2013. Nurturing minds, building futures, 
                and creating success stories under the guidance of Mr. Jamal Ahmad.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.youtube.com/@PolyAcademyGlobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 p-2 rounded hover:bg-red-700 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <div className="bg-gray-600 p-2 rounded cursor-not-allowed">
                  <Instagram className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+91 8218488230</li>
                <li>info.polyacademy@gmail.com</li>
                <li>
                  <a 
                    href="https://g.co/kgs/8fFS9rZ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    View Location
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Poly Academy. All rights reserved. | Empowering Education Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;