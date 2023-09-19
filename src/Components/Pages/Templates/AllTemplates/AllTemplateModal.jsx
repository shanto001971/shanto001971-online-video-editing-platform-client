import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import AllTemplateModalData from "./AllTemplateModalData";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

export default function AllTemplateModal({
  isOpen,
  setIsOpen,
  selectedData,
  selectedCategoryData
}) {
  function closeModal() {
    setIsOpen(false);
  }
  const { theme } = useTheme();

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`w-full max-w-sm sm:max-w-3xl md:max-w-[920px] transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${
                    theme.mode === "dark"
                      ? `bg-gray-900 text-white`
                      : "bg-white"
                  }`}>
                  <AllTemplateModalData
                    selectedData={selectedData}
                    closeModal={closeModal}
                    selectedCategoryData={selectedCategoryData}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
