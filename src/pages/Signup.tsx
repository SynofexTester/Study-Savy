import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Eye, EyeOff, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const universities = [
  "LUMS - Lahore University of Management Sciences",
  "NUST - National University of Sciences and Technology",
  "AKU - Aga Khan University",
  "IBA - Institute of Business Administration",
  "FAST-NUCES",
  "COMSATS University",
  "Punjab University",
  "Karachi University",
  "Other",
];

const fields = [
  "Computer Science",
  "Engineering (Electrical)",
  "Engineering (Mechanical)",
  "Engineering (Civil)",
  "Medicine",
  "Business Administration",
  "Law",
  "Economics",
  "Psychology",
  "Other",
];

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    university: "",
    field: "",
    semester: "",
    role: "buy",
    password: "",
  });
  const [universitySearch, setUniversitySearch] = useState("");
  const [showUniversityDropdown, setShowUniversityDropdown] = useState(false);

  const filteredUniversities = universities.filter((uni) =>
    uni.toLowerCase().includes(universitySearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-subtle flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-hero flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              EduVault
            </span>
          </Link>

          <h1 className="font-display text-3xl font-bold mb-2">Join the Community</h1>
          <p className="text-muted-foreground mb-8">
            Create your account and start your learning journey.
          </p>

          {/* Social Signup */}
          <Button
            variant="outline"
            className="w-full h-12 mb-6 rounded-xl"
            type="button"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="h-12 mt-1.5 rounded-xl"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 mt-1.5 rounded-xl"
              />
            </div>

            {/* University Selector */}
            <div className="relative">
              <Label htmlFor="university">University/College</Label>
              <div className="relative mt-1.5">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="university"
                  type="text"
                  placeholder="Search your university..."
                  value={universitySearch}
                  onChange={(e) => {
                    setUniversitySearch(e.target.value);
                    setShowUniversityDropdown(true);
                  }}
                  onFocus={() => setShowUniversityDropdown(true)}
                  className="h-12 pl-10 rounded-xl"
                />
              </div>
              {showUniversityDropdown && filteredUniversities.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-card border border-border rounded-xl shadow-card max-h-48 overflow-y-auto">
                  {filteredUniversities.map((uni) => (
                    <button
                      key={uni}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, university: uni });
                        setUniversitySearch(uni);
                        setShowUniversityDropdown(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-muted transition-colors text-sm"
                    >
                      {uni}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Field of Study */}
            <div>
              <Label htmlFor="field">Field of Study</Label>
              <select
                id="field"
                value={formData.field}
                onChange={(e) => setFormData({ ...formData, field: e.target.value })}
                className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mt-1.5"
              >
                <option value="">Select your field</option>
                {fields.map((field) => (
                  <option key={field} value={field}>
                    {field}
                  </option>
                ))}
              </select>
            </div>

            {/* Semester */}
            <div>
              <Label htmlFor="semester">Current Semester/Year</Label>
              <select
                id="semester"
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mt-1.5"
              >
                <option value="">Select semester</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <option key={sem} value={sem}>
                    Semester {sem}
                  </option>
                ))}
                <option value="graduate">Graduate</option>
              </select>
            </div>

            {/* Role Selection */}
            <div>
              <Label>I am here to</Label>
              <div className="grid grid-cols-2 gap-3 mt-1.5">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "buy" })}
                  className={`h-12 rounded-xl border-2 font-medium transition-all ${
                    formData.role === "buy"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  Buy Notes
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "sell" })}
                  className={`h-12 rounded-xl border-2 font-medium transition-all ${
                    formData.role === "sell"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  Sell Notes
                </button>
              </div>
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1.5">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="h-12 pr-12 rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 rounded-xl text-base">
              Create Account
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Login
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-hero items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-primary-foreground max-w-md"
        >
          <div className="w-24 h-24 rounded-3xl bg-white/20 flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-12 h-12" />
          </div>
          <h2 className="font-display text-3xl font-bold mb-4">
            Join 50,000+ Students
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Access quality notes, share your knowledge, and earn while helping others succeed.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
