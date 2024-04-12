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
    
            
            console.log("awwa")
            const result = await this.client.collection("users").create({
                name,
                email,
                password,
                passwordConfirm: password,
                emailVisibility: true,
            });
            console.log("awwa")

        console.log(result)

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
        if (!cookie) {
            return false;
        }

        // loadFromCookie applies the cookie data before checking the user is authenticated
        this.client.authStore.loadFromCookie(cookie?.value || '');
        return this.client.authStore.isValid || false
    }

    // getUser is similar to isAuthenticated, the only difference is the returned data type
    async getUser(cookieStore: ReadonlyRequestCookies) {
        const cookie = cookieStore.get('pb_auth');
        console.log(cookie)
        if (!cookie) {
            return false;
        }

        this.client.authStore.loadFromCookie(cookie?.value || '');
        return this.client.authStore.model;
    }
}

// We create an instance of the DatabaseClient that can be used throughout the app.
export const db = new DatabaseClient();

export default db;