import Image from "next/image";
import Link from "next/link";

const baseUrl = "https://677ca98c4496848554c72d14.mockapi.io/shop/products";

export type ProductType = {
  id: string,
  stockQuantity: number,
  rating: number,
  image: string,
  sizes: [string, string],
  productPrice: string,
  productDescription: string,
  productName: string
} 

export default async function Home() {
  const res = await fetch(baseUrl);
  const data = await res.json()
  // console.log(data);

  return (
   <>
   <h1 className="text-2xl font-bold mb-4 text-center mt-4">Our Products</h1>
      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product: ProductType) => (
          <div
            key={product.id}
            className="w-full p-4 rounded-md shadow-lg shadow-gray-300"
          >
            <Link href={`/${product.id}`}>
            <Image
              src={product.image}
              alt={product.productName}
              width={300}
              height={300}
              className="w-full object-cover rounded-lg"
            />
            </Link>
            <Link href={`/${product.id}`}>
            <h2 className="text-xl font-semibold mt-4">{product.productName}</h2>
            </Link>
            <p className="text-gray-700 mt-2">{product.productDescription}</p>
            <p className="text-lg font-bold text-green-600 mt-2">{product.productPrice}</p>
            <p className="text-gray-500">Rating: {product.rating}</p>
            <p className="text-gray-500">Stock: {product.stockQuantity} items left</p>
            <div className="mt-4 text-gray-500">
              <p>Sizes: {product.sizes.join(" / ")}</p>
            </div>
          </div>
        ))}
      </div>
   </>
  );
}
