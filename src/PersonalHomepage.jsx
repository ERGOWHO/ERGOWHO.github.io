import React from 'react';
import { Card, CardContent } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { motion } from 'framer-motion';
import { Link, Element } from 'react-scroll';

const PersonalHomepage = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Sidebar */}
      <nav className="fixed top-0 left-0 h-full w-60 bg-gray-900 p-8 space-y-6 text-white">
        <div className="text-center mb-8">
          <img
            src="/path-to-your-avatar.jpg"
            alt="Your Avatar"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold">Yue Hu</h1>
          <p className="text-sm text-gray-400">Ph.D. Student | Computer Vision & Machine Learning</p>
        </div>
        <ul className="space-y-4 text-sm">
          {['Home', 'About & Education', 'Projects', 'Experience', 'Awards', 'Skills'].map((section) => (
            <li key={section}>
              <Link
                to={section.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
                smooth={true}
                duration={500}
                className="block p-2 rounded hover:bg-gray-700 hover:text-blue-400 transition-colors"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="ml-60 flex-1 overflow-y-auto">
        {/* Home Section */}
        <Element name="home" className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-background.jpg)' }}>
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">WYue Hu </h1>
            <p className="text-2xl mb-6">Explore My Work and Achievements</p>
          </div>
        </Element>

        {/* About & Education Section */}
        <Element name="about-education" className="px-12 py-24 bg-gray-800">
          <h2 className="text-4xl font-bold mb-6">About Me & Education</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Research Interests</h3>
              <p className="text-lg text-gray-300 mb-4">
                High-fidelity 3D Reconstruction, 3D vision, 3D geometry, 3D Gaussian Splatting, Neural Radiance Fields (NeRF), 
                Simultaneous Localization and Mapping (SLAM), Structure from Motion (SfM), Relighting. <br/>
                2D Object Detection: YOLO, DETR, and related architectures. <br/>
                Wireless Application, Backscatter Communication, Passive Long-Range Low-Power Systems, 
                LoRa-based IoT Networks, FPGA, Embedded System.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                {[
                  'Ph.D. in Computer Engineering, USC (GPA 3.83/4.0) - 01/2021 to 05/2026 (Expected)',
                  'M.S. in Computer Engineering, USC (GPA 3.88/4.0) - 01/2021 to 12/2023',
                  'Ph.D. in Software Engineering (Transferred to USC), Northwest University - 09/2018 to 12/2020',
                  'B.S. in Computer Science and Technology, Northwest University (Graduated with Honors) - 09/2013 to 06/2017'
                ].map((edu, index) => (
                  <Card key={index} className="bg-gray-700 shadow-md">
                    <CardContent>
                      <h3 className="text-lg font-semibold text-gray-300">{edu}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Element>

        {/* Projects Section */}
        <Element name="projects" className="px-12 py-24 bg-gray-800">
          <h2 className="text-4xl font-bold mb-6">Research Projects</h2>
          <div className="space-y-6">
            {["FireLoc2.0: Few-Shot 3D Scene Refinement", "SLAM & 3D Gaussian Splatting", "Instant LeRF: 3D Feature Field"].map((projectTitle, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <a href={`/projects/${projectTitle.replace(/\s+/g, '-').toLowerCase()}`} className="block">
                  <div className="flex p-6 mb-6 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg cursor-pointer">
                    <div className="w-1/4 mr-6">
                      <img src="/assets/SplatMAP_demo_preview.gif" alt="Project Demo" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{projectTitle}</h3>
                      <p className="text-gray-300 mt-2">Click to see project details and video demonstrations.</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </Element>

        {/* Experience Section */}
        <Element name="experience" className="px-12 py-24 bg-gray-800">
          <h2 className="text-4xl font-bold mb-6">Experience</h2>
          <ul className="list-disc ml-8 text-gray-300">
            <li>Graduate Researcher Internship - Institute for Creative Technologies (05/2024 - 08/2024)</li>
            <li>Graduate Research Assistant - Institute for Creative Technologies (10/2023 - Present)</li>
            <li>Samsung Research with USC: In-Pixel Computing Project (07/2023 - 06/2024)</li>
            <li>Wildfire Ember Detection and Dataset Generation (01/2021 - 07/2023)</li>
          </ul>
        </Element>

        {/* Awards Section */}
        <Element name="awards" className="px-12 py-24 bg-gray-800">
          <h2 className="text-4xl font-bold mb-6">Awards</h2>
          <ul className="list-disc ml-8 text-gray-300">
            <li>SiPS2024 Students and Young Professionals Funding</li>
            <li>Travel Grant for PhD Students and Postdoctoral Scholars (2024 - 2025)</li>
            <li>First-class University Scholarship (Top 10%) - Northwest University (2013 - 2018)</li>
            <li>Outstanding Graduates Award - Northwest University (2017)</li>
          </ul>
        </Element>

        {/* Skills Section */}
        <Element name="skills" className="px-12 py-24 bg-gray-800">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>
          <ul className="list-disc ml-8 text-gray-300">
            <li>Frameworks & Tools: PyTorch, MMdetection, NeRFstudio, Unreal Engine, Unix/Linux, GNU Radio</li>
            <li>Vision Models: 3DGS, NeRF, DUST3R, MaSt3R, SLAM, YOLOv7, YOLOv8, DETR</li>
            <li>Programming Languages: Python, Verilog, C++, C, MATLAB, Git, SQL, Postgre, LaTeX</li>
          </ul>
        </Element>
      </div>
    </div>
  );
};

export default PersonalHomepage;
