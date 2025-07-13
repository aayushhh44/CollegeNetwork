import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <AcademicCapIcon className="h-8 w-8 text-primary-600" />,
      title: 'Student Network',
      description: 'Connect with fellow students, share academic experiences, and collaborate on projects.'
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-primary-600" />,
      title: 'Teacher Portal',
      description: 'Manage classes, interact with students, and share educational resources.'
    },
    {
      icon: <DocumentTextIcon className="h-8 w-8 text-primary-600" />,
      title: 'Content Sharing',
      description: 'Share posts, articles, and resources with the college community.'
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary-600" />,
      title: 'Community Discussion',
      description: 'Engage in meaningful discussions and stay updated with college events.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to{' '}
          <span className="text-blue-600">CollegeNetwork</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Connect, collaborate, and grow with your college community. 
          Whether you're a student, teacher, or alumni, find your place in our vibrant network.
        </p>
        
        {!user ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/student-register" 
              className="btn-primary text-lg px-8 py-3 flex items-center justify-center space-x-2"
            >
              <span>Student Register</span>
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link 
              to="/college-register" 
              className="btn-outline text-lg px-8 py-3"
            >
              College Register
            </Link>
            <Link 
              to="/login" 
              className="btn-outline text-lg px-8 py-3"
            >
              Sign In
            </Link>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dashboard" 
              className="btn-primary text-lg px-8 py-3 flex items-center justify-center space-x-2"
            >
              <span>Go to Dashboard</span>
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link 
              to="/posts" 
              className="btn-outline text-lg px-8 py-3"
            >
              Browse Posts
            </Link>
            {user.role === 'teacher' && (
              <Link to="/admin" className="btn-outline text-lg px-8 py-3">Admin Dashboard</Link>
            )}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What makes CollegeNetwork special?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Role-based CTA */}
      {!user && (
        <div className="bg-blue-50 rounded-2xl p-8 text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join the Community
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Choose your role and start connecting with your college community. 
            Each role has unique features and permissions tailored to your needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <AcademicCapIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Student</h4>
              <p className="text-sm text-gray-600 mb-4">
                Connect with peers, share experiences, and access academic resources.
              </p>
              <Link to="/student-register" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Join as Student →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <UserGroupIcon className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Teacher</h4>
              <p className="text-sm text-gray-600 mb-4">
                Manage classes, interact with students, and share educational content.
              </p>
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Join as Teacher →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <UserGroupIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Alumni</h4>
              <p className="text-sm text-gray-600 mb-4">
                Stay connected with your alma mater and mentor current students.
              </p>
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Join as Alumni →
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/college-register" className="btn-outline px-6 py-3 text-lg">
              Register Your College
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home; 