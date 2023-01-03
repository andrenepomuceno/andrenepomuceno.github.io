import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

function analytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-8X67LC7LY9');
}

analytics();