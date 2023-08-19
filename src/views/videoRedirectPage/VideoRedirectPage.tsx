import ErrorPage from '../../views/errorPage/ErrorPage';
import getMobileOperatingSystem from '../../helpers/deviceHelper';
import regexHelper from '../../helpers/regexHelper';
import { useParams } from 'react-router-dom';

export default function VideoRedirectPage() {
    const { '*': id } = useParams();

    if (typeof id == "undefined") {
        return ErrorPage();
    }

    const baseUrl = "https://www.youtube.com/watch?v=";
    const device = getMobileOperatingSystem();

    let videoId: string = regexHelper.extractVideoId(id);



    if (device === "android") {
        const mobileUrl = `vnd.youtube://watch?v=${videoId}`;

        //const intent = Intent.parseUri(intentUri, Intent.URI_INTENT_SCHEME);
        // if (intent) {
        //     startActivity(intent);
        // }
        window.location.href = mobileUrl;
    } else if (device === "ios") {
        const mobileUrl = `youtube://watch?v=${videoId}`;

        window.location.href = mobileUrl;

        // if (UIApplication.shared.canOpenURL(url)) {
        //     UIApplication.shared.openURL(url);
        // }
    } else {
        window.location.href = `${baseUrl}${videoId}`;
    }


    return (
        <>
            <main id="main">

                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Video Page</h2>
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Video</li>
                            </ol>
                        </div>

                    </div>
                </section>

                <section className="inner-page">
                    <div className="container">
                        <a href={`${baseUrl}${videoId}`} > {`${baseUrl}${videoId}`} </a>
                        <iframe title={`${videoId}`} width="350" height="600" src={`${baseUrl}${videoId}`}></iframe>
                    </div>
                </section>

            </main>
        </>
    )
}
