
const db = require('../database')
// const shoppingItems = require('../models/shopping-items')
const ShoppingItems = require('../models/shopping-items')

db.connect()

class ShopItem {
    constructor(
        itemName,
        quantity,
        description,
        price, 
        weight,
        rating,
        sellerInfo,
        offers
    ){
        this.itemName = itemName
        this.quantity = quantity
        this.description = description,
        this.price = price,
        this.weight = weight, 
        this.rating = rating,
        this.sellerInfo = sellerInfo
        this.offers = offers
    }
}

let Item = (ItemName, Quantity, Description, Price, Weight, Rating, SellerInfo, Offers) => {
    return new ShopItem(ItemName, Quantity, Description, Price, Weight, Rating, SellerInfo, Offers)
}

itemsList = [
    Item('Pears3', 2, '', 30, '', 4.4, 'Tin factory, Banglore', '30% offer'),
    Item('Santoor3', 4, '', 30, '', 4.2, 'Baneerghata, Banglore', '23% offer'),
    Item('Dove3', 6, '', 40, '', 4.4, 'Banaswadi, Banglore', '35% offer'),
    Item('Pears2', 2, '', 30, '', 4.2, 'Tin factory, Banglore', '30% offer'),
    Item('Santoor2', 4, '', 30, '', 4.1, 'Baneerghata, Banglore', '23% offer'),
    Item('Dove2', 6, '', 40, '', 4.0, 'Banaswadi, Banglore', '35% offer'),
]

var shoppingItems = []
itemsList.forEach((item) => {
    shoppingItems.push(
        new ShoppingItems(
            {
                itemName: item.itemName,
                quantity: item.quantity,
                description: item.description,
                price: item.price,
                weight: item.weight,
                rating: item.rating,
                sellerInfo: item.sellerInfo,
                offers: item.offers
            }
        )
    )
})

console.log("shopping items ", shoppingItems)

const deletingShoppingItems = async () => {
    // let addedShopItems = await ShoppingItems.insertMany(shoppingItems)
    // console.log("the added shop items are", addedShopItems)

    /**Deletes the first document that has been returned from the query */
    // let shoppingData = await ShoppingItems.deleteOne({ itemName: 'Santoor'})
    
    /** Delets the multiple documents that satisfies the given filter param*/
    // let shoppingData = await ShoppingItems.deleteMany({ rating: { $gt: 4.2 }})

    /** This will first find the document and then deleted it*/
    let shoppingData = await ShoppingItems.findOneAndDelete({ itemName: 'Dove2'})

    console.log(shoppingData)
}

deletingShoppingItems()
module.exports = deletingShoppingItems