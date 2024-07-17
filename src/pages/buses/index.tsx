import React, { useState } from 'react'
import {
  Dialog,
  Disclosure,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import Layout from '@theme/Layout'
import BusList from "./buslist.json";

const filters = [
  {
    id: 'type',
    name: 'Bus Type',
    options: [
      { value: 'type-a', label: 'Type A', checked: false },
      { value: 'type-b', label: 'Type B', checked: false },
      { value: 'type-c', label: 'Type C', checked: false },
      { value: 'type-d', label: 'Type D', checked: false },
    ],
  },
  {
    id: 'chassis',
    name: 'Hux Chassis',
    options: [
      { value: 'hux-i', label: 'Hux I Chassis', checked: false },
      { value: 'hux-ii', label: 'Hux II Chassis', checked: false },
      { value: 'hux-iii', label: 'Hux III Chassis', checked: false },
      { value: 'hux-iv', label: 'Hux IV Chassis', checked: false },
      { value: 'hux-v', label: 'Hux V Chassis', checked: false },
    ],
  },
  {
    id: 'price-category',
    name: 'Price Category',
    options: [
      { value: 'low', label: 'R$3500 OR $13 USD', checked: false },
      { value: 'high', label: 'R$5500 OR $19 USD', checked: false },
    ],
  },
]

export default function Buses() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <Layout
      title={`Buses`}
      description="Huxley Sales Official Site">
      <div className="bg-white dark:bg-[#1b1b1d]">
        <div>
          {/* Mobile filter dialog */}
          <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
            <Dialog.Backdrop
              className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 z-40 flex">
              <Dialog.Panel
                className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-autopy-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
              >
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">

                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                      <h3 className="-mx-2 -my-3 flow-root">
                        <Disclosure.Button className="group flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900 dark:text-gray-100">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                            <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-6">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </div>
          </Dialog>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Huxley Buses</h1>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-2">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="group flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900 dark:text-gray-100">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                            <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-200">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </Disclosure>
                  ))}
                </form>

                <div className="lg:col-span-3">
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                    {BusList.map(bus => (
                      <a key={bus.id} className="flex flex-col justify-center aspect-video drop-shadow-md min-h-[8rem] rounded-md border-4 border-zinc-900 cols-" href={`/buses/${bus.id}`} target="_blank" style={{ "textDecoration": "none" }}>
                        <img src={`/img/buses/${bus.id}/pic1.png`} className="h-full w-full absolute overflow-clip left-0 right-0 mx-auto rounded-md" />
                        <div className="z-10 flex flex-col rounded-md justify-end bg-gradient-to-t from-cyan-500 via-transparent to-transparent w-full h-full">
                          <span className="w-[100%] p-2 text-3xl font-black dark:text-gray-50 text-gray-950 text-center">{bus.name}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  )
}