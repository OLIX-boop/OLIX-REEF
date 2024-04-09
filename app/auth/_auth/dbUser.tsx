import PocketBase from 'pocketbase';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

export const POCKET_BASE_URL = "http://127.0.0.1:8090";

export class DatabaseClient {
    // the instance of PocketBase
    client: PocketBase;

    constructor () {
        // instantiate PocketBase before we use
        this.client = new PocketBase(POCKET_BASE_URL);
    }

    // authenticate handles the authentication of the user
    async authenticate (email: string, password: string) {
        try {
            const result = await this.client.collection("users").authWithPassword(email, password);
            // If there is no token in the result, it means something went wrong
            if (!result?.token) {
                throw new Error("Invalid email or password");
            }
            return result;
        } catch (err) {
            console.error(err);
            throw new Error("Invalid email or password");
        }
    }
    
    // register handles the creation of a new user
    async register (email: string, password: string, name:string) {
        try {
            // We provide only the minimum required fields by user create method
            const result = await this.client.collection("users").create({
                name,
                email,
                password,
                passwordConfirm: password,
            });
            
            return result;
        } catch (err) {};
    }
    
    async requestVerification(email:string) {
        try {
            const res = await this.client.collection('users').requestVerification(email);
            console.log(res);
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
        if (!cookie) {
            return false;
        }

        this.client.authStore.loadFromCookie(cookie?.value || '');
        return this.client.authStore.model ;
    }
}

// We create an instance of the DatabaseClient that can be used throughout the app.
export const db = new DatabaseClient();

export default db;