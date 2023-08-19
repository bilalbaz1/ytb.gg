import React from 'react'
import VideoCard from './components/VideoCard';

interface IUrlAndSetUrl {
    url: string | null;
    setUrl: (newUrl: string) => void;
}

export default function HomePage({ urlAndSetUrl }: { urlAndSetUrl: IUrlAndSetUrl }) {
    const { url, setUrl } = urlAndSetUrl;

    const changeUrl = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formElement = event.target as HTMLFormElement;
        const newUrl = formElement.elements.namedItem('url_input') as HTMLInputElement;
        if (newUrl) {
            setUrl(newUrl.value);
        }
    };

    return (
        <div>

            <section id="hero" className="d-flex align-items-center">
                <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9 text-center">
                            <h1>ytb.gg</h1>
                            <h2>Youtube URL Kısaltma Ve Videoyu Uygulama Üzerinden Açma</h2><br />
                            <p>Twitter gibi, bağlantıyı uygulama içinde açan platformlarda kullanılabilir. Videoyu youtube uygulamasında açarak etkileşim kaybının önüne geçebilir.</p>
                        </div>
                    </div>


                    {/* <div className="text-center">
                        <a href="#about" className="btn-get-started scrollto">Get Started</a>
                    </div> */}

                    <form onSubmit={changeUrl}>
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col col-lg-9 col-md-9 col-sm-9 col-xs-9 ">
                                    <input type="text" className="form-control" name='url_input' placeholder="YouTube Video URL veya VideoId yazın..." />
                                </div>
                                <div className="col col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <button type="submit" className="btn btn-primary mb-2">GO</button>
                                </div>

                            </div>
                        </div>
                    </form>

                    {
                        (url != null && url !== "") ?
                            VideoCard(url)
                            :
                            <div className="container">
                                <p>Örnek Normal URL = <a target='_blank' href='https://www.youtube.com/watch?v=jNQXAC9IVRw'>https://www.youtube.com/watch?v=jNQXAC9IVRw</a></p>
                                <p>Örnek Kısa URL = <a target='_blank' href='https://ytb.gg/jNQXAC9IVRw'>https://ytb.gg/jNQXAC9IVRw</a></p>
                            </div>
                    }

                    <div className="row icon-boxes">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="ri-command-line"></i></div>
                                <h4 className="title">Etkileşimleri Kaçırma</h4>
                                <p className="description">Etkileşimleri Kaçırma</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon"><i className="ri-command-line"></i></div>
                                <h4 className="title">Youtube Video URL Kısaltma</h4>
                                <p className="description">Youtube Video URL Kısaltma</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className="ri-command-line"></i></div>
                                <h4 className="title">Açık Kaynak Ve Ücretsizdir</h4>
                                <p className="description">gitlab</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
                            <div className="icon-box">
                                <div className="icon"><i className="ri-command-line"></i></div>
                                <h4 className="title">Nemo Enim</h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




        </div>
    )
}
