import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const NewsCard = (props = {}) => {
    const {news} = props || {} ;
    const {
        title,
        image_url,
        author,
        rating,
        total_view,
        details,
      } = news;
    
      return (
        <div className="mt-5 rounded-lg shadow-md border border-gray-300 bg-white">
          {/* Author Info */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
            <div className="flex items-center">
              <img
                src={author.img}
                alt={author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <h3 className="text-sm font-semibold text-gray-700">
                  {author.name}
                </h3>
                <p className="text-xs text-gray-500">{author.published_date}</p>
              </div>
            </div>
            <FaShareAlt className="text-gray-600 cursor-pointer" />
          </div>
    
          {/* News Content */}
          <div className="px-4 py-3">
            <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
            <img
              src={image_url}
              alt="News Thumbnail"
              className="w-full rounded-lg mb-3"
            />
            <p className="text-sm text-gray-600 mb-3">
              {details.substring(0, 100)}...{" "}
              <Link to={`/news/${news._id}`} className="text-blue-500 font-medium cursor-pointer">
                Read More
              </Link>
            </p>
          </div>
    
          {/* Footer Info */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-t border-gray-200">
            {/* Rating */}
            <div className="flex items-center">
              <div className="flex items-center text-yellow-500 text-sm">
                {"★".repeat(Math.floor(rating.number))}
              </div>
              <span className="text-gray-500 ml-2 text-sm">{rating.number}</span>
            </div>
    
            {/* Total Views */}
            <div className="flex items-center text-gray-500 text-sm">
              <FaRegEye className="mr-1" />
              {total_view}
            </div>
          </div>
        </div>
      );
};

export default NewsCard;