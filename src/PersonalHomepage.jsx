import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { motion } from 'framer-motion';
import { Link, Element } from 'react-scroll';
import { Github, Linkedin, FileText, Globe } from 'lucide-react';
const PersonalHomepage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundStyle = {
    transform: `translateY(${scrollY *0.3}px)`,
    opacity: Math.max(1 - scrollY / 1200, 0),
  };
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Sidebar */}
      <nav className="fixed top-0 left-0 h-full w-72 bg-gray-900 p-8 space-y-6 text-white">
        <div className="text-center mb-8">
          <img
            src="/assets/ava.JPG"
            alt="Your Avatar"
            className="w-40 h-28 rounded-full mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold">Yue Hu</h1>
          <p className="text-lg text-gray-400">Ph.D. Student | Computer Vision & Machine Learning</p>
        </div>
        <ul className="space-y-4 text-lg">
          {['Home', 'About', 'Projects', 'Publications', 'Experience', 'Awards', 'Skills'].map((section) => (
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
      <div className="ml-60 pl-20 flex-1 overflow-y-auto">
        {/* Home Section with Parallax Effect */}
        <div
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/home2.jpg)', ...backgroundStyle }}
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 1 }}
              animate={{ opacity: Math.max(1 - scrollY / 300, 0) }}
              className="text-7xl font-bold text-white mb-6"
            >
              Yue Hu
            </motion.h1>
            <motion.p
              initial={{ opacity: 1 }}
              animate={{ opacity: Math.max(1 - scrollY / 300, 0) }}
              className="text-4xl text-white"
            >
              Ph.D. Student | Computer Vision & Machine Learning
              University of Southern California | Institute for Creative Technologies 
            </motion.p>

            <motion.p
              initial={{ opacity: 1 }}
              animate={{ opacity: Math.max(1 - scrollY / 300, 0) }}
              className="text-4xl text-white"
            >
            <div className="flex space-x-8 mt-6 items-center">
              <a href="https://scholar.google.com/citations?user=RbgbUyoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-300">
                <Globe size={40} />
                <span className="ml-2 text-2xl">Google Scholar</span>
              </a>
              <a href="https://www.linkedin.com/in/yue-hu-64561b253/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-300">
                <Linkedin size={40} />
                <span className="ml-2 text-2xl">LinkedIn</span>
              </a>
              <a href="https://github.com/ERGOWHO" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-300">
                <Github size={40} />
                <span className="ml-2 text-2xl">GitHub</span>
              </a>
              <a href="mailto:yhu57782@usc.edu" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-300">
                <FileText size={40} />
                <span className="ml-2 text-2xl">Email</span>
              </a>
              <a href="/assets/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-300">
                <FileText size={40} />
                <span className="ml-2 text-2xl">Download CV</span>
              </a>
            </div>
            </motion.p>
            
          </div>
        </div>

        {/* About Section (Enhanced) */}
        <Element name="about" className="px-12 py-24 bg-gray-800">
          <div className="flex space-x-12">
            {/* Left Column - Photos and Research Interests */}
            <div className="w-1/4">
              <img src="/assets/photo.JPG" alt="Your Research Photo" className="w-full rounded-xl mb-6" />
              <h3 className="text-4xl font-bold mb-4">Research Interests</h3>
                <p className="mb-4">
                  I am a researcher specializing in:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>3D Vision & Geometry:</strong> 3D Gaussian Splatting, Point Cloud Rendering, NeRF, SLAM, SfM, Relighting.</li>
                  <li><strong>2D Object Detection and Synthetic Dataset:</strong> YOLO, DETR, Unreal Engine etc.</li>
                  <li><strong>Wireless Communication:</strong> Backscatter, LoRa IoT, FPGA, Embedded Systems.</li>
                </ul>
                <p>
                  Bridging computer vision and wireless communication for innovative solutions.
                </p>
            </div>
 
            {/* Right Column - Education & News Updates */}
            <div className="w-2/3 space-y-12">
              {/* Education Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <div className="space-y-4">
                  {["01/2021 to 05/2026 (Expected) - Ph.D. in Computer Engineering, USC (GPA 3.83/4.0)",
                    "01/2021 to 12/2023 - M.S. in Computer Engineering, USC (GPA 3.88/4.0)",
                    // "Ph.D. in Software Engineering (Transferred to USC), Northwest University - 09/2018 to 12/2020",
                    "09/2013 to 06/2017 - B.S. in Computer Science and Technology, Northwest University (Graduated with Honors)"
                  ].map((edu, index) => (
                    <Card key={index} className="bg-gray-700 shadow-md">
                      <CardContent>
                        <p className="text-gray-300">{edu}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* News & Updates Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">News & Updates</h3>
                <div className="space-y-3">
                  {[
                    "🎉 2025-03-24: Our paper on SplatMap: Online Dense Monocular SLAM with 3D Gaussian Splatting is accepted to 2025 ACM SIGGRAPH SYMPOSIUM ON INTERACTIVE 3D GRAPHICS AND GAMES(I3D 2025) with oral presentation.",
                    "🔥 2024-11-05: Our work FireLoc: Low-latency Multi-modal Wildfire Geolocation Presented at Sensys 2024, Hangzhou, China",
                    "🔥 2024-11-03: Our work Let’s Roll: Synthetic Dataset Analysis for Pedestrian Detection Across Different Shutter Types Presented at MIT The Engine, SiPS 2024, USA.",
                    "🎉 2024-09-16: Our paper FireLoc was accepted on Top Tier Conference for Embedded Networked Sensor Systems (SenSys 2024)",
                    "🎉 2024-09-10: Our paper AtomGS: Atomizing Gaussian Splatting for High-Fidelity Radiance Field accepted to BMVC 2024"
                  ].map((news, index) => (
                    <Card key={index} className="bg-gray-700">
                      <CardContent>
                        <p className="text-lg text-gray-300">{news}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Element>

        {/* Projects Section */}
        <Element name="projects" className="px-12 py-24 bg-gray-800">
          <h2 className="text-4xl font-bold mb-6">Selected Projects</h2>
          <div className="space-y-6">
            {["SLAM & 3D Gaussian Splatting"].map((projectTitle, index) => (
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
            {["SOL-2DGS: Outdoor Scene Relighting under Dynamic Lighting Conditions with Differentiable Ray Tracer and Sunlight Modeling"].map((projectTitle, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <a href={`/projects/${projectTitle.replace(/\s+/g, '-').toLowerCase()}`} className="block">
                  <div className="flex p-6 mb-6 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg cursor-pointer">
                    <div className="w-1/3 mr-6">
                      <img src="/assets/2drelight.png" alt="Project Demo" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{projectTitle}</h3>
                      <p className="text-gray-300 mt-2">Click to see project details and video demonstrations.</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
             {["AtomGS"].map((projectTitle, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <a href={`/projects/${projectTitle.replace(/\s+/g, '-').toLowerCase()}`} className="block">
                  <div className="flex p-6 mb-6 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg cursor-pointer">
                    <div className="w-1/4 mr-6">
                      <img src="/assets/atomgs.gif" alt="Project Demo" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{projectTitle}</h3>
                      <p className="text-gray-300 mt-2">Click to see project details and video demonstrations.</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
            {["Let's Roll"].map((projectTitle, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <a href={`/projects/${projectTitle.replace(/\s+/g, '-').toLowerCase()}`} className="block">
                  <div className="flex p-6 mb-6 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg cursor-pointer">
                    <div className="w-1/6 mr-6">
                      <img src="/assets/letsroll.gif" alt="Project Demo" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{projectTitle}</h3>
                      <p className="text-gray-300 mt-2">Click to see project details and video demonstrations.</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
            {["FireLoc2.0: Few-Shot 3D Scene Refinement and Vegetation-Based Fuel Segmentation for Wildfire Mapping"].map((projectTitle, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <a href={`/projects/${projectTitle.replace(/\s+/g, '-').toLowerCase()}`} className="block">
                  <div className="flex p-6 mb-6 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg cursor-pointer">
                    <div className="w-1/6 mr-6">
                      <img src="/assets/fireloc.gif" alt="Project Demo" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{projectTitle}</h3>
                      <p className="text-gray-300 mt-2">Click to see project details and video demonstrations.</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
            {["FireFly"].map((projectTitle, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <a href={`/projects/${projectTitle.replace(/\s+/g, '-').toLowerCase()}`} className="block">
                  <div className="flex p-6 mb-6 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg cursor-pointer">
                    <div className="w-1/6 mr-6">
                      <img src="/assets/firefly.jpg" alt="Project Demo" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{projectTitle}</h3>
                      <p className="text-gray-300 mt-2">Click to see project details and video demonstrations.</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
            {["Passive Long-Distance Low-Power Communication System"].map((projectTitle, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <a href={`/projects/${projectTitle.replace(/\s+/g, '-').toLowerCase()}`} className="block">
                  <div className="flex p-6 mb-6 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg cursor-pointer">
                    <div className="w-1/6 mr-6">
                      <img src="/assets/plora.gif" alt="Project Demo" className="w-full h-full object-cover rounded-lg" />
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

        {/* Publications Section */}
        <Element name="publications" className="px-12 py-24 bg-gray-800">
          <h2 className="text-4xl font-bold mb-6">Selected Publications</h2>
          <div className="space-y-6">
            {[{
              title: "SplatMap: Online Dense Monocular SLAM with 3D Gaussian Splatting",
              authors: "Hu, Y., Rong, L., Meida, c., et al.",
              conference: "2025 ACM SIGGRAPH SYMPOSIUM ON INTERACTIVE 3D GRAPHICS AND GAMES( I3D 2025)",
              links: { paper: "https://example.com/paper1", project: "https://example.com/project1" }
            }, {
              title: "Let’s Roll: Synthetic Dataset Analysis for Pedestrian Detection Across Different Shutter Types",
              authors: "Hu, Y., Datta, G., Beerel, K., et al.",
              conference: "SiPS 2024, MIT, USA.",
              links: { paper: "https://example.com/paper2", project: "https://example.com/project2", News: "https://example.com/news1" }
            }, {
              title: "AtomGS: Atomizing Gaussian Splatting for High-Fidelity Radiance Field",
              authors: "Liu, R., Xu, R., Hu, Y., et al.",
              conference: "BMVC 2024, Glasgow, UK.",
              links: { paper: "https://example.com/paper2", project: "https://example.com/project2", News: "https://example.com/news1" }
            }, {
              title: "FireFly: A Synthetic Dataset for Ember Detection in Wildfire",
              authors: "Hu, Y., Ye, X., Liu, Y., et al.",
              conference: "The 5th Workshop on AI for Humanitarian Assistance and Disaster Response, ICCV 2023, Paris, France.",
              links: { paper: "https://example.com/paper2", project: "https://example.com/project2", News: "https://example.com/news1" }
            }, {
              title: "FireLoc: Low-latency Multi-modal Wildfire Geolocation",
              authors: "Fu, X., Hu, Y., Sutrave, P., et al.",
              conference: "The 22nd ACM Conference on Embedded Networked Sensor Systems ( SenSys 2024), Hangzhou, China.",
              links: { paper: "https://example.com/paper2", project: "https://example.com/project2", News: "https://example.com/news1" }
            }, {
              title: "PLoRa: A Passive Long-Range Data Network from Ambient LoRa Transmissions",
              authors: "Peng, Y., Shangguan, L., Hu, Y., et al.",
              conference: "SIGCOMM 2018, Budapest, Hungary. (First student author)",
              links: { paper: "https://example.com/paper2", project: "https://example.com/project2", News: "https://example.com/news1" }
            }, {
              title: "EasyGo: Low-cost and Robust Geographic Opportunistic Sensing Routing in a Strip Topology Wireless Sensor Network",
              authors: "Liu, C., Fang, D., Hu, Y., et al.",
              conference: "Computer Networks, Volume 143, 9 October 2018, Pages 191-205.",
              links: { paper: "https://example.com/paper2", project: "https://example.com/project2", News: "https://example.com/news1" }
            }, {
              title: "LiReT: A Fine-Grained Self-Adaption Device-Free Localization with Little Human Effort",
              authors: "He, J., Hu, Y., Liu, X., et al..",
              conference: "IEEE International Conference on Smart Computing (SmartComp)",
              links: { paper: "https://example.com/paper2", project: "https://example.com/project2", News: "https://example.com/news1" }
            }, {
              title: "A Lightweight Robust Routing in Strip Wireless Sensor Network with Edge Detect Based Region Divided",
              authors: "Hu, Y., Liu, C., Xu, D., et al.",
              conference: "the 14th Annual International Conference on Mobile Systems, Applications, and Services Companion.(MobiSys 2016), Singapore",
              links: { paper: "https://example.com/paper2", project: "https://example.com/project2", News: "https://example.com/news1" }
            }, {
              title: "LSVS: Bringing Layer Slicing and Virtual Sinks to Geographic Opportunistic Routing in Strip WSNs",
              authors: "Liu, C., Fang, D., Chen, X., Hu, Y., et al.",
              conference: "IEEE Fifth International Conference on Big Data and Cloud Computing",
              links: { paper: "https://example.com/paper2", project: "https://example.com/project2", News: "https://example.com/news1" }
            }].map((pub, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="bg-gray-700 shadow-md">
                  <CardContent>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {index + 1}. <a href={pub.links.paper} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                    </h3>
                    <p className="text-gray-300 mb-1">Authors: {pub.authors}</p>
                    <p className="text-gray-300 mb-2">
                      Published at: <a href={pub.links.project} target="_blank" rel="noopener noreferrer" className="text-blue-400">{pub.conference}</a>
                    </p>
                    <div className="flex space-x-4">
                      <Button as="a" href={pub.links.paper} target="_blank">Paper</Button>
                      <Button as="a" href={pub.links.project} target="_blank">Project</Button>
                      <Button as="a" href={pub.links.news} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">News</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Element>

        {/* Experience Section */}
        <Element name="experience" className="px-12 py-24 bg-gray-800">
          <h2 className="text-4xl font-bold mb-6">Experience</h2>
          <div className="grid grid-cols-2 gap-12">
            {/* Work Section */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Work</h3>
              <div className="relative border-l-2 border-gray-500 pl-6">
                {[
                  { date: '2024 - Present', description: 'USC ICT Graduate Research Assistant' },
                  { date: '2025 5.19 - 8.22', description: 'Futurewei Co. Internship' },
                  { date: '2024 5.19 - 8.22', description: 'USC ICT Internship' },
                  { date: '2023', description: 'USC EE450: Introduction to Computer Networks' },
                  { date: '2021-2022', description: 'USC Research Assistant' }
                ].map((item, index) => (
                  <div key={index} className="mb-8">
                    <div className="absolute left-[-10px] top-2 w-4 h-4 bg-blue-400 rounded-full"></div>
                    <p className="text-xl font-bold">{item.date}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Section */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Service</h3>
              <div className="relative border-l-2 border-gray-500 pl-6">
                {[
                  { date: '2024', description: 'ACM SenSys 2024 - Program Committee' },
                  { date: '2025', description: 'SIGGRAPH 2025: Technical Papers Reviewer' },
                  { date: '2023', description: 'NeurIPS 2023: SyntheticDataGenAI Workshop Reviewer' },
                  { date: '2022', description: 'NeurIPS 2022: Workshop on Synthetic Data Reviewer' },
                  { date: '2022 - 2024', description: 'Mentorship: VSI, SURE, CURVE Fellowship' }
                ].map((item, index) => (
                  <div key={index} className="mb-8">
                    <div className="absolute left-[-10px] top-2 w-4 h-4 bg-blue-400 rounded-full"></div>
                    <p className="text-xl font-bold">{item.date}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Element> 

        {/* Awards Section */}
        <Element name="awards" className="px-12 py-24 bg-gray-800">
          <h2 className="text-4xl font-bold mb-6">Awards</h2>
          <ul className="list-disc ml-8 text-gray-300">
            <li>SiPS2024 Students and Young Professionals Funding</li>
            <li>Travel Grant for PhD Students and Postdoctoral Scholars (2024 - 2025)</li>
            <li>First-class University Scholarship (Top 10%) - Northwest University (2013 - 2018)</li>
            <li>Outstanding Graduates Award - Northwest University (2017)</li>
            <li>Excellent Student Source Scholarship (3/190), Northwest University</li>
            <li>Interdisciplinary Contest in Modeling Honorable Mention ( Top 15.35%)</li>
            <li>TI Cup National Undergraduate Electronics Design Contest Provincial Second Prize (twice)</li>
            <li>Mathematical Contest in Modeling Meritorious Winner ( Top 7.09%)</li>
          </ul>
        </Element>

        {/* Skills Section */}
        <Element name="skills" className="px-12 py-24 bg-gray-800">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>
          <ul className="list-disc ml-8 text-gray-300">
            <li>Frameworks & Tools: PyTorch, MMdetection, NeRFstudio, Unreal Engine, Unix/Linux, GNU Radio</li>
            <li>Vision Models: 3DGS, NeRF, DUST3R, MaSt3R, SLAM, YOLOv7, YOLOv8, DETR</li>
            <li>Programming Languages: Python, Verilog, C++, C, MATLAB, Git, JS, SQL, Postgre, LaTeX</li>
          </ul>
        </Element>
      </div>
    </div>
  );
};

export default PersonalHomepage;
