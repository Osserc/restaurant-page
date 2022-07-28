import { page } from "./globals"

function showHomepage() {
    page.replaceChildren(...buildHomepage())
}

function buildHomepage() {
    const newContent = [buildHeader(), buildCopy()]
    return newContent
}

function buildHeader() {
    const header = document.createElement(`h3`)
    header.classList.add(`fade-in`)
    header.innerHTML = `A life altering meal awaits you...`
    return header
}

function buildCopy() {
    const holder = document.createElement(`div`)
    holder.classList.add(`text-center`, `w-100`, `fade-in`)
    const firstParagraph = document.createElement(`div`)
    firstParagraph.innerHTML = `Do you have a taste for the exotic?`
    const secondParagraph = document.createElement(`div`)
    secondParagraph.innerHTML = `Do you want to find a group of like-minded people who will not judge fo your peculiar inclinations?`
    const thirdParagraph = document.createElement(`div`)
    thirdParagraph.innerHTML = `Namira's Den is exactly what you need. You will have the chance to indulge in your deepest desires without fear of judgment, surrounded by kindred spirits.`
    const fourthParagraph = document.createElement(`div`)
    fourthParagraph.innerHTML = `Make a reservation today!`
    holder.append(firstParagraph, secondParagraph, thirdParagraph, fourthParagraph)
    return holder
}

export { showHomepage }