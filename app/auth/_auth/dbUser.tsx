import PocketBase from 'pocketbase';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

export const POCKET_BASE_URL = `${process.env.NEXT_PRODUCTION == "false" ? "http" : "https"}://${process.env.NEXT_DB_IP}${process.env.NEXT_PRODUCTION == "false" ? ":8090" : ""}`;

export class DatabaseClient {
    client: PocketBase;

    constructor () {
        this.client = new PocketBase(POCKET_BASE_URL);
    }

    async authenticate (email: string, password: string) {
        try {
            const result = await this.client.collection("users").authWithPassword(email, password);

            if (!result?.token) 
                throw new Error("Invalid email or password");
            
            return result;
        } catch (err) {
            throw new Error("Invalid email or password");
        }
    }
    
    async register (email: string, password: string, name:string) {
        
        const exist = await this.client.collection("users").getFullList({filter:`email="${email}"`});
            if (exist.length > 0) 
                throw new Error("Email already exists!");
    
            const result = await this.client.collection("users").create({
                name,
                email,
                password,
                passwordConfirm: password,
                emailVisibility: true,
            });

        return result;
    }

    async requestVerification(email:string) {
        try {
            return await this.client.collection('users').requestVerification(email);
        } catch (err) {
            console.log(err);
        }
    }
    
    async requestPasswordReset(email:string) {
        try {
            return await this.client.collection('users').requestPasswordReset(email);;
        } catch (err) {
            console.log(err);
        }
    }

    // isAuthenticated takes cookieStore from the request to check for the required tokens in the cookie
    async isAuthenticated(cookieStore: ReadonlyRequestCookies) {
        const cookie = cookieStore.get('pb_auth');

        if (!cookie) 
            return '';

        // loadFromCookie applies the cookie data before checking the user is authenticated
        this.client.authStore.loadFromCookie(cookie?.value || '');
        return this.client.authStore.model!.id || '';
    }

    // getUser is similar to isAuthenticated, the only difference is the returned data type
    async getUser(id: string) {
        return await this.client.collection('users').getOne(id, {});
    }

    // setUserInfo updates user's name and email
    async setUserInfo(id:string, data: {[key: string]: any}) {
        try {
            const record = await this.client.collection('users').getOne(id, {});

            if (record.name_chaged_time !== '') { // you can change name every 24h
                const lastChangeDate = new Date(record.name_chaged_time);
                const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
                if (lastChangeDate.getTime() > oneDayAgo)
                    throw new Error("You can change info once every 24 hours");
            }

           return await this.client.collection("users").update(id, {...data, name_chaged_time: new Date().toISOString()});
        } catch (err) {
            throw err;
        }
    }

    /*
    changeUserPassword first checks:
        - if current password is correct, 
        - if last password change date is at least 24h ago
    then it procedes to change the password and to update pass change date
    */
    async changeUserPassword (email:string, password: string, newPassword: string) {
        try {
            const result = await this.client.collection("users").authWithPassword(email, password);
            
            if (!result?.token) //checks if password is correct
                throw new Error("Incorrect Password");

            if (result.record.psw_changed_time !== '') { // you can change name every 24h
                const lastChangeDate = new Date(result.record.psw_changed_time);
                const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
                if (lastChangeDate.getTime() > oneDayAgo)
                    throw new Error("You can change password once every 24 hours");
            }

            return await this.client.collection("users").update(result.record.id, {oldPassword: password, password: newPassword, passwordConfirm: newPassword, psw_changed_time: new Date().toISOString()});
        } catch (err:any) {
            if(err?.response?.code === 400)
                throw new Error("Incorrect Password");

            throw err;
        }
    }

    // getUserOrders doesn't need any explaination
    async getUserOrders(id:string) {
        try {
            return await this.client.collection('orders').getFullList({
                filter: `user.id = "${id}"`,
                requestKey: null
            });
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    // getUrserAddresses doesn't need any explaination
    async getUrserAddresses(id:string) {
        try {
            return await this.client.collection('addresses').getFullList({
                filter: `user.id = "${id}"`,
                requestKey: null
            });
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    // setNewAddress doesn't need any explaination
    async setNewAddress(address:string, name:string, phone:string, id:string) {
        try {
            const result = await this.client.collection("addresses").create({
                address,
                name,
                phone,
                user: id
            });
            return result;
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    // deleteAddress doesn't need any explaination
    async deleteAddress(id:string) {
        try {
            const result = await this.client.collection("addresses").delete(id);
            return result;
        } catch (err) {
            console.log(err)
            throw err;
        }
    }
}

// We create an instance of the DatabaseClient that can be used throughout the app.
export const db = new DatabaseClient();

export default db;