import { Button } from '@/components/ui/Button';
import { CalendarIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface ScheduleModalProps {
  onClose: () => void;
}

type FormData = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export default function ScheduleModal({ onClose }: ScheduleModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Format email content
    const emailSubject = `Project Discussion Request: ${data.projectType}`;
    const emailBody = `
Name: ${data.name}
Project Type: ${data.projectType}
Message: ${data.message}
    `.trim();

    // Open email client
    window.location.href = `mailto:ejimovc@gmail.com?subject=${encodeURIComponent(
      emailSubject,
    )}&body=${encodeURIComponent(emailBody)}`;
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Close modal"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          <div className="text-center">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-full w-fit mx-auto">
              <CalendarIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="mt-4 text-2xl font-semibold">Schedule a Call</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Tell me about your project
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="block text-sm font-medium mb-1"
              >
                Project Type
              </label>
              <select
                {...register('projectType', {
                  required: 'Please select a project type',
                })}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700"
              >
                <option value="">Select a project type</option>
                <option value="Full Stack Development">
                  Full Stack Development
                </option>
                <option value="Backend Development">Backend Development</option>
                <option value="System Architecture">System Architecture</option>
                <option value="Technical Consulting">
                  Technical Consulting
                </option>
              </select>
              {errors.projectType && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                {...register('message', {
                  required: 'Please provide some details about your project',
                })}
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Send Request
            </Button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
