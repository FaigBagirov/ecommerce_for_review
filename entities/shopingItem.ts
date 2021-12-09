interface ShoppingItem  {
    productId: number,
    productQty: number,
    userData: {
        userID: string,
        userToken: string,
    }
}

class ShoppingItem{
    constructor({productId, productQty, userData}: ShoppingItem){
        this.productId = productId;
        this.productQty = productQty;
        this.userData.userID = userData.userID;
        this.userData.userToken = userData.userToken;
    }

}

module.exports = ShoppingItem;