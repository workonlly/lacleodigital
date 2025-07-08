import { useState, useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';

interface LoginPanelProps {
  onLogin: (isAuthenticated: boolean) => void;
  isAuthenticated: boolean;
}

export default function LoginPanel({ onLogin, isAuthenticated }: LoginPanelProps) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Timeout management
  const [timeoutMinutes] = useState(10); // Default 30 minutes
  const [remainingTime, setRemainingTime] = useState(timeoutMinutes * 60); // in seconds
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastActivityRef = useRef<number>(Date.now());

  // Hardcoded credentials (in production, this should be in environment variables)
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "lacleo2024";

  // Handle user activity to reset timeout
  const resetTimeout = () => {
    if (isAuthenticated) {
      lastActivityRef.current = Date.now();
      setRemainingTime(timeoutMinutes * 60);
      
      // Clear existing timeout
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
      
      // Set new timeout
      timeoutRef.current = setInterval(() => {
        setRemainingTime(prev => {
          if (prev <= 1) {
            handleLogout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  // Add event listeners for user activity
  useEffect(() => {
    if (isAuthenticated) {
      const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
      
      const handleActivity = () => {
        resetTimeout();
      };

      events.forEach(event => {
        document.addEventListener(event, handleActivity);
      });

      // Start the timeout
      resetTimeout();

      return () => {
        events.forEach(event => {
          document.removeEventListener(event, handleActivity);
        });
        if (timeoutRef.current) {
          clearInterval(timeoutRef.current);
        }
      };
    }
  }, [isAuthenticated, timeoutMinutes]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      onLogin(true);
      setUsername("");
      setPassword("");
      setError("");
    } else {
      setError("Invalid username or password");
    }
    
    setIsLoading(false);
  };

  const handleLogout = () => {
    onLogin(false);
    setRemainingTime(timeoutMinutes * 60);
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (isAuthenticated) {
    return (
      <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <div className="font-semibold text-gray-800">Session Active</div>
            <div className="text-gray-600">
              Timeout: {formatTime(remainingTime)}
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
          >
            Logout
          </button>
        </div>
        
        {/* Timeout warning */}
        {remainingTime <= 300 && ( // 5 minutes warning
          <div className="mt-2 p-2 bg-yellow-100 border border-yellow-300 rounded text-yellow-800 text-xs">
            ⚠️ Session expires in {formatTime(remainingTime)}. Move your mouse to extend.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Helmet>
        <title>Admin Login | LaCleo Digital</title>
        <meta name="description" content="Secure admin login for LaCleo Digital content management." />
        <meta name="keywords" content="admin login, secure access, LaCleo Digital admin" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lacleodigital.com/admin" />
        <meta property="og:title" content="Admin Login | LaCleo Digital" />
        <meta property="og:description" content="Secure admin login for LaCleo Digital content management." />
        <meta property="og:image" content="/public/Yellow_and_Blue_Clean_and_Minimalist_Tech_Company_Logo__1_-removebg-preview.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lacleodigital.com/admin" />
        <meta property="twitter:title" content="Admin Login | LaCleo Digital" />
        <meta property="twitter:description" content="Secure admin login for LaCleo Digital content management." />
        <meta property="twitter:image" content="/public/Yellow_and_Blue_Clean_and_Minimalist_Tech_Company_Logo__1_-removebg-preview.png" />
      </Helmet>
      
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter username"
              required
              disabled={isLoading}
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Enter password"
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                disabled={isLoading}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Logging in...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

      </div>
    </div>
  );
} 