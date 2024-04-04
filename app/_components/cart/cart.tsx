import { RecordModel } from "pocketbase";

interface Product {
    quantity: number,
    prod: RecordModel,
}

class CartObj {
    products = new Map<string, Product>();
    quantity = 0;
    
    changeCartHook:React.Dispatch<React.SetStateAction<number>>|null = null;

    SetCartHook = (e:React.Dispatch<React.SetStateAction<number>>) => this.changeCartHook=e;

    UpdateQuantity = () => {
        let count = 0;
        this.products.forEach(element => count+=element.quantity);
        this.quantity=count;
        if (this.changeCartHook) this.changeCartHook(count);
    };

    AddToCart = (prod: RecordModel, qt:number, Callback: (pass:boolean) => void) => {
        let prev = 0;
        const exist =this.products.get(prod.id);
        if (exist) 
            if(exist.prod.stock >= exist.quantity + qt)
                prev=exist.quantity + qt;
            else 
                return Callback(false);
        else 
            prev=qt;

        this.products.set(prod.id, {quantity: prev, prod: prod});
        this.UpdateQuantity();
        Callback(true);
    };

    RemoveFromCart = (prod:RecordModel, all = false) => {
        const found = this.products.get(prod.id);
        if (found) 
            if (all)
                this.products.delete(prod.id);
            else 
                this.products.set(prod.id, {quantity: found.quantity, prod:prod});

        this.UpdateQuantity();
    };

}


export const Cart = new CartObj();