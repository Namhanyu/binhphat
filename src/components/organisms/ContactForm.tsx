import clsx from "clsx";
import { getLangFromUrl, useTranslations } from "../../i18n/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import Notification from "../atoms/Notification";
import {
  ContactFormService,
  type ContactFormData,
} from "../../services/contactFormService";

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  successMessage: string;
}

export default function ContactForm() {
  const pathname = new URL(window.location.href);
  const lang = getLangFromUrl(pathname);
  const t = useTranslations(lang);
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
    successMessage: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formState.isSubmitting) return;

    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      address: (formData.get("address") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    setFormState({
      isSubmitting: true,
      isSuccess: false,
      error: null,
      successMessage: "",
    });

    try {
      const result = await ContactFormService.submitFormWithRetry(data);

      if (result.success) {
        setFormState({
          isSubmitting: false,
          isSuccess: true,
          error: null,
          successMessage: result.message,
        });

        // Reset form
        if (formRef.current) {
          formRef.current.reset();
        }

        // Auto hide success message after 5 seconds
        setTimeout(() => {
          setFormState((prev) => ({ ...prev, isSuccess: false }));
        }, 5000);
      } else {
        setFormState({
          isSubmitting: false,
          isSuccess: false,
          error: result.message,
          successMessage: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: "Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.",
        successMessage: "",
      });
    }
  };

  return (
    <>
      <h3
        className={clsx(
          "h-10 px-4 border-2 border-current uppercase font-semibold flex gap-6 items-center whitespace-nowrap",
          "3xl:h-[2.5vw] 3xl:px-[1vw] 3xl:gap-[1.5vw]",
          "mb-2 3xl:mb-[0.5vw]",
          "bg-primary text-white !border-primary cursor-pointer"
        )}
        onClick={() => setShowForm(!showForm)}
      >
        {t("contact.form.title")}
        <div className="w-px bg-current h-full ml-auto"></div>
        <ChevronRight
          className={clsx(
            "transition-all",
            showForm ? "-rotate-90" : "rotate-90"
          )}
        />
      </h3>

      <AnimatePresence mode="wait">
        {showForm && (
          <motion.div
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: 1000 }}
            exit={{ maxHeight: 0 }}
            className="overflow-hidden"
          >
            <Notification
              type="error"
              message={formState.error || ""}
              isVisible={!!formState.error}
              onClose={() => setFormState((prev) => ({ ...prev, error: null }))}
            />

            <Notification
              type="success"
              message={formState.successMessage}
              isVisible={formState.isSuccess}
              onClose={() =>
                setFormState((prev) => ({ ...prev, isSuccess: false }))
              }
            />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="grid gap-1 3xl:gap-[0.25vw]"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={`${t("contact.form.name")} *`}
                  className="input"
                  required
                  disabled={formState.isSubmitting}
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder={`${t("contact.form.phone")} *`}
                  className="input"
                  required
                  disabled={formState.isSubmitting}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={`${t("contact.form.email")} *`}
                  className="input"
                  required
                  disabled={formState.isSubmitting}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="address"
                  placeholder={t("contact.form.address")}
                  className="input"
                  disabled={formState.isSubmitting}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder={t("contact.form.message")}
                  rows={5}
                  className="input resize-none !h-auto"
                  disabled={formState.isSubmitting}
                ></textarea>
              </div>

              <ActionButton
                type="submit"
                className="w-full bg-primary text-white !border-primary"
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting
                  ? "Đang gửi..."
                  : t("contact.form.submit")}
              </ActionButton>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const ActionButton = ({
  className = "",
  type = "button",
  disabled = false,
  children,
}: React.PropsWithChildren<{
  className: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}>) => (
  <button
    type={type}
    disabled={disabled}
    className={clsx(
      "h-10 px-4 border-2 border-current uppercase font-semibold flex gap-6 items-center whitespace-nowrap",
      "3xl:h-[2.5vw] 3xl:px-[1vw] 3xl:gap-[1.5vw]",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      className
    )}
  >
    {children}
    <div className="w-px bg-current h-full ml-auto"></div>
    <ChevronRight className="3xl:h-[1.25vw] 3xl:w-auto" />
  </button>
);

const ChevronRight = ({ className = "" }) => (
  <svg
    width="12"
    height="21"
    viewBox="0 0 16 28"
    fill="none"
    className={className}
  >
    <path
      d="M1.5 1.5L14 14L1.5 26.5"
      stroke="currentColor"
      strokeWidth="2"
    ></path>
  </svg>
);
