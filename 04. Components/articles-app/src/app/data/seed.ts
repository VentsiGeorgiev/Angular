import { Article } from "../models/article.models";
import { data } from "../data/data";


export class ArticleData {
    getData(): Article[] {
        const articles: Article[] = data.map(article => {
            return new Article(
                article.title,
                article.description,
                article.author,
                article.imageUrl
            );
        });
        return articles;
    }
}