import React, { useEffect, useState } from "react";
import "./Recommended.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { API_KEY, valueConverter } from "../../data";
import { Link } from "react-router-dom";
import moment from "moment";
export default function Recommended({ categoryId }) {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async () => {
    if (!categoryId) {
      console.log("No categoryId provided to Recommended component");
      setLoading(false);
      return;
    }
    
    setLoading(true);
    // Use Videos API with chart=mostPopular to get videos by category
    // If categoryId is 0 or invalid, fetch without videoCategoryId to get all popular videos
    let relatedVideo_url;
    if (categoryId === 0 || categoryId === "0") {
      relatedVideo_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=US&key=${API_KEY}`;
    } else {
      relatedVideo_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    }
    
    try {
      const response = await fetch(relatedVideo_url);
      const data = await response.json();
      
      console.log("Recommended API response:", data); // Debug log
      console.log("CategoryId being used:", categoryId); // Debug log
      
      // If error (like 404 for invalid category), try fetching without category filter
      if (data.error) {
        console.log("Error with categoryId, fetching all popular videos instead");
        const fallbackUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=US&key=${API_KEY}`;
        const fallbackResponse = await fetch(fallbackUrl);
        const fallbackData = await fallbackResponse.json();
        
        if (fallbackData.items && fallbackData.items.length > 0) {
          setApiData(fallbackData.items);
        } else {
          setApiData([]);
        }
      } else if (data.items && data.items.length > 0) {
        setApiData(data.items);
      } else {
        console.log("No recommended videos found for categoryId:", categoryId);
        setApiData([]);
      }
    } catch (error) {
      console.error("Error fetching recommended videos:", error);
      setApiData([]);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {loading ? (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>Loading recommendations...</p>
        </div>
      ) : apiData && apiData.length > 0 ? (
        apiData.map((item, index) => {
          const videoLink = `/video/${item.snippet.categoryId}/${item.id}`;
          console.log("Recommended video link:", videoLink); // Debug log
          return (
            <Link 
              to={videoLink} 
              className="side-video-list" 
              key={index}
            >
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{valueConverter(item.statistics.viewCount)} views • {moment(item.snippet.publishedAt).fromNow()}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>No recommendations available</p>
        </div>
      )}
    </div>
  );
}
