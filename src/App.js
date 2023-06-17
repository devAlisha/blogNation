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
function App() {
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  async function getBlogs() {
    setLoadingBlogs(true);
    try {
      const fetchedBlogs = [];
      const fetchedBlogIds = new Set();
      const response = await axios.get(
        `https://codehelp-apis.vercel.app/api/get-blogs?page=0`
      );
      response.data.posts.forEach((post) => {
        fetchedBlogs.push(post);
        fetchedBlogIds.add(post.id);
      });
      const totalPages = response.data.totalPages;
  
      for (let index = 1; index < totalPages; index++) {
        const pageResponse = await axios.get(
          `https://codehelp-apis.vercel.app/api/get-blogs?page=${index}`
        );
        pageResponse.data.posts.forEach((post) => {
          if (!fetchedBlogIds.has(post.id)) {
            fetchedBlogs.push(post);
            fetchedBlogIds.add(post.id);
          }
        });
      }
  
      setBlogs((prevBlogs) => [...prevBlogs, ...fetchedBlogs]);
    } catch (error) {
      // Handle the error if the API request fails
      console.error(error);
    } finally {
      setLoadingBlogs(false);
    }
  }
  

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{ blogs, setBlogs, loadingBlogs, setLoadingBlogs }}
    >
      <div className="App mx-auto max-w-7xl px-6 lg:px-8 min-h-screen flex flex-col justify-between gap-y-10">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/upcomingEvents" element={<UpcomingEvents />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </BlogContext.Provider>
  );
}

export default App;
