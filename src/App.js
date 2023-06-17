import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/Blog";
import Jobs from "./pages/Jobs";
import UpcomingEvents from "./pages/UpcomingEvents";
import { BlogContext } from "./context/BlogContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import News from "./pages/News";
import { NewsContext } from "./context/NewsContext";
function App() {
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(false);

  async function getBlogs() {
    setLoadingBlogs(true);
    try {
      const response = await axios.get(
        `https://codehelp-apis.vercel.app/api/get-blogs`
      );
      setBlogs(response.data.posts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingBlogs(false);
    }
  }

  async function getNews() {
    setLoadingNews(true);
    try {
      const response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=pub_38704c96c835ffc76e06a96e4ea7d1212235&country=au,us`
      );
      setNews(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingNews(false);
    }
  }

  useEffect(() => {
    getBlogs();
    getNews();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        setBlogs,
        loadingBlogs,
        setLoadingBlogs,
      }}
    >
      <NewsContext.Provider
        value={{ news, setNews, loadingNews, setLoadingNews }}
      >
        <div className="min-h-screen flex flex-col justify-between bg-slate-950">
          <div className="App ">
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<Blog />} />
                <Route path="/news" element={<News />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/upcomingEvents" element={<UpcomingEvents />} />
              </Routes>
            </Router>
          </div>
          <Footer />
        </div>
      </NewsContext.Provider>
    </BlogContext.Provider>
  );
}

export default App;
