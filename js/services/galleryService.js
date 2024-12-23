var gImgs = [
    { id: 1, url: "https://picsum.photos/500?random=1", keywords: ["funny", "cat"] },
    { id: 2, url: "https://picsum.photos/500?random=2", keywords: ["nature", "sea"] },
    { id: 3, url: "https://picsum.photos/500?random=3", keywords: ["mountain", "adventure"] },
    { id: 4, url: "https://picsum.photos/500?random=4", keywords: ["sky", "night"] },
    { id: 5, url: "https://picsum.photos/500?random=5", keywords: ["forest", "tree"] },
    { id: 6, url: "https://picsum.photos/500?random=6", keywords: ["forest", "tree"] },
    { id: 7, url: "https://picsum.photos/500?random=7", keywords: ["forest", "tree"] },
    { id: 8, url: "https://picsum.photos/500?random=8", keywords: ["forest", "tree"] },
    { id: 9, url: "https://picsum.photos/500?random=9", keywords: ["forest", "tree"] },
    { id: 10, url: "https://picsum.photos/500?random=10", keywords: ["forest", "tree"] },
    { id: 11, url: "https://picsum.photos/500?random=11", keywords: ["forest", "tree"] },
    { id: 12, url: "https://picsum.photos/500?random=12", keywords: ["forest", "tree"] },
    { id: 13, url: "https://picsum.photos/500?random=13", keywords: ["forest", "tree"] },
    { id: 14, url: "https://picsum.photos/500?random=14", keywords: ["forest", "tree"] },
    { id: 15, url: "https://picsum.photos/500?random=15", keywords: ["forest", "tree"] },
    { id: 16, url: "https://picsum.photos/500?random=16", keywords: ["forest", "tree"] },
    { id: 17, url: "https://picsum.photos/500?random=17", keywords: ["forest", "tree"] },
    { id: 18, url: "https://picsum.photos/500?random=18", keywords: ["forest", "tree"] },
    { id: 19, url: "https://picsum.photos/500?random=19", keywords: ["forest", "tree"] },
    { id: 20, url: "https://picsum.photos/500?random=20", keywords: ["forest", "tree"] }
]

function renderImages() {
    const rowContainer = document.querySelector("#gallery")
    rowContainer.innerHTML = ""

    gImgs.forEach((img) => {
        const column = document.createElement("div")
        column.classList.add("column")

        const image = document.createElement("img")
        image.classList.add("demo", "cursor")
        image.src = img.url
        image.alt = img.keywords.join(", ")
        image.style.width = "100%"

        image.onclick = () => {
            currentImg(img.url)
            setImg(img.id)
        }

        column.appendChild(image)
        rowContainer.appendChild(column)
    })
}
