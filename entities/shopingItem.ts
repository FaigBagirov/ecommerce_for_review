// export {};//just to tell the typescript taht this is a module 

interface ShoppingItemType  {
    productId: number;
    productQty: number;
    userData: {
        userID: string,
        userToken: string,
    };
}

class ShoppingItem implements ShoppingItemType{
    productId: number;
    productQty: number;
    userData!: {
        userID: string;
        userToken: string;
    };

    constructor({productId, productQty, userData}: ShoppingItemType){
        this.productId = productId;
        this.productQty = productQty;
        this.userData.userID = userData.userID;
        this.userData.userToken = userData.userToken;
    }


}

export {ShoppingItemType, ShoppingItem};


