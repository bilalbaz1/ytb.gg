import React from "react";
import regexHelper from '../../../helpers/regexHelper';

export default function VideoCard(enterUrl: string) {

    const baseUrl = "https://www.youtube.com/watch?v=";
    let videoId: string = regexHelper.extractVideoId(enterUrl);

    let shorUrl = `https://ytb.gg/${videoId}`;
    let youtubeUrl = `${baseUrl}${videoId}`;

    return (
        <div className="col-md-12 col-lg-12 mb-12 mb-lg-12 mt-3">
            <div className="icon-box">
                <b className="title">{shorUrl}</b>
                <p className="description">Yukarıdaki bağlantıyı kopyalayın.</p>
            </div>
            <iframe title="YouTube Video" width="560" height="315" src={youtubeUrl}></iframe>

        </div>
    );
}