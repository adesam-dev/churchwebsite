import React, { useState }  from "react";
import pastor1 from "../assets/image1.jpg";
import "./Media.css";
function Media () {
    const [activeTab, setActiveTab] = useState("livestream");

    return (
        <div className="media">
            <h2>Media</h2>

            <div className="media-tabs">
                <button onClick={ () => setActiveTab("livestream")}>
                    Livestream
                </button>
                <button onClick={ () => setActiveTab("album")}>
                    Album
                </button>
            </div>

            <div className="media-content">
                {activeTab === "livestream" && (
                    <div className="livestream">
                        <h3>Live Service</h3>

                        <iframe
                        width="560"
                        height="325"

                        title="Livestream"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                        </iframe>       
                        </div>       
                      )}

                      {activeTab === "album" && (
                        <div className="album">
                            <h3>Church Album</h3>
                            <div className="album-grid">
                                <img src={pastor1} alt="Church Event 1" />
                                <img src={pastor1} alt="Church Event 1" />
                                <img src={pastor1} alt="Church Event 1" />
                                </div>
                                </div>
                      )}
            </div>
        </div>
    )
}

export default Media;