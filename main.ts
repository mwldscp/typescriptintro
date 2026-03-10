interface Product {
    id: number,
    title: string,
    price: number,
    stock: number
};

const products: Product[] = [
    {id: 1, title: 'product 1', price: 100, stock: 50},
    {id: 2, title: 'product 2', price: 200, stock: 130},
    {id: 3, title: 'product 3', price: 50, stock: 1000},
    {id: 4, title: 'product 4', price: 25, stock: 50},
]

function getAllProducts<T>(items: T[]): T[]{
 return items
};
console.log(getAllProducts(products));

function getProductById (id: number): Product | undefined{
    return products.find(product => product.id === id)
}
console.log(getProductById(2));

function getTotalPrice (items: Product[]): number{
return items.reduce((acc, item)=>{
    const totalPriceByProd = item.price * item.stock;
    return acc + totalPriceByProd
}, 0)
};

console.log(getTotalPrice(products))