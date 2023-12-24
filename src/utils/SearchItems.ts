import { digitsEnToFa } from "@persian-tools/persian-tools";
import { PRODUCTS } from "@/lib/data.ts";

const productsDetail: Array<{ id: number; title: string }> = PRODUCTS.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category
}));

export function SearchItems(inputValue: any) {
    return productsDetail.filter((item) => {
        const searchTerm = digitsEnToFa(inputValue.toLocaleLowerCase());
        const productTitle = digitsEnToFa(item.title.toLocaleLowerCase());
        return productTitle.includes(searchTerm);
    });
}