import { productDummyData } from "@/assets/assets";
import ProductClient from "./ProductClient";

// Pre-render every product page for the static (GitHub Pages) build.
export function generateStaticParams() {
    return productDummyData.map((product) => ({ productId: product.id }));
}

export default function Product() {
    return <ProductClient />;
}
