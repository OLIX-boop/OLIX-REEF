interface LoginData {
    avatar?: string,
    collectionId?: string,
    collectionName?: string,
    created?: string,
    email?: string,
    emailVisibility?: boolean,
    id?: string,
    name?: string,
    updated?: string,
    username?: string,
    verified?: boolean,
    token?: string,
}

export interface UserLoginData {
    avatar?: string,
    collectionId?: string,
    collectionName?: string,
    created?: string,
    email?: string,
    emailVisibility?: boolean,
    id?: string,
    name?: string,
    updated?: string,
    username?: string,
    verified?: boolean,
    token?: string,
}

class UserData {
    data:LoginData = {};
    id: string = '';
    login: boolean = false;
    
    SetUpUser = async () => {
        const response = await fetch('/api/auth/getlog', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();

        if (!response.ok) {
            console.log(data);
            return data;
        }

        this.login = true;
        this.data = data;
        this.id = data.id;
    };

    getLogin = async () => {
        const response = await fetch('/api/auth/getlog', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        });
        return await response.json();
    }
}


export const User = new UserData();
