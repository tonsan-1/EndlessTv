import React from 'react'

import './Footer.css'

export default function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="footer__content">
                            <div class="footer__links">
                                <a href="/">Privacy policy</a>
                                <a href="/">Terms and conditions</a>
                            </div>
                            <small class="footer__copyright">© 2021 EndlessTV. All rights reserved.</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
