import React from 'react'

export default function ErrorPage() {
    return (
        <>
            <main id="main">
                
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>404</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>404 Page</li>
                            </ol>
                        </div>

                    </div>
                </section>

                <section className="inner-page">
                    <div className="container">
                        <p>
                            not found
                        </p>
                    </div>
                </section>

            </main>
        </>
    )
}
