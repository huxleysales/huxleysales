import React, { Suspense, useEffect, useState } from 'react';
import RobuxIcon from "../../static/img/robux.svg";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import axios from "axios"

function Fallback(): JSX.Element {
    return (
        <h1 className="text-5xl text-center pb-4">Loading...</h1>
    )
}

type Product = {
    category: string;
    decalID: string;
    decalUrl: string;
    description: string;
    devproduct_id: string;
    price: string;
    instructions: string;
    name: string;
    packables: string;
    productID: string;
    role_id: string;
    stock: false | number;
    tags: string[]
}

type HubInfo = {
    hubId: string;
    products: Product[]
}

export default function Products(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    const [loaded, setLoaded] = useState<boolean>(false);
    const [data, setData] = useState<HubInfo>(null);

    useEffect(() => {
        axios("https://api.parcelroblox.com/api/hub/getproducts", {
            headers: {
                "hub-secret-key": siteConfig.customFields.hubSecret as string
            }
        }).then(async res => {
            const newProducts: Product[] = []

            res.data.details.products.forEach(async (product: Product, index: number) => {
                const gottenPrice = await axios(`https://hux.fisherdev.workers.dev/price?id=${product.devproduct_id}`)
                product.price = gottenPrice.data.price

                if (product.decalID != "9690630240") {
                    const gottenImage = await axios(`https://hux.fisherdev.workers.dev/image?id=${product.decalID}`)
                    product.decalUrl = gottenImage.data.image
                } else {
                    product.decalUrl = "/img/huxleysales.png"
                }

                newProducts.push(product)

                if (res.data.details.products.length === newProducts.length) {
                    setData({
                        hubId: res.data.details.hubId,
                        products: newProducts
                    })
                    setLoaded(true)
                }
            })
        })
    }, [])

    return (
        <Layout>
            {loaded && <div>
                <h1 className="text-5xl text-center">Products</h1>
                <div className="px-8 py-3 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data.products.map((product) => (
                        <a className="flex flex-col justify-center aspect-video drop-shadow-md min-h-[8rem] rounded-md border-4 border-zinc-900" href={`https://www.roblox.com/games/start?placeId=11746877837&launchData=${product.productID}`} target="_blank" style={{ "textDecoration": "none" }}>
                            <img src={product.decalUrl} className="h-full absolute overflow-clip left-0 right-0 mx-auto rounded-md" />
                            <div className="z-10 flex flex-col rounded-md justify-end bg-gradient-to-t from-cyan-500 to-transparent w-full h-full">
                                <span className="w-[100%] p-2 text-3xl font-black dark:text-gray-50 text-gray-950 text-center">{product.name}</span>
                                <span className="mb-2 py-1 mx-8 md:mx-36 lg:mx-40 xl:mx-36 2xl:mx-56 bg-gray-50 dark:bg-gray-950 rounded-md ring-4 ring-green-500 text-2xl font-semibold text-center flex justify-center gap-x-2"><span className="font-bold "><RobuxIcon className='h-8 w-8' /></span>{product.price}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>}
            {!loaded && <Fallback />}
        </Layout>
    );
}
