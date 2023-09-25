export const DRILLS: string = "دریل";
export const ANGLE_GRINDER: string = "فرز";

export const CATEGORIES : (string)[] = [DRILLS, ANGLE_GRINDER];

export const PRODUCTS = [
    {
        id:1,
        image:"https://danlextools.com/fa/wp-content/uploads/2022/08/dx-1171_dx-1172_dx-1185_cover-300x300.jpg",
        title:"دریل چکشی ۸۰۰ وات",
        power:"۸۰۰ وات",
        category: DRILLS
    },
    {
        id:2,
        image:"https://danlextools.com/fa/wp-content/uploads/2022/08/dx-1171_dx-1172_dx-1185_cover-300x300.jpg",
        title:"دریل چکشی ۶۰۰ وات",
        power:"۶۰۰ وات",
        category: DRILLS

    }
]

export const DATABASE = {
    categories: CATEGORIES,
    products: PRODUCTS,
}