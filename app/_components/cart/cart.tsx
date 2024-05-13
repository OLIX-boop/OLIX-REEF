import { RecordModel } from "pocketbase";

interface Product {
    quantity: number,
    prod: RecordModel,
}

class CartObj {
    products = new Map<string, Product>([
        ['8bf8bsg92sx09gk', {
          quantity: 2,
          prod: {
            category: 'Euphyllia',
            collectionId: 'txsj83jx40qf0xj',
            collectionName: 'products',
            created: '2024-04-02 21:08:14.525Z',
            id: '8bf8bsg92sx09gk',
            img: 'maxresdefault_RZLHAdeZ9C.jpg',
            price: 200,
            stock: 2,
            title: 'Golden Torch 24K',
            type: 'LPS',
            updated: '2024-04-02 21:08:14.525Z'
          }
        }],
        ['89fiqta6gdyp2rf',{
          quantity: 2,
          prod: {
            category: 'Stylopora',
            collectionId: 'txsj83jx40qf0xj',
            collectionName: 'products',
            created: '2024-04-01 20:13:07.779Z',
            id: '89fiqta6gdyp2rf',
            img: 'img_IfYb3pP7vF.jpg',
            price: 50,
            stock: 2,
            title: 'Milka',
            type: 'SPS',
            updated: '2024-04-02 16:09:04.250Z'
          }
        }],
        ['vzkczsa04cip8vc',{
          quantity: 1,
          prod: {
            category: 'Acropora',
            collectionId: 'txsj83jx40qf0xj',
            collectionName: 'products',
            created: '2024-04-01 20:11:41.060Z',
            id: 'vzkczsa04cip8vc',
            img: 'fsCCvuyXooPU_qVg5CihcOn.png',
            price: 350,
            stock: 1,
            title: 'Flaming Sunrise',
            type: 'SPS',
            updated: '2024-04-02 16:29:41.042Z'
          }
        }],
    ]);
    quantity = 5;
    
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