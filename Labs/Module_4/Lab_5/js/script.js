let stories = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

function updateNews(){
    for (let story in stories){
        let storyTitle = stories[story].title;
        let storyContent = stories[story].title;

        const template = document
            .getElementById("news-template")
            .content.cloneNode(true);

        template.querySelector(".card-title").innerText = storyTitle;
        template.querySelector(".card-text").innerText = storyContent;
        document.querySelector("#news-list").appendChild(template);
    }
}
updateNews();