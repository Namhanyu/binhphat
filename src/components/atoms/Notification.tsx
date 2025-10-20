import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

interface NotificationProps {
  type: 'success' | 'error';
  message: string;
  isVisible: boolean;
  onClose?: () => void;
}

export default function Notification({ type, message, isVisible, onClose }: NotificationProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={clsx(
            "mb-3 p-3 rounded border flex items-center justify-between",
            {
              "bg-green-50 border-green-300 text-green-800": type === 'success',
              "bg-red-50 border-red-300 text-red-800": type === 'error'
            }
          )}
        >
          <div className="flex items-center gap-2">
            {type === 'success' ? (
              <CheckIcon className="w-5 h-5 text-green-600" />
            ) : (
              <ExclamationIcon className="w-5 h-5 text-red-600" />
            )}
            <span className="text-sm font-medium">{message}</span>
          </div>
          
          {onClose && (
            <button
              onClick={onClose}
              title="Đóng thông báo"
              className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ExclamationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);