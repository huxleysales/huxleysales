import BusStorePage, { BusStorePageProps } from "@site/src/components/busStorePage";
import Layout from "@theme/Layout";
import BusList from "./buslist.json";

const bus = BusList.find(bus => bus.id === "icre") as BusStorePageProps["bus"]

export default function BusPage() {
    return (
        <Layout
            title={bus.name}
            description={bus.description}>
            <BusStorePage bus={bus} />
        </Layout>)
}