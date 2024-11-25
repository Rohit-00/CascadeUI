import { motion } from 'framer-motion';
import { CodeSnippet } from './codeSnippet';

interface CardProps {
  language: string;
  code: string;
  isActive: boolean;
}

export const Card: React.FC<CardProps> = ({ language, code, isActive }) => {
  return (
    <motion.div
      className="absolute sm:w-[800px] w-72 self-center h-96 sm:left-0 left-10 sm:h-[400px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      initial={{ scale: 0.8, y: 20, opacity: 0 }}
      animate={isActive ? { scale: 1, y: 0, opacity: 1 } : { scale: 0.8, y: 20, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-8 bg-gray-200 dark:bg-gray-700 flex items-center px-4">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-4 text-sm text-gray-600 dark:text-gray-300">{language} Snippet</span>
      </div>
      <div className="h-[calc(100%-2rem)] p-4">
        <CodeSnippet language={language} code={code} />
      </div>
    </motion.div>
  );
};

