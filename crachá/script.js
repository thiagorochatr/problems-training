const links = {
    github: "thiagorochatr",
    youtube: "channel/UCqNMMhWfBWZZ-snXxtv63Pg",
    instagram: "thiagorochatr",
    facebook: "thiago.rocha.56884",
    twitter: "thiagorochatr1"
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${links[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${links.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userPic.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()