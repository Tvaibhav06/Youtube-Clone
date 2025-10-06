import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import moment from "moment/moment";
import { API_KEY } from "../../data";
import { valueConverter } from "../../data";
import { useParams } from "react-router-dom";
export default function PlayVideo() {
  const { videoId } = useParams();
  console.log("PlayVideo videoId:", videoId); // Debug log
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const fetchVideoData = async () => {
    if (!videoId) return;
    const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    try {
      const response = await fetch(videoDetails_url);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setApiData(data.items[0]);
      } else {
        console.error("No video data found for ID:", videoId);
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };
  const fetchOtherData = async () => {
    const channelId = apiData ? apiData.snippet.channelId : "";
    if (!channelId) return;

    try {
      // Fetch channel data
      const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;
      const channelResponse = await fetch(channel_url);
      const channelData = await channelResponse.json();
      if (channelData.items && channelData.items.length > 0) {
        setChannelData(channelData.items[0]);
      }

      // Fetch comment data
      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&maxResults=50&key=${API_KEY}`;
      const commentResponse = await fetch(comment_url);
      const commentData = await commentResponse.json();
      if (commentData.items) {
        setCommentData(commentData.items);
      }
    } catch (error) {
      console.error("Error fetching channel/comment data:", error);
    }
  };
  useEffect(() => {
    fetchVideoData();
  }, [videoId]);
  useEffect(() => {
    if (apiData) {
      fetchOtherData();
    }
  }, [apiData]);
  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      {videoId ? (
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
          title="YouTube video player"
        ></iframe>
      ) : (
        <div
          className="video-placeholder"
          style={{
            width: "100%",
            height: "400px",
            backgroundColor: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Loading video...</p>
        </div>
      )}
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? valueConverter(apiData.statistics.viewCount) : "1.6 M"}{" "}
          views •{" "}
          {apiData
            ? moment(apiData.snippet.publishedAt).fromNow()
            : "1 day ago"}
        </p>
        <div className="actions">
          <span>
            <img className="icon-img" src={like} alt="like" />{" "}
            {apiData ? valueConverter(apiData.statistics.likeCount) : "155K"}
          </span>
          <span>
            <img className="icon-img" src={dislike} alt="dislike" />{" "}
            {apiData ? valueConverter(apiData.statistics.dislikeCount) : "20K"}
          </span>
          <span>
            <img className="icon-img" src={share} alt="share" /> Share
          </span>
          <span>
            <img className="icon-img" src={save} alt="save" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        {channelData && channelData.snippet.thumbnails ? (
          <img
            className="publisher-img"
            src={channelData.snippet.thumbnails.default.url}
            alt="Channel"
          />
        ) : (
          <img
            className="publisher-img"
            src={user_profile}
            alt="Default Channel"
          />
        )}
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "MrBeast"}</p>
          <span>
            {channelData
              ? valueConverter(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Channel that makes learning Easy"}
        </p>
        <hr />
        <h4>
          {apiData ? valueConverter(apiData.statistics.commentCount) : "13K"}{" "}
          Comments
        </h4>
        {commentData && commentData.length > 0 ? (
          commentData.map((item, index) => {
            return (
              <div className="comment" key={index}>
                <img
                  className="comment-img"
                  src={
                    item.snippet.topLevelComment.snippet.authorProfileImageUrl
                  }
                  alt="Commenter"
                />
                <div>
                  <h3>
                    {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                    <span>
                      {moment(
                        item.snippet.topLevelComment.snippet.publishedAt
                      ).fromNow()}
                    </span>
                  </h3>
                  <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div className="comment-action">
                    <img className="icon-img" src={like} alt="" />
                    <span>
                      {valueConverter(
                        item.snippet.topLevelComment.snippet.likeCount
                      )}
                    </span>
                    <img className="icon-img" src={dislike} alt="" />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading comments...</p>
        )}
      </div>
    </div>
  );
}
