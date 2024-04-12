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

class UserData {
    data:LoginData = {};
    id: string = '';
    login: boolean = false;
    
    SetUpUser = async () => {
        const response = await fetch('/api/auth/getlogin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();

        if (!response.ok) {
            console.error(data)
            return data;
        }

        this.login = true;
        this.data = data;
        this.id = data.id;
    }

}


export const User = new UserData();