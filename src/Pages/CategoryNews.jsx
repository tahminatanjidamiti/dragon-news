import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";


const CategoryNews = () => {
    const { data: news } = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <div>
                {
                    news.map(singleNews => <NewsCard news={singleNews} key={singleNews._id}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;