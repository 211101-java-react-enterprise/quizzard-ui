import {quizzardClient} from "../remote/quizzard-client";

export async function getQuizzes(token: string) {

    let resp = await quizzardClient.get('/quizzes', {
        headers: {
            'Authorization': token
        }
    });

    if (resp.status != 200) {
        console.log(resp);
        throw resp.data;
    }

    return resp.data;

}