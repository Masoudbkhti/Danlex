export const DRILLS: string = "دریل";
export const ANGLE_GRINDER: string = "فرز";

export const CATEGORIES : (string)[] = [DRILLS, ANGLE_GRINDER];

export const PRODUCTS = [
    {
        id:1,
        title:"دریل چکشی ۸۰۰ وات",
        power:"۸۰۰ وات",
        category: DRILLS
    },
    {
        id:2,
        title:"دریل چکشی ۶۰۰ وات",
        power:"۶۰۰ وات",
        category: DRILLS

    }
]

export const DATABASE = {
    categories: CATEGORIES,
    products: PRODUCTS,
}