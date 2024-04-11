// let pathname = "/r/square/clean_square.png"
//let pathname = "/square/"
let pathname = window.location.pathname
// let pathname = window.location.href.split('?')[1];

console.log(pathname)

pathname = pathname.substring(1, pathname.length);
console.log(pathname)

pathname = pathname.split('/');
console.log(pathname)

let repo_name;
if (pathname.length >= 2) {
    console.log("more than 1", pathname)

    repo_name = pathname[1];
    delete pathname[1];
}


pathname = pathname.join("");
console.log(pathname);

let found_social = false;

if (pathname.trim() == "discord" || pathname.trim() == "disc") {
    found_social = true;
    window.location.href = "https://discord.com/users/408288183554670592"
} else if (pathname.trim() == "github" || pathname.trim() == "git" || pathname.trim() == "gh") {
    found_social = true;
    window.location.href = "https://github.com/nikeedev"
} else if (pathname.trim() == "youtube" || pathname.trim() == "yt") {
    found_social = true;
    window.location.href = "https://www.youtube.com/@nikeedev"
} else if (pathname.trim() == "twitter" || pathname.trim() == "tw" || pathname.trim() == "twtr") {
    found_social = true;
    window.location.href = "https://twitter.com/nikeedev"
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
];

let found = false;

if (found_social != true) {
    fileExt.forEach(a => {
        if (pathname.endsWith(a)) {
            found = true;
            window.location.href = `https://github.com/nikeedev/${repo_name}/blob/master${pathname}`;
        }
    });
}

if (pathname.trim() === "" && !found) {
    window.location.href = `/`
} else {
    window.location.href = `https://github.com/nikeedev/${repo_name}/`;
}

