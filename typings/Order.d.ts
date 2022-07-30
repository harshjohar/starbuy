export interface Order {
    id: string,
    amount: number,
    amountShipping: string,
    images: string[],
    items: any[],
    timestamp: number,
}