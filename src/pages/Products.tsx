import React, { Suspense, useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
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
  const {siteConfig} = useDocusaurusContext();

  const [firstData, setFirstData] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState<HubInfo>(null);

  useEffect(() => {
    axios("https://api.parcelroblox.com/api/hub/getproducts", {
        headers: {
            "hub-secret-key": siteConfig.customFields.hubSecret as string
        }
    }).then(res => {
        setData(res.data.details)
        setFirstData(true)
    })
  }, [])

  useEffect(() => {
    if(!firstData) return
        const newProducts: Product[] = []
        
        data.products.forEach((product) => {
            axios(`https://economy.roblox.com/v2/developer-products/${product.devproduct_id}/details`, {
                
            }).then(res => product.price = res.data.PriceInRobux, (error) => {
                product.price = "BUY"
                console.log(error)
            })

            axios(`https://thumbnails.roblox.com/v1/assets?assetIds=${product.decalID}&returnPolicy=PlaceHolder&size=700x700&format=Png&isCircular=false`, {
                
            }).then(res => product.decalUrl = res.data.data[0].imageUrl)
            .catch((error) => {
                product.decalUrl = "/img/huxleysales.png"
            })

            console.log(product.decalUrl)

            newProducts.push(product)
        })

        setData({
            hubId: data.hubId,
            products: newProducts
        })
        setLoaded(true)
  }, [firstData])

  return (
    <Layout>
        {loaded && <div>
            <h1 className="text-5xl text-center">Products</h1>
            <div className="px-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.products.map((product) => (
                    <a className="flex flex-col justify-center rounded-md drop-shadow-md bg-gradient-to-t from-cyan-500 dark:to- min-h-[8rem]" href={`https://www.roblox.com/games/start?placeId=11746877837&launchData=${product.productID}`} target="_blank" style={{"textDecoration": "none"}}>
                        <img src={product.decalUrl}/>
                        <span>{product.decalUrl}</span>
                        <div className="z-10 flex flex-col justify-center">
                            <span className="w-[100%] p-2 text-3xl font-black dark:text-gray-50 text-gray-950 text-center">{product.name}</span>
                            <span className="mb-2 mx-8 md:mx-24 lg:mx-28 xl:mx-24 2xl:mx-40 bg-gray-50 dark:bg-gray-950 rounded-md ring-2 ring-green-500 text-2xl font-semibold text-green-500 text-center"><span className="font-bold">R$ </span>{product.price || "BUY"}</span>
                        </div>
                    </a>
                ))} 
            </div>
        </div>}
            {!loaded && <Fallback />}
    </Layout>
  );
}
