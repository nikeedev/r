(function () {
    let final = "";
    const save_for_file = window.location.pathname.substring(1);
    let pathname = save_for_file.split('/');

    const repo = pathname[0];
    const file_name = pathname.slice(1).join("/");

    const social = {
        discord: "https://discord.com/users/408288183554670592",
        disc: "https://discord.com/users/408288183554670592",
        github: "https://github.com/nikeedev",
        git: "https://github.com/nikeedev",
        gh: "https://github.com/nikeedev",
        youtube: "https://www.youtube.com/@nikeedev",
        yt: "https://www.youtube.com/@nikeedev",
        bluesky: "https://bsky.app/profile/nikee.dev",
        bsky: "https://bsky.app/profile/nikee.dev"
    };

    // Social links
    if (social[repo]) {
        final = social[repo];
    }
    // Repository root
    else if (repo && !file_name) {
        final = `https://github.com/nikeedev/${repo}/`;
    }
    // Repository file or subdirectory
    else if (repo && file_name) {
        final = `https://github.com/nikeedev/${repo}/blob/main/${file_name}`;
    }

    if (final) {
        window.location.replace(final);
    }
})();

