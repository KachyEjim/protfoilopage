import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/ui/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/kachyejim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ejimvincent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/ejimvincent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Onyedikachi Ejim. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
