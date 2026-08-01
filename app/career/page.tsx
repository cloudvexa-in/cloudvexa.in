"use client";

import JobCard from "@/components/features/JobCard";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Send, X } from "lucide-react";
import { useState } from "react";

const departments = [
  "All",
  "Engineering",
  "Design",
  "QA",
  "Sales",
  "Marketing",
];
const locations = ["All", "Remote", "Bangalore", "Bhubaneswar"];
const types = ["All", "Full-time", "Part-time", "Contract"];

const jobs = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Bangalore",
    type: "Full-time",
    description:
      "We are looking for an experienced Full Stack Developer to join our engineering team. You will work on cutting-edge projects using React, Node.js, and cloud technologies.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Join our design team to create beautiful, intuitive user experiences. Experience with Figma, user research, and modern design principles required.",
  },
  {
    title: "QA Automation Engineer",
    department: "QA",
    location: "Bhubaneswar",
    type: "Full-time",
    description:
      "Help us maintain the highest quality standards by developing and executing automated test suites. Experience with Selenium, Cypress, or similar tools preferred.",
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Bangalore",
    type: "Full-time",
    description:
      "Work on exciting AI projects involving machine learning, natural language processing, and computer vision. Strong Python and TensorFlow/PyTorch skills required.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Manage and optimize our cloud infrastructure. Experience with AWS/Azure, Docker, Kubernetes, and CI/CD pipelines essential.",
  },
  {
    title: "Technical Writer",
    department: "Marketing",
    location: "Remote",
    type: "Part-time",
    description:
      "Create comprehensive technical documentation, tutorials, and guides for our products and services. Strong writing skills and technical background required.",
  },
];

export default function CareerPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>("");

  const filteredJobs = jobs.filter((job) => {
    return (
      (selectedDepartment === "All" || job.department === selectedDepartment) &&
      (selectedLocation === "All" || job.location === selectedLocation) &&
      (selectedType === "All" || job.type === selectedType)
    );
  });

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowApplicationModal(true);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-cyber">
        <div className="container-custom text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-black mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Join Our <span className="gradient-text">Amazing Team</span>
          </motion.h1>
          <motion.p
            className="text-xl opacity-90 max-w-3xl mx-auto text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Be part of a dynamic team that&apos;s shaping the future of
            technology
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Work at <span className="gradient-text">Cloudvexa</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "💰",
                title: "Competitive Salary",
                desc: "Industry-leading compensation packages",
              },
              {
                icon: "🏥",
                title: "Health Benefits",
                desc: "Comprehensive health insurance for you and family",
              },
              {
                icon: "🌴",
                title: "Flexible Time Off",
                desc: "Generous vacation and sick leave policy",
              },
              {
                icon: "📚",
                title: "Learning & Development",
                desc: "Continuous learning opportunities and certifications",
              },
              {
                icon: "🏠",
                title: "Remote Work",
                desc: "Flexible work-from-home options",
              },
              {
                icon: "🎉",
                title: "Great Culture",
                desc: "Fun, inclusive, and collaborative environment",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="glass-card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm opacity-80">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 flex-wrap">
            <div className="flex gap-2 flex-wrap">
              <span className="text-sm font-medium opacity-70 flex items-center">
                <Briefcase size={16} className="mr-2" /> Department:
              </span>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-3 py-1 rounded-lg text-sm transition-all ${
                    selectedDepartment === dept
                      ? "bg-neon-cyan text-deep-blue-300"
                      : "glass hover:bg-white/10"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap">
              <span className="text-sm font-medium opacity-70">Location:</span>
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-3 py-1 rounded-lg text-sm transition-all ${
                    selectedLocation === loc
                      ? "bg-neon-cyan text-deep-blue-300"
                      : "glass hover:bg-white/10"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap">
              <span className="text-sm font-medium opacity-70">Type:</span>
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 rounded-lg text-sm transition-all ${
                    selectedType === type
                      ? "bg-neon-cyan text-deep-blue-300"
                      : "glass hover:bg-white/10"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Jobs List */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <JobCard
                key={index}
                {...job}
                index={index}
                onApply={() => handleApply(job.title)}
              />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-2">No positions found</h3>
              <p className="opacity-80">Try adjusting your filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {showApplicationModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowApplicationModal(false)}
          >
            <motion.div
              className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold gradient-text">
                  Apply for {selectedJob}
                </h2>
                <button
                  onClick={() => setShowApplicationModal(false)}
                  className="glass p-2 rounded-lg hover:bg-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full"
                      placeholder="+91 123 456 7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      className="w-full"
                      placeholder="linkedin.com/in/johndoe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Resume/CV * (URL or file upload)
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full"
                    placeholder="Link to your resume"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Tell us why you're a great fit..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Submit Application
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
