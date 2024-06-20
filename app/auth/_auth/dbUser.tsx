import PocketBase from 'pocketbase';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { error } from 'console';

export const POCKET_BASE_URL = "http://127.0.0.1:8090";

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

    async setUserInfo(id:string, data: {[key: string]: any}) {
        try {
            const record = await this.client.collection('users').getOne(id, {});

            if (record.name_chaged_time !== '') { // you can change name every 24h
                const lastChangeDate = new Date(record.name_chaged_time);
                const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
                if (lastChangeDate.getTime() > oneDayAgo)
                    throw new Error("You can change password once every 24 hours");
            }

           return  await this.client.collection("users").update(id, {...data, name_chaged_time: new Date().toISOString()});
        } catch (err) {
            throw err;
        }
    }
}

// We create an instance of the DatabaseClient that can be used throughout the app.
export const db = new DatabaseClient();

export default db;