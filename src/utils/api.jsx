import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://rh-nc-news.onrender.com/api/"
})

export const getArticles = () => {
    return ncNewsApi
    .get("/articles")
    .then(({data}) => {
        console.log(data);
        return data.articles
    })
    .catch(err => {
        console.log(err);
    })
}