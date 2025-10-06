import React, { useEffect, useState } from "react";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment"
export default function Feed({ category }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const video_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(video_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div className="feed">
      {data.map((item, index) => {
        console.log("Feed video data:", item.id, item.snippet.title); 
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={index}>
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h3>{item.snippet.title}</h3>
            <h4>{item.snippet.channelTitle}</h4>
            <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        );
      })}
    </div>
  );
}
