import React from 'react'

import './Footer.css'

export default function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 order-4 order-md-1 order-lg-4 order-xl-1">
                        <div class="footer__flixtv">
                            <img src="img/logo.svg" alt="" />
                        </div>
                        <p class="footer__tagline"></p>
                        <div class="footer__social">

                        </div>

                        <div class="col-6 col-md-4 col-lg-3 col-xl-2 order-1 order-md-2 order-lg-1 order-xl-2 offset-md-2 offset-lg-0 offset-xl-1">
                            <h6 class="footer__title">FlixTV</h6>
                            <div class="footer__nav">
                                <a href="about.html">About us</a>
                                <a href="profile.html">My profile</a>
                                <a href="pricing.html">Pricing plans</a>
                                <a href="contacts.html">Contacts</a>
                            </div>
                        </div>

                        <div class="col-12 col-md-8 col-lg-6 col-xl-4 order-3 order-lg-2 order-md-3 order-xl-3">
                            <div class="row">
                                <div class="col-12">
                                    <h6 class="footer__title">Browse</h6>
                                </div>

                                <div class="col-6">
                                    <div class="footer__nav">
                                        <a href="live.html">Live TV</a>
                                        <a href="live.html">Live News</a>
                                        <a href="live.html">Live Sports</a>
                                        <a href="live.html">Streaming Library</a>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="footer__nav">
                                        <a href="category.html">TV Shows</a>
                                        <a href="category.html">Movies</a>
                                        <a href="category.html">Kids</a>
                                        <a href="category.html">Collections</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-4 col-lg-3 col-xl-2 order-2 order-lg-3 order-md-4 order-xl-4">
                            <h6 class="footer__title">Help</h6>
                            <div class="footer__nav">
                                <a href="privacy.html">Account & Billing</a>
                                <a href="privacy.html">Plans & Pricing</a>
                                <a href="privacy.html">Supported devices</a>
                                <a href="privacy.html">Accessibility</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
