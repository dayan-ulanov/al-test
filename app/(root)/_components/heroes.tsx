"use client";

import { useGetProductQuery } from "@/lib/services/getProduct/products";


const Heroes = () => {
  const { data, error, isLoading } = useGetProductQuery();

  console.log(data)

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      ) : null}
    </div>
   );
}
 
export default Heroes;