import { Dialog, Transition } from "@headlessui/react";
import { ReactNode } from "react";
import {  Fragment } from "react";
import { useNavigate   } from "react-router-dom";
interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children : ReactNode
  title?:string;
}


export default function Modal({ isOpen, setIsOpen ,title ,children}: IProps) {
  const navigate = useNavigate()
  function closeModal() {
    setIsOpen(false);
    navigate('/stickyWall')
  }

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
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          {/* <div className="fixed inset-0 bg-black/5" aria-hidden="true" /> */}
          <div className="fixed  inset-0 overflow-y-auto">
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#ebebeb] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    {title ? title :'Add sticky wall'}
                  </Dialog.Title>
                  <div className="mt-2 text-gray-500">
                    
                    {children}
                  </div>

                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
