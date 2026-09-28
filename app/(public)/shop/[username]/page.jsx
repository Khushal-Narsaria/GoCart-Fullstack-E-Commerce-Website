import { dummyStoreData, productDummyData } from "@/assets/assets";
import StoreShopClient from "./StoreShopClient";

// Pre-render every store page for the static (GitHub Pages) build.
export function generateStaticParams() {
    const usernames = new Set([dummyStoreData.username, ...productDummyData.map((p) => p.store?.username)]);
    return [...usernames].filter(Boolean).map((username) => ({ username }));
}

export default function StoreShop() {
    return <StoreShopClient />;
}
