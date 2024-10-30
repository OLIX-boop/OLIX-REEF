import { RecordModel } from "pocketbase";

/**
 * Interface of every produc
 */
export interface Product {
    quantity: number,
    prod: RecordModel,
}

/**
 * Cart class that handles all the modifications of the cart
*/
class CartObj {
    products = new Map<string, Product>(); //Products list <product ID, product>
    quantity = 0; //quantity of items in the cart, recalculated on every function
    
    changeCartHook:React.Dispatch<React.SetStateAction<number>>|null = null;
    SetCartHook = (e:React.Dispatch<React.SetStateAction<number>>) => this.changeCartHook=e;

    /**
     * Recalculates the products quantity on every action and sends the new quantity to the hooked classes
    */
    UpdateQuantity = () => {
        let count = 0;
        this.products.forEach(element => count+=element.quantity);
        this.quantity=count;
        if (this.changeCartHook) this.changeCartHook(count);
    };

    /**
     * Adds a products to the cart
     * @param {RecordModel} prod Product object, which contains the ID
     * @param {number} qt How many items do you want to add?
     * @param {Function} Callback This callback returs if the function was successfull or not (true = success; false=not enought items in stock)
    */
    AddToCart = (prod: RecordModel, qt:number, Callback: (pass:boolean) => void) => {
        let qty = 0;
        const exist =this.products.get(prod.id);
        if (exist) 
            if(exist.prod.stock >= exist.quantity + qt)
                qty=exist.quantity + qt;
            else 
                return Callback(false); // not enought items in stock
        else 
            qty=qt;

        this.products.set(prod.id, {quantity: qty, prod: prod}); // sets the new product quantity
        this.UpdateQuantity(); //recalculate cart qty
        Callback(true); // sucess
    };

    /**
     * Removes an item from the cart by one or all the items
     * @param {RecordModel} prod Product object, which contains the ID
     * @param {boolean} all Remove one item at the time or every item?
    */
    RemoveFromCart = (prod:RecordModel, all = false) => {
        const exits = this.products.get(prod.id);
        if (exits) 
            if (all)
                // delete all the the selected items
                this.products.delete(prod.id);
            else {
                if (exits.quantity <= 1)
                // if there's only 1 product delete the item
                    this.products.delete(prod.id);
                else                    
                // otherwise decrease it by 1
                    this.products.set(prod.id, {quantity: exits.quantity-1, prod:prod});
            }

        // recalculate cart quantity
        this.UpdateQuantity();
    };

}

export const Cart = new CartObj();