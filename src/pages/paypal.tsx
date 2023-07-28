import React from 'react';
import Layout from '@theme/Layout';

export default function Paypal(): JSX.Element {
  return (
    <Layout>
        <div>
            <h1 className="text-5xl text-center">Paypal</h1>
            <div className="mx-80 my-12 mb-52 flex">
                <a className="justify-center mx-10 drop-shadow-md w-full h-24" href="https://paypal.me/huxpay" target="_blank" style={{"textDecoration": "none"}}>
                    <div className="z-10 flex flex-col rounded-md justify-center bg-gradient-to-b from-cyan-500 to-indigo-500 w-full h-full ring-">
                        <span className="w-full p-2 text-6xl font-black dark:text-gray-50 text-gray-950 text-center">Nick's Paypal</span>
                    </div>
                </a>
                <a className="justify-center mx-10 drop-shadow-md w-full h-auto" href="https://paypal.me/HuxleySales" target="_blank" style={{"textDecoration": "none"}}>
                    <div className="z-10 flex flex-col rounded-md justify-center bg-gradient-to-b from-cyan-500 to-indigo-500 w-full h-full ring-">
                        <span className="w-full p-2 text-6xl font-black dark:text-gray-50 text-gray-950 text-center">Lad's Paypal</span>
                    </div>
                </a>
            </div>
        </div>
    </Layout>
  );
}
