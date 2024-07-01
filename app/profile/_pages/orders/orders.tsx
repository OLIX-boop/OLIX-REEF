import { useEffect, useState } from "react"
import { UserLoginData } from "@/app/user";
import { Product } from "@/app/_components/cart/cart";

interface Order {
    id: string,
    price: number,
    address: string,
    user: any,
    items: Array<Product>,
    created: string
}

export default function Orders({data}:{data:UserLoginData}) {
    const [orders, setOrders] = useState<Array<Order>>([]);
    const [products, setProducts] = useState<Array<Product>>([]);
    useEffect(()=>{
        const getOrders = async () => {
            const id = data.id;
            const response = await fetch('/api/auth/getorders', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id})
            });
    
            const result = await response.json();
    
            if (!response.ok) 
                console.log("ERROR while retrieving orders");
            else
                setOrders(result);
        }
        getOrders();
    },[data.id])

    function idToNum(stringa:string) {
        const mappaCaratteri: {[key:string]: string} = {
          'a': '1', 'b': '2', 'c': '3', 'd': '4', 'e': '5',
          'f': '6', 'g': '7', 'h': '8', 'i': '9', 'j': '10',
          'k': '11', 'l': '12', 'm': '13', 'n': '14', 'o': '15',
          'p': '16', 'q': '17', 'r': '18', 's': '19', 't': '20',
          'u': '21', 'v': '22', 'w': '23', 'x': '24', 'y': '25',
          'z': '26'
        };
      
        let risultato = '';
        for (let carattere of stringa) {
          if (mappaCaratteri[carattere]) {
            risultato += mappaCaratteri[carattere];
          } else {
            risultato += '0'; // Carattere non trovato, sostituiamo con '0'
          }
        }
        return risultato;
      }
    console.log(orders)
    return (<>
        <h1 className="font-bold mb-3 text-3xl flex justify-center">My Orders</h1>
        <hr className="border-black" />
        <div className="flex flex-col gap-3 mt-5 justify-center align-middle mx-auto">
            {orders.length < 1 && <h1>You have no orders</h1>}
            {orders.length > 0 &&
                orders.map((value:Order) => 
                <div key={value.id} className="grid grid-cols-3 gap-3 border-2 border-gray-300 py-2">
                    <div className="py-3">
                        <div className="status text-center">Package Tracking: <a className=" text-blue-500 font-bold no-underline hover:underline focus:underline" href="#">123456789</a></div>
                        <div className="relative text-center text-sm ml-2">
                            <div className="dot one"></div>
                            <div className="dot two"></div>
                            <div className="dot three"></div>
                            <div className="dot four"></div>
                            <div className="progress-bar first"></div>
                            <div className="progress-bar second"></div>
                            <div className="progress-bar third"></div>
                        </div>
                        <div className="relative text-center text-sm flex gap-7 mt-10">
                            <div className="w-24 left-0">Picked up</div>
                            <div className="w-24 left-[20%]">Arrived at USPS facility</div>
                            <div className="w-24 left-[50%]">Out for delivery</div>
                            <div className="w-24 left-[80%]">Delivered</div>
                        </div>
                    </div>

                    <div className="my-auto">
                        <h2 className="flex">Order n.&nbsp;<p className="font-bold">#{value.id.slice(0, 5).toUpperCase()}</p></h2>
                        <h2>Date: {new Date(value.created).toLocaleDateString('it-IT')}</h2>
                        <p className="text-sm">{value.address}</p>
                        <h1>Total: {value.price}$</h1>
                    </div>
                    <div className="flex flex-col h-fit my-auto w-[95%]">
                        <button className="border-4 p-2 rounded-md border-blue-500 font-bold hover:text-blue-500 hover:bg-blue-100 bg-blue-500 text-white duration-300">Track Order</button>
                        <button className="mt-3 border-4 p-2 rounded-md border-black font-bold text-black bg-slate-100 hover:bg-black hover:text-white duration-300">View Order</button>
                    </div>
                </div>
            )}

        </div>
    </>)
}