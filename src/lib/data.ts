

export const AKKUDRILLS: string = "دریل شارژی";

export const POWERDRILLS: string = "دریل برقی";

export const ANGLE_GRINDER: string = "فرز";

export const CATEGORIES : (string)[] = [POWERDRILLS, ANGLE_GRINDER, AKKUDRILLS];

export const PRODUCTS = [
    {
        id:1,
        image:"https://danlextools.com/fa/wp-content/uploads/2022/08/dx-1171_dx-1172_dx-1185_cover-300x300.jpg",
        title:"دریل چکشی ۸۰۰ وات",
        amper: "200 Amper",
        power:"۸۰۰ وات",
        category: POWERDRILLS,
        specifics: {
            title: "نام محصول",
            amper: "آمپر",
            power: "توان"
        }
    },
    {
        id:2,
        image:"https://danlextools.com/fa/wp-content/uploads/2022/08/dx-1171_dx-1172_dx-1185_cover-300x300.jpg",
        title:"دریل گیربکسی چکشی ۶۰۰ وات",
        voltage: "220 V",
        power:"۶۰۰ وات",
        category: POWERDRILLS,
        specifics: {
            title: "نام محصول",
            voltage: "ولتاژ",
            power: "توان"
        }

    },
    {
        id:3,
        image:"https://danlextools.com/fa/wp-content/uploads/2022/08/dx-1171_dx-1172_dx-1185_cover-300x300.jpg",
        title:"دریل چکشی ۶۰۰ وات",
        voltage: "220 V",
        power:"۶۰۰ وات",
        category: POWERDRILLS,
        specifics: {
            title: "نام محصول",
            voltage: "ولتاژ",
            power: "توان"
        }

    },
    {
        id:4,
        image:"https://danlextools.com/fa/wp-content/uploads/2022/08/dx-1171_dx-1172_dx-1185_cover-300x300.jpg",
        title:"دریل تمسه ای چکشی ۶۰۰ وات",
        voltage: "220 V",
        power:"۶۰۰ وات",
        category: AKKUDRILLS,
        specifics: {
            title: "نام محصول",
            voltage: "ولتاژ",
            power: "توان"
        }
    },
    {
        id:5,
        image:"https://danlextools.com/fa/wp-content/uploads/2022/08/dx-1171_dx-1172_dx-1185_cover-300x300.jpg",
        title:"دریل تمسه ای چکشی ۶۰۰ وات",
        voltage: "220 V",
        power:"۶۰۰ وات",
        category: AKKUDRILLS,
        specifics: {
            title: "نام محصول",
            voltage: "ولتاژ",
            power: "توان"
        }
    },
    {
        id:6,
        image:"https://danlextools.com/fa/wp-content/uploads/2022/08/dx-1171_dx-1172_dx-1185_cover-300x300.jpg",
        title:"دریل تمسه ای چکشی ۶۰۰ وات",
        voltage: "220 V",
        power:"۶۰۰ وات",
        category: AKKUDRILLS,
        specifics: {
            title: "نام محصول",
            voltage: "ولتاژ",
            power: "توان"
        }
    },
    {
        id:7,
        image:"https://danlextools.com/fa/wp-content/uploads/2022/08/dx-1171_dx-1172_dx-1185_cover-300x300.jpg",
        title:"دریل چکشی ۸۰۰ وات",
        amper: "200 Amper",
        power:"۸۰۰ وات",
        category: AKKUDRILLS,
        specifics: {
            title: "نام محصول",
            amper: "آمپر",
            power: "توان",

        },
        garanty:"15 ماه گارانتی"
    },
]

export const DATABASE = {
    categories: CATEGORIES,
    products: PRODUCTS,
}