# ecommerce_for_review

This code is minimal code that I have wrote with MVC architecture.
I want to be sure that it is ok to move further in the development of my e-commerce project.

In addition I want to write it with clean architecture as well. If you have any suggestions I can't wait to hear them! :)
Folder structure:
 
    ├── main.ts
    ├── .env
    ├── _config
    |   |── db.ts
    |   └── index.ts
    ├── _controllers
    │   |── addToCart.ts
    │   |── cancelCheckout.ts
    │   |── checkout.ts
    │   └── _workers
    |       |──addToCartWorker.ts
    |       |──dbMigrationWorker.ts
    |       └──index.ts
    ├── _entities
    │   ├── products.ts
    │   ├── shoppingItem.ts
    │   └── user.ts
    ├── _models
    │   ├── shoppingItemsActions.ts
    │   └── shoppingOrders.ts
    └── _routes
        └── shoppingRoutes.ts
