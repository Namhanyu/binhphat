import clsx from "clsx";
import { getLangFromUrl, useTranslations } from "../../i18n/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const pathname = new URL(window.location.href);
  const lang = getLangFromUrl(pathname);
  const t = useTranslations(lang);
  const [showForm, setShowForm] = useState(false);

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
          <motion.form
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: 1000 }}
            exit={{ maxHeight: 0 }}
            className="grid gap-1 3xl:gap-[0.25vw] overflow-hidden"
          >
            <div>
              <input
                type="text"
                placeholder={t("contact.form.name")}
                className="input"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder={t("contact.form.phone")}
                className="input"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder={t("contact.form.email")}
                className="input"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder={t("contact.form.address")}
                className="input"
              />
            </div>

            <div>
              <textarea
                placeholder={t("contact.form.message")}
                rows={5}
                className="input resize-none !h-auto"
              ></textarea>
            </div>

            <ActionButton className="w-full bg-primary text-white !border-primary">
              {t("contact.form.submit")}
            </ActionButton>
          </motion.form>
        )}
      </AnimatePresence>
    </>
  );
}

const ActionButton = ({
  className = "",
  children,
}: React.PropsWithChildren<{ className: string }>) => (
  <button
    className={clsx(
      "h-10 px-4 border-2 border-current uppercase font-semibold flex gap-6 items-center whitespace-nowrap",
      "3xl:h-[2.5vw] 3xl:px-[1vw] 3xl:gap-[1.5vw]",
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
