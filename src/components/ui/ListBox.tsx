import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckCheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { IList } from "../../interface/interfaces";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// ...


export default function SelectList() {
  const { setValue } = useFormContext();
  const lists = useSelector((state: RootState) => state.lists);
  const [selected, setSelected] = useState<IList>(lists[2]); // Assuming you have an initial selected value
  // console.log(selected);
  const handleSelect = (value:IList) => {
    setSelected(value);
    setValue('list', value ? value : null); // Set the 'list' field with the id property of the selected item
  };
  return (
    <Listbox value={selected} onChange={handleSelect}
    >
      {({ open }) => (
        <>
         
          <div className="relative ms-2 p-1 w-full  mt-2">
            <Listbox.Button
              onClick={()=>setValue('list',selected)}
              className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            >
              <span className="flex items-center">
                <div
                  className={`h-5 w-5 flex-shrink-0 rounded-md ${selected ? `bg-${selected.color} ${selected.color}` : ''}`}
                ></div>
                <span className="ml-3 block truncate">{selected?.type}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronsUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {lists.map((list) => (
                  <Listbox.Option
                    key={list.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={list}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <div
                            className={`h-5 w-5 flex-shrink-0 rounded-md  ${list.color} bg-${list.color} `}
                          ></div>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {list.type}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckCheckIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
