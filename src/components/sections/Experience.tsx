import { Button } from '@/components/ui/Button';
import {
  BriefcaseIcon,
  DocumentArrowDownIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Qualifications from './Qualifications';

// Removed unused highlights variable
export default function Experience() {
  const handleDownloadCV = () => {
    const cvPath = '/documents/Onyedikachi_Ejim_CV.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Onyedikachi_Ejim_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section
        id="experience"
        className="py-16 bg-gray-50/50 dark:bg-gray-900/50"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold sm:text-3xl text-gray-900 dark:text-white">
                Professional Journey
              </h2>
              <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300">
                My growth from technical training to leading teams and building
                impactful solutions.
              </p>
            </div>

            {/* Professional Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 space-y-6"
              >
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="w-6 h-6 text-primary-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Contronika Technologies
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      2019 - 2022
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  Worked as a technical specialist, focusing on electronics
                  design, embedded systems programming, IoT, and technical
                  development projects at a leading institute.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 space-y-6"
              >
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="w-6 h-6 text-primary-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Owatt Energy
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      2022 - 2024
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  IoT & Embedded Systems Engineer, building smart systems for
                  energy metering and monitoring using IoT and embedded
                  technologies.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 space-y-6"
              >
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="w-6 h-6 text-primary-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      VouchPay
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      2024 - 2025
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  Team Lead, building the next-generation credit system in
                  Africa, leading development and delivery of innovative
                  financial solutions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 space-y-6"
              >
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="w-6 h-6 text-primary-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Wancemo
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      2023 - 2025
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  Backend Engineer, building Africa's first waste management and
                  insight generation system, delivering technical solutions for
                  environmental impact.
                </p>
              </motion.div>
            </div>

            {/* CV Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <Button size="lg" onClick={handleDownloadCV} className="group">
                <DocumentArrowDownIcon className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                Download Detailed CV
              </Button>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Access my comprehensive professional portfolio and
                qualifications
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Qualifications />
    </>
  );
}
