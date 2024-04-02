function isOfficialDomain(hostname) {
    let officialDomains = ['cert.at', 'energy-cert.at', 'govcert.gv.at'];
    return officialDomains.some(function(domain) {
        return hostname.endsWith(domain);
    });
}

document$.subscribe(function() {
    let deploymentNote = `<aside class="md-banner">
        <div class="md-banner__inner md-grid md-typeset">
            You're seeing an unofficial or development version of the documentation.
            The content may not refer the current state nor be provided by CERT.at. <br>
            Please visit <a href="https://cert.at">cert.at</a> to read the official documentation.
        </div>
    </aside>`;

    if (!isOfficialDomain(window.location.hostname)) {
        var banner = document.createElement('div');
        banner.innerHTML = deploymentNote;
        var announcementBar = document.querySelector('#announcement');

        if (announcementBar) {
            announcementBar.insertBefore(banner, announcementBar.firstChild);
        } else {
            document.body.insertBefore(banner, document.body.firstChild);
        }
    }
})