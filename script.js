(function () {
    // let pathname = "/r/square/clean_square.png"
    //let pathname = "/square/"
    let pathname = window.location.pathname
    // let pathname = window.location.href.split('?')[1];

    // console.log(pathname)

    pathname = pathname.substring(1, pathname.length);
    // console.log(pathname)

    pathname = pathname.split('/');
    // console.log(pathname)

    let file_name;
    if (pathname.length >= 2) {
        // console.log("more than 1", pathname)

        file_name = pathname.slice(1).join("/");
        // console.log(file_name)
        console.log(pathname.slice(1).join("/"))
        for (let i = 1; i < pathname.length; i++) {
            delete pathname[i];
            // console.log(pathname)
        }
    }


    pathname = pathname.join("");
    // console.log(pathname);

    let found_social = false;

    if (pathname.trim() == "discord" || pathname.trim() == "disc") {
        found_social = true;
        window.location.href = "https://discord.com/users/408288183554670592"
        return;
    }
    if (pathname.trim() == "github" || pathname.trim() == "git" || pathname.trim() == "gh") {
        found_social = true;
        window.location.href = "https://github.com/nikeedev"
        return;
    }
    if (pathname.trim() == "youtube" || pathname.trim() == "yt") {
        found_social = true;
        window.location.href = "https://www.youtube.com/@nikeedev"
        return;
    }
    if (pathname.trim() == "bluesky" || pathname.trim() == "bsky") {
        found_social = true;
        window.location.href = "https://twitter.com/nikeedev"
        return;
    }

    const fileExt = [
        "html",
        "css",
        "js",
        "json",
        "xml",
        "txt",
        "md",
        "jpg",
        "png",
        "gif",
        "svg",
        "pdf",
        "doc",
        "docx",
        "xls",
        "xlsx",
        "ppt",
        "pptx",
        "zip",
        "tar",
        "gz",
        "mp3",
        "mp4",
        "wav",
        "avi",
        "mov",
        "wmv",
        "rs",
        "cpp",
        "c",
        "py",
        "java",
        "go",
    ];

    let found = false;

    if (!found_social) {
        fileExt.forEach(a => {
            if (pathname.endsWith(a)) {
                found = true;
                window.location.href = `https://github.com/nikeedev/${pathname}/blob/master${file_name}`;
                return;
            }
        });
    }

    if (pathname.trim() == "" && !found) {
        window.location.href = `/`
        return;
    } else {
        window.location.href = `https://github.com/nikeedev/${pathname}/`;
        return;
    }
})()