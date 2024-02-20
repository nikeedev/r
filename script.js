// let pathname = "/r/square/clean_square.png"
let pathname = window.location.pathname

pathname = pathname.substring(1, pathname.length);

pathname = pathname.split('/');

delete pathname[0];

let repo_name = pathname[1];
delete pathname[1];


pathname = pathname.join("/");
pathname = pathname.substring(1, pathname.length);
console.log(pathname);


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
];

fileExt.forEach(a => {
    if (pathname.endsWith(a)) {
        window.location.href = `https://github.com/nikeedev/${repo_name}/blob/master${pathname}`;
    } else if (pathname.trim() === "") {
        window.location.href = `/`
    } else {
        window.location.href = `https://github.com/nikeedev/${repo_name}/`;
    }
})
