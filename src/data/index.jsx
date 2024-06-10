// const youtbeApi = [
//     {
//         "id": 1,
//         "title": "Python Dasturlash Asoslari",
//         "description": "Ushbu kurs Python dasturlash tilining asoslarini o'rganishga bag'ishlangan.",
//         "soat": 10,
//         "image": "https://example.com/images/python.jpg"
//     },
//     {
//         "id": 2,
//         "title": "Web Dasturlash: HTML, CSS va JavaScript",
//         "description": "Bu kursda veb-dasturlashning asosiy texnologiyalari bo'lgan HTML, CSS va JavaScript ni o'rganamiz.",
//         "soat": 15,
//         "image": "https://example.com/images/web.jpg"
//     },
//     {
//         "id": 3,
//         "title": "Ma'lumotlar Bazasi: SQL Asoslari",
//         "description": "SQL yordamida m'umotlar bazasi bilan ishlashning asosiy tamoyillarini o'rganing.",
//         "soat": 8,
//         "image": "https://example.com/images/sql.jpg"
//     },
//     {
//         "id": 4,
//         "title": "Ma'lumotlar Tahlili: Pandas Kutubxonasi",
//         "description": "Pandas kutubxonasi yordamida m'umotlarni tahlil qilish va ishlov berish usullari bilan tanishing.",
//         "soat": 12,
//         "image": "https://example.com/images/pandas.jpg"
//     },
//     {
//         "id": 5,
//         "title": "Mashinasozlik Ustasi",
//         "description": "Mashinasozlikning asosiy tamoyillarini va amaliyotlarini o'rganish uchun ushbu kursni o'ting.",
//         "soat": 20,
//         "image": "https://example.com/images/machining.jpg"
//     },
//     {
//         "id": 6,
//         "title": "NLP: Natural Language Processing",
//         "description": "Natural Language Processing (NLP) so'zlashtirishni o'rganing va amaliyotni yaratishda ishlatishni o'rganing.",
//         "soat": 18,
//         "image": "https://example.com/images/nlp.jpg"
//     },
//     {
//         "id": 7,
//         "title": "Ish Reja Boshqaruvi: Agile metodologiyasi",
//         "description": "Agile metodologiyasi yordamida ish rejalarni boshqarishning eng yangi texnologiyalarini o'rganing.",
//         "soat": 14,
//         "image": "https://example.com/images/agile.jpg"
//     },
//     {
//         "id": 8,
//         "title": "Front-end Dizayn: UX/UI",
//         "description": "UX/UI dizaynning asoslarini o'rganing va eng yaxshi foydalanuvchi tajribasini ta'minlashni o'rganing.",
//         "soat": 16,
//         "image": "https://example.com/images/ux_ui.jpg"
//     },
//     {
//         "id": 9,
//         "title": "Texnologiya Sohalarida Marketing",
//         "description": "Texnologiya sohalarida marketing strategiyalarini yaratish va amaliyotlarni boshqarishni o'rganing.",
//         "soat": 10,
//         "image": "https://example.com/images/marketing.jpg"
//     },
//     {
//         "id": 10,
//         "title": "Kiber Xavfsizlik: Asosiy Tamoyillar",
//         "description": "Kiber xavfsizlik sohasida kerakli asosiy tamoyillarni va ko'nikmalarini o'rganing.",
//         "soat": 12,
//         "image": "https://example.com/images/cybersecurity.jpg"
//     },
//     {
//         "id": 11,
//         "title": "Data Science: Machine Learning",
//         "description": "Mashina o'rganishning asosiy algoritmlarini o'rganing va ma'lumotlar analizida ularni qo'llashni o'rganing.",
//         "soat": 20,
//         "image": "https://example.com/images/machine_learning.jpg"
//     },
//     {
//         "id": 12,
//         "title": "IoT Dasturlash: Internet of Things",
//         "description": "IoT (Internet of Things) dasturlash bilan qurilmalar orasidagi ulanish va ma'lumotlar almashinuvi asoslari o'rganing.",
//         "soat": 18,
//         "image": "https://example.com/images/iot.jpg"
//     },
//     {
//         "id": 13,
//         "title": "Blockchain Texnologiyasi: Asoslar",
//         "description": "Blockchain texnologiyasining asosiy tamoyillarini o'rganing va shaxsiy blockchain dasturlarni yaratishda ishlatishni o'rganing.",
//         "soat": 16,
//         "image": "https://example.com/images/blockchain.jpg"
//     },
//     {
//         "id": 14,
//         "title": "Yadro Python: Asoslar",
//         "description": "Python dasturlash tilining yadro asoslarini o'rganing va ilova dasturlarni yaratishda ularni qo'llashni o'rganing.",
//         "soat": 12,
//         "image": "https://example.com/images/python_core.jpg"
//     },
//     {
//         "id": 15,
//         "title": "Django Framework: Web Dasturlash",
//         "description": "Django framework yordamida web dasturlashning asosiy texnologiyalarini o'rganing va kompleks web ilovalarni yaratishni o'rganing.",
//         "soat": 22,
//         "image": "https://example.com/images/django.jpg"
//     },
//     {
//         "id": 16,
//         "title": "DevOps: Asoslar",
//         "description": "DevOps tamoyillarini o'rganing va dasturlarni yaratish, test qilish va ishlab chiqish jarayonlarini optimallashtirishni o'rganing.",
//         "soat": 24,
//         "image": "https://example.com/images/devops.jpg"
//     },
//     {
//         "id": 17,
//         "title": "Robototexnika: Asoslar",
//         "description": "Robototexnika sohasidagi asosiy qavmlarni o'rganing va robotlarni dasturlash va ishga tushirishni o'rganing.",
//         "soat": 20,
//         "image": "https://example.com/images/robotics.jpg"
//     },
//     {
//         "id": 18,
//         "title": "Virtual Realitiya (VR): Asoslar",
//         "description": "Virtual realitiya (VR) asoslarini o'rganing va VR dasturlarni yaratish va test qilishni o'rganing.",
//         "soat": 18,
//         "image": "https://example.com/images/vr.jpg"
//     },
//     {
//         "id": 19,
//         "title": "Big Data Analitikasi",
//         "description": "Katta miqdordagi ma'lumotlarni (Big Data) tahlil qilish va ma'lumotlardan foydalanib ishlov berish usullarini o'rganing.",
//         "soat": 22,
//         "image": "https://example.com/images/bigdata.jpg"
//     },
//     {
//         "id": 20,
//         "title": "Cloud Computing: Asoslar",
//         "description": "Bulutli hisoblashning asosiy tamoyillarini o'rganing va AWS, Azure yoki Google Cloud platformalarida ishlov berishni o'rganing.",
//         "soat": 20,
//         "image": "https://example.com/images/cloud.jpg"
//     }
// ]

let youtbeApi = [
    {
        id: 1,
        title: "Essence Mascara Lash Princess",
        price: 9.99,
        category: "beauty",
        images: [
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
        ]
    },
    {
        id: 2,
        title: "Eyeshadow Palette with Mirror",
        price: 19.99,
        category: "beauty",
        images: [
            "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
        ]
    },
    {
        id: 3,
        title: "Powder Canister",
        price: 14.99,
        category: "beauty",
        images: ["https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"]
    },
    {
        id: 4,
        title: "Red Lipstick",
        price: 12.99,
        category: "beauty",
        images: ["https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"]
    },
    {
        id: 5,
        title: "Red Nail Polish",
        price: 8.99,
        category: "beauty",
        images: ["https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"]
    },
    {
        id: 6,
        title: "Calvin Klein CK One",
        price: 49.99,
        category: "fragrances",
        images: ["https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png"]
    },
    {
        id: 7,
        title: "Chanel Coco Noir Eau De",
        price: 129.99,
        category: "fragrances",
        images: ["https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png"]
    },
    {
        id: 8,
        title: "Dior J'adore",
        price: 89.99,
        category: "fragrances",
        images: ["https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png"]
    },
    {
        id: 9,
        title: "Dolce Shine Eau de",
        price: 69.99,
        category: "fragrances",
        images: ["https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png"]
    },
    {
        id: 10,
        title: "Gucci Bloom Eau de",
        price: 79.99,
        category: "fragrances",
        images: [
            "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
            "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
            "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"
        ]
    },
    {
        id: 11,
        title: "Annibale Colombo Bed",
        price: 1899.99,
        category: "furniture",
        images: [
            "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
            "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
            "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png"
        ]
    },
    {
        id: 12,
        title: "Annibale Colombo Sofa",
        price: 2499.99,
        category: "furniture",
        images: [
            "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
            "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
            "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png"
        ]
    },
    {
        id: 13,
        title: "Bedside Table African Cherry",
        price: 299.99,
        category: "furniture",
        images: [
            "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
            "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
            "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png"
        ]
    },
    {
        id: 14,
        title: "Knoll Saarinen Executive Conference Chair",
        price: 499.99,
        category: "furniture",
        images: [
            "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
            "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
            "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png"
        ]
    },
    {
        id: 15,
        title: "Wooden Bathroom Sink With Mirror",
        price: 799.99,
        category: "furniture",
        images: [
            "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
            "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
            "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png"
        ]
    },
    {
        id: 16,
        title: "Apple",
        price: 1.99,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"
        ]
    },
    {
        id: 17,
        title: "Beef Steak",
        "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
        price: 12.99,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"
        ]
    },
    {
        id: 18,
        title: "Cat Food",
        "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
        price: 8.99,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png"
        ]
    },
    {
        id: 19,
        title: "Chicken Meat",
        "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
        price: 9.99,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
            "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png"
        ]
    },
    {
        id: 20,
        title: "Cooking Oil",
        "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
        price: 4.99,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png"
        ]
    },
    {
        id: 21,
        title: "Cucumber",
        "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
        price: 1.49,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png"
        ]
    },
    {
        id: 22,
        title: "Dog Food",
        "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
        price: 10.99,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png"
        ]
    },
    {
        id: 23,
        title: "Eggs",
        "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
        price: 2.99,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png"
        ]
    },
    {
        id: 24,
        title: "Fish Steak",
        "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
        price: 14.99,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png"
        ]
    },
    {
        id: 25,
        title: "Green Bell Pepper",
        "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
        price: 1.29,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"
        ],
    },
    {
        id: 26,
        title: "Green Chili Pepper",
        "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
        price: 0.99,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png"
        ]
    },
    {
        id: 27,
        title: "Honey Jar",
        "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
        price: 6.99,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png"
        ]
    },
    {
        id: 28,
        title: "Ice Cream",
        "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
        price: 5.49,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
            "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png",
            "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png",
            "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png"
        ]
    },
    {
        id: 29,
        title: "Juice",
        "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
        price: 3.99,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png"
        ]
    },
    {
        id: 30,
        title: "Kiwi",
        price: 2.49,
        category: "groceries",
        images: [
            "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png"
        ],
    },
]

export default youtbeApi