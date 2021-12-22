import {Credentials} from "../models/credentials";
import {quizzardClient} from "../remote/quizzard-client";
import {Principal} from "../models/principal";
import {RegisterUserRequest} from "../models/register-user-request";

export async function registerUserAccount(newUser: RegisterUserRequest) {

}

export async function authenticate(credentials: Credentials) {

    let resp = await quizzardClient.post('/auth', credentials);

    if (resp.status != 200) {
        throw resp.data;
    }

    return resp.data;

}

export async function logout(setCurrentUser: (nextUser: Principal | undefined) => void) {
    await quizzardClient.delete('/auth');
    setCurrentUser(undefined);
}
