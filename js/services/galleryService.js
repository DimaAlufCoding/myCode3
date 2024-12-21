var gImgs = [
    { id: 1, url: "assets/1.jpeg", keywords: ["funny", "cat"] },
    { id: 2, url: "assets/2.jpeg", keywords: ["nature", "sea"] },
    { id: 3, url: "assets/3.jpeg", keywords: ["mountain", "adventure"] },
    { id: 4, url: "assets/4.jpeg", keywords: ["sky", "night"] },
    { id: 5, url: "assets/5.jpeg", keywords: ["forest", "tree"] }
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
