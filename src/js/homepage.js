import { page } from "./globals"
import homepageImage from "../images/homepageImage.jpg"

const homepageImageLoaded = new Image()
homepageImageLoaded.src = homepageImage

function showHomepage() {
    page.replaceChildren(buildHomepage())
}

function buildHomepage(dish) {
    const holder = document.createElement(`div`)
    holder.classList.add(`d-flex`, `flex-column`, `align-items-center`, `card`, `bg-danger`, `text-dark`, `gap-2`, `px-5`, `py-2`, `fade-in`)
    holder.append(buildHeader(), buildImage(), buildCopy())
    return holder
}

function buildHeader() {
    const header = document.createElement(`h3`)
    header.classList.add(`fade-in`)
    header.innerHTML = `A life altering meal awaits you...`
    return header
}

function buildImage() {
    const image = document.createElement(`div`)
    image.classList.add(`img-fluid`, `border`, `border-3`, `border-dark`, `fade-in`)
    image.appendChild(homepageImageLoaded)
    return image
}

function buildCopy() {
    const copyHolder = document.createElement(`div`)
    copyHolder.classList.add(`text-center`, `w-100`, `fade-in`)
    const firstParagraph = document.createElement(`div`)
    firstParagraph.innerHTML = `Do you have a taste for the exotic?`
    const secondParagraph = document.createElement(`div`)
    secondParagraph.innerHTML = `Do you want to find a group of like-minded people who will not judge fo your peculiar inclinations?`
    const thirdParagraph = document.createElement(`div`)
    thirdParagraph.innerHTML = `Namira's Den is exactly what you need. You will have the chance to indulge in your deepest desires without fear of judgment, surrounded by kindred spirits.`
    const fourthParagraph = document.createElement(`div`)
    fourthParagraph.innerHTML = `Make a reservation today!`
    copyHolder.append(firstParagraph, secondParagraph, thirdParagraph, fourthParagraph)
    return copyHolder
}

export { showHomepage }