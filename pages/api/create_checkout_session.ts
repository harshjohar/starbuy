const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../typings/Product";
type Data = {
    id: string;
};

export default async function (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { items, email } = req.body;

    const transformedItems = items.map((item: Product) => ({
        price_data: {
            currency: "INR",
            product_data: {
                name: item.title.slice(0, 20),
                images: [item.image],
            },
            unit_amount: Math.floor(item.price * 75) * 100,
        },
        description: item.description.slice(0, 20),
        quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        shipping_rates: ["shr_1LRLv1SIjcsdInGJti6kNrFE"],
        shipping_address_collection: {
            allowed_countries: ["IN", "US", "CA"],
        },
        metadata: {
            email,
            images: JSON.stringify(items.map((item: Product) => item.image)),
        },
    });

    res.status(200).json({ id: session.id });
}
