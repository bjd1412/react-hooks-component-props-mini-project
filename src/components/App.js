import React from "react";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList";
import blogData from "../data/blog";


function App() {
  return (
    <div className="App">
      <Header name=" New Reactions"/>
      <About about="Personal blog by Brendan Dempsey,
      a newcomer in the field of Coding "/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
