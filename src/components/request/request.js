import axios from "axios";

const instance = axios.create({
    method: 'get',
    baseURL: "https://pixabay.com/api",
    params: {
        image_type: "photo",
        orientation: "horizontal",
        safesearch: 'true',

    },
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
});
export async function getPhoto(keyWords, page) {

    const { data } = await instance.get("/?key=33196747-24bc99861df4a38dc77aa0518", {
        params: {
            q: `${keyWords}`,
            per_page: 12,
            page
        }
    });
    if (data.hits.length === 0) {
        throw new Error("За вашим запитом нічого не знайдено");
    }
    return data;




}
