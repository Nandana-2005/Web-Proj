import { useState, useEffect } from "react";
import "./news.css";

const API_KEY = "cvlotbhr01qj3umennngcvlotbhr01qj3umenno0"; // Replace with your Finnhub API key
const categories = ["general", "forex", "crypto", "merger", "earning"];

const StockMarketApp = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  const fetchNews = async (category) => {
    const url = `https://finnhub.io/api/v1/news?category=${category}&token=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const filterNews = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredNews = news.filter((article) =>
    article.headline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main">
      <div className="news-sidebar">
        <div className="news-sidebar-header">
          <div className="news-logo">
            <img src="./tradeplus-logo.jpg" alt="T" />
            <span>Trade Plus</span>
          </div>
        </div>
        <nav className="news-sidebar-nav">
          <ul>
            <li className="active">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="nav-icon"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>
                  <a href="../Dashboard/dashboard.html">Dashboard</a>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="chevron-icon"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="nav-icon"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
                <span>Stocks</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="nav-icon"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>F&O</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="nav-icon"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Mutual Funds</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="nav-icon"
                >
                  <path d="M6 20h4"></path>
                  <path d="M14 20h4"></path>
                  <path d="M6 13v4"></path>
                  <path d="M14 13v4"></path>
                  <path d="M10 12v8"></path>
                  <path d="M3 12h18"></path>
                  <path d="M3 6h18"></path>
                  <path d="M3 12v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8"></path>
                  <path d="M3 6v6"></path>
                  <path d="M21 6v6"></path>
                </svg>
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="nav-icon"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
                <span>News</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="nav-icon"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Watchlist</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="nav-icon"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
                <span>Notifications</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class = "content-conatiner">
        <div className="news-navbar">
          <div class = "searchbox">
          <input
            type="text"
            placeholder="Search for stock market..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <box-icon name="search"></box-icon>
          </div>
          {/*<div className="userr-profile">
            <div className="pprofile"></div>
            <div className="nname">Nikilesha</div>
          </div>*/}
        </div>

        <div className="news-dash">
            <h1>Market News</h1>
            <p>Stay updated with the latest market news and analysis</p>
            <div className="filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={category === cat ? "active" : ""}
                  onClick={() => filterNews(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
             <div className="news-container">
              {filteredNews.map((article, index) => (
                <div key={index} className="news-item">
                  <img
                    src={article.image || "https://via.placeholder.com/300"}
                    alt={category}
                  />
                  <div className="news-content">
                    <p className="category">{category}</p>
                    <h2>{article.headline}</h2>
                    <p className="description">
                      {article.summary || "No description available"}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockMarketApp;
