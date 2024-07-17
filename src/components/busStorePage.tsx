import { StarIcon } from '@heroicons/react/20/solid';
import RobuxIcon from "../../static/img/robux.svg";

export interface BusStorePageProps {
    bus: {
        name: string;
        id: string;
        description: string;
        type: "type-a" | "type-b" | "type-c" | "type-d";
        chassis: "hux-i" | "hux-ii" | "hux-iii" | "hux-iv" | "hux-v";
        "price-category": "low" | "high";
        sales: number;
        released: string;
    }
}

export default function BusStorePage({ bus }: BusStorePageProps) {
    return (
        <div className="bg-white dark:bg-[#1b1b1d]">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li key={1}>
                            <div className="flex items-center">
                                <span className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-200">
                                    {bus.chassis.toUpperCase()}
                                </span>
                                <svg
                                    fill="currentColor"
                                    width={16}
                                    height={20}
                                    viewBox="0 0 16 20"
                                    aria-hidden="true"
                                    className="h-5 w-4 text-gray-300"
                                >
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li key={2}>
                            <div className="flex items-center">
                                <span className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-200">
                                    {bus.type.toUpperCase()}
                                </span>
                                <svg
                                    fill="currentColor"
                                    width={16}
                                    height={20}
                                    viewBox="0 0 16 20"
                                    aria-hidden="true"
                                    className="h-5 w-4 text-gray-300"
                                >
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li className="text-sm">
                            <span aria-current="page" className="font-medium text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400">
                                {bus.name}
                            </span>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img
                            alt="Picture 1"
                            src={`/img/buses/${bus.id}/pic1.png`}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                alt="Picture 2"
                                src={`/img/buses/${bus.id}/pic2.png`}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                alt="Picture 3"
                                src={`/img/buses/${bus.id}/pic3.png`}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                alt="Picture 4"
                                src={`/img/buses/${bus.id}/pic4.png`}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                alt="Picture 5"
                                src={`/img/buses/${bus.id}/pic5.png`}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-3xl">{bus.name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Bus information</h2>
                        <span className="text-3xl tracking-tight text-gray-900 dark:text-gray-200 flex justify-left gap-x-2 items-center"><RobuxIcon className='h-6 w-6' />{bus['price-category'] === "high" ? "5500 / $19" : "3500 / $13"}</span>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <StarIcon
                                        aria-hidden="true"
                                        className="text-gray-900 dark:text-gray-200 h-5 w-5 flex-shrink-0"
                                    />
                                    <StarIcon
                                        aria-hidden="true"
                                        className="text-gray-900 dark:text-gray-200 h-5 w-5 flex-shrink-0"
                                    />
                                    <StarIcon
                                        aria-hidden="true"
                                        className="text-gray-900 dark:text-gray-200 h-5 w-5 flex-shrink-0"
                                    />
                                    <StarIcon
                                        aria-hidden="true"
                                        className="text-gray-900 dark:text-gray-200 h-5 w-5 flex-shrink-0"
                                    />
                                    <StarIcon
                                        aria-hidden="true"
                                        className="text-gray-900 dark:text-gray-200 h-5 w-5 flex-shrink-0"
                                    />
                                </div>
                                <p className="sr-only">5 out of 5 stars</p>
                                <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {bus.sales} Sales
                                </span>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a
                                href="https://discord.gg/yHH2cynGzD"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Want to purchase? Join our official discord server.
                            </a>
                        </div>
                    </div>



                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900 dark:text-gray-200">{bus.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200">Variants</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    <li className="text-gray-400">
                                        {/* TODO: Variants */}
                                        <span className="text-gray-600 dark:text-gray-400">No Variants</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}