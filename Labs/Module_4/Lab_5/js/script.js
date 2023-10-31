class News {
    constructor() {
        this.stories = [
            {
                id: 1,
                title: "Election Results",
                content: "Newly elected minister...",
            },
            {
                id: 2,
                title: "Sporting Success",
                content: "World Cup winners...",
            },
            {
                id: 3,
                title: "Tornado Warning",
                content: "Residents should prepare...",
            },
        ];
    }

    addStory(title, content) {
        const allIDs = this.stories.map(function (story) {
            return story.id;
        });
        let maxID = Math.max(allIDs);

        let newStory = {
            id: (maxID += 1),
            title: title,
            content: content,
        };
        this.stories.push(newStory);
    }
}
let news = new News();

function addNewStory(){
    const title = document.getElementById("new-story-title").value;
    const content = document.getElementById("new-story-content").value;

    news.addStory(title, content);
    updateNews();
}

function updateNews() {
    document.querySelector("#news-list").innerHTML = "";
    for (let story in news.stories) {
        const storyTitle = news.stories[story].title;
        const storyContent = news.stories[story].content;

        const template = document
            .getElementById("news-template")
            .content.cloneNode(true);

        template.querySelector(".card-title").innerText = storyTitle;
        template.querySelector(".card-text").innerText = storyContent;
        document.querySelector("#news-list").appendChild(template);
    }
}
updateNews();
setInterval(updateNews, 5000);