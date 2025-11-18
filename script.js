(function () {
    let final = "";
    let pathname = "/square/clean_square.png"
    // let pathname = "/square/"
    // let pathname = window.location.pathname
    // let pathname = final.split('?')[1];

    // console.log(pathname)

    pathname = pathname.substring(1, pathname.length);
    //console.log(pathname)

    let save_for_file = `${pathname}`;
    // ^^^^^^^^^^^^^^ save the repo and file name in case it isnt a social link 


    pathname = pathname.split('/'); 
    // console.log(pathname)

    let file_name;
    if (pathname.length >= 2) {
        // console.log("more than 1", pathname)

        file_name = pathname.slice(1).join("/");
        // console.log(file_name)
        // console.log(pathname.slice(1).join("/"))
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
        final = "https://discord.com/users/408288183554670592"
    }
    else if (pathname.trim() == "github" || pathname.trim() == "git" || pathname.trim() == "gh") {
        found_social = true;
        final = "https://github.com/nikeedev"
    }
    else if (pathname.trim() == "youtube" || pathname.trim() == "yt") {
        found_social = true;
        final = "https://www.youtube.com/@nikeedev"
    }
    else if (pathname.trim() == "bluesky" || pathname.trim() == "bsky") {
        found_social = true;
        final = "https://bsky.app/profile/nikee.dev"
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
        "cs"
    ];

    let found = false;
    
    pathname = save_for_file;

    if (!found_social) { 
        // console.log(pathname)
        
        fileExt.forEach(a => {
            // console.log(pathname)
            if (pathname.endsWith(a)) {
                let newpth = save_for_file.split("/");
                found = true;
                final = `https://github.com/nikeedev/${newpth[0]}/blob/master/${newpth[1]}`;
            }
            found
        });
    }
    
    pathname = save_for_file.split("/");


    //console.log(pathname)
    if (pathname[1] == undefined && !found) {
        final = `https://github.com/nikeedev/${pathname[0]}/`;
    }
    
    // console.log(final)
    window.location.href = final;
})()
