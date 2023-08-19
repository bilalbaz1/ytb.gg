import React from 'react'

export default function AboutPage() {
    return (
        <>
            <main id="main">
                
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>About</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>About</li>
                            </ol>
                        </div>

                    </div>
                </section>

                <section className="inner-page">
                    <div className="container">
                        <p>
                        About Page
                        </p>
                    </div>
                </section>

            </main>
        </>
    )
}
