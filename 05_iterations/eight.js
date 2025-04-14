const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myTotal = mynums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc}, currval: ${currval}`); // acc: 0, currval: 1
    
//     return acc + currval // 1
// }, 0)

const myTotal = mynums.reduce( (acc, currval) => acc + currval, 0)

console.log(myTotal); 

const shoppingCart = [
    {
        itemName : "js course",
        price : 199,
    },
    {
        itemName : "React course",
        price : 299,
    },
    {
        itemName : "Python course",
        price : 499,
    },
    {
        itemName : "Java course",
        price : 399,
    },
]
 const pricetopay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
 console.log(pricetopay); // 1396
 




