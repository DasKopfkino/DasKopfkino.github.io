(function() {
    var hasFrame = window.parent != window,
        scripts = document.getElementsByTagName('script'),
        current = scripts[scripts.length - 1],
        config = current.getAttribute('data-config'),
        head = document.getElementsByTagName("head")[0],
        dest = location.href.replace(/scmplayer\=true/g, 'scmplayer=false'),
        destHost = dest.substr(0, dest.indexOf('/', 10)),
        scm = current.getAttribute('src')
            .replace('scmplayer.co', 'scmplayer.net')
            .replace('https:', location.protocol)
            .replace('http:', location.protocol)
            .replace(/script\.js.*/g, 'scm.html') + '#' + dest,
        isOutside = !hasFrame || location.href.indexOf("scmplayer=true") > 0;

    // Function to initialize
    var init = function() {
        if (!document.body) {
            setTimeout(init, 10);
            return;
        }
        if (isOutside) {
            outside();
        } else {
            inside();
        }
    };

    // Outside frame setup
    var outside = function() {
        var css = `
            html, body { overflow: hidden; }
            body { margin: 0; padding: 0; border: 0; }
            img, a, embed, object, div, address, table, iframe, p, span, form, header, section, footer {
                display: none; border: 0; margin: 0; padding: 0;
            }
            #scmframe {
                display: block;
                background-color: transparent;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1667;
            }
        `;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'scmcss';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);

        var scmframe = document.createElement('iframe');
        scmframe.frameBorder = 0;
        scmframe.id = "scmframe";
        scmframe.allowTransparency = true;
        scmframe.src = scm;
        document.body.insertBefore(scmframe, document.body.firstChild);

        var resize = function() {
            scmframe.style.height = window.innerHeight + "px";
        };

        window.addEventListener('resize', resize);
        resize();
    };

    // Inside frame setup
    var inside = function() {
        // Update the parent window's title
        window.top.document.title = document.title;
    };

    // Initialize the player for both desktop and mobile
    init();
})();