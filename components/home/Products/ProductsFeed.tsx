import React from "react";
import { Product } from "../../../typings/Product";
import ProductCard from "./Product";

function ProductsFeed({ products }: { products: [Product] | [] }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
            {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

            <div className="md:col-span-2">
                {products.slice(4, 5).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {products.slice(5, 11).map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

            <div className="md:col-span-2">
                {products.slice(11, 12).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {products.slice(12, products.length).map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsFeed;
