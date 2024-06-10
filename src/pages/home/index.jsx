import { useState, useEffect } from "react";
import youtbeApi from "../../data";

const Home = ({ search }) => {
    const [categoryProduct, setCategoryProduct] = useState("all");
    const [filteredProducts, setFilteredProducts] = useState(youtbeApi);
    const [seMore, setSeMore] = useState(2);

    let uniqueCategories = [...new Set(youtbeApi.map(el => el.category))];
    let category = uniqueCategories.map(category => (
        <button
            onClick={() => handleCategory(category)}
            className={`w-24 h-8 rounded-xl flex items-center justify-center cursor-pointer ${categoryProduct === category ? "bg-[#ffffff] text-black" : "bg-[#ffffff4b] text-white"}`}
            key={category}
        >
            {category}
        </button>
    ));

    const handleCategory = (category) => {
        setCategoryProduct(category);
    }

    useEffect(() => {
        let products = youtbeApi;

        if (categoryProduct !== "all") {
            products = products.filter(product => product.category === categoryProduct);
        }

        if (search) {
            products = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredProducts(products);
    }, [categoryProduct, search]);

    let product = filteredProducts.slice(0, 5 * seMore).map((product) => (
        <div key={product.id} className="overflow-hidden shadow-lg">
            <div className="h-[217px] bg-[#ffffff46] rounded-t-lg overflow-hidden">
                <img className="h-full w-full object-contain" src={product.images[0]} alt={product.title} />
            </div>
            <div className="flex items-start flex-row p-4 gap-5">
                <div className="w-12 h-12 rounded-full">
                    <img className="w-full h-full object-contain" src={product.images[0]} alt="" />
                </div>
                <div className="text-white">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-sm my-1">{product.category}</p>
                    <div className="flex gap-3">
                        <p className="text-sm">${product.price}</p>
                        <del className="text-sm">${Math.floor(product.price + 132)}</del>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <main className="w-full">
            <section className='h-14 flex items-center gap-4 overflow-auto sticky top-14 left-0 bg-black w-full'>
                <button
                    onClick={() => handleCategory("all")}
                    className={`w-24 h-8 rounded-xl flex items-center justify-center ${categoryProduct === "all" ? "bg-[#ffffff] text-black" : "bg-[#ffffff4b] text-white"}`}
                    key="all"
                >
                    All
                </button>
                {category}
            </section>
            <section className="p-4">
                <div className="grid grid-cols-5 gap-4 mb-8">
                    {product}
                </div>

                <button className="bg-white px-8 py-1 rounded-lg block mx-auto" onClick={() => setSeMore(p => p + 1)}>See more</button>
            </section>
        </main>
    );
}

export default Home;
