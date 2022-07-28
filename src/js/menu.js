import { page } from "./globals"
import * as dishes from "./dishes"

function showMenu() {
    page.replaceChildren(...buildMenu())
}

function buildMenu() {
    let menu = []
    dishes.allDishes.forEach((dish) => {
        menu.push(buildDish(dish))
    })
    return menu
}

function buildDish(dish) {
    const singleDish = document.createElement(`div`)
    singleDish.classList.add(`d-flex`, `flex-column`, `align-items-center`, `card`, `bg-danger`, `text-dark`, `px-5`, `py-2`, `fade-in`)
    singleDish.append(buildTitle(dish), buildImage(dish), buildDescription(dish), buildPrice(dish))
    return singleDish
}

function buildTitle(dish) {
    const dishTitle = document.createElement(`h3`)
    dishTitle.classList.add(`fw-bold`)
    dishTitle.innerHTML = dish.title
    return dishTitle
}

function buildImage(dish) {
    const dishImage = document.createElement(`div`)
    dishImage.classList.add(`img-fluid`, `border`, `border-3`, `border-dark`)
    dishImage.appendChild(dish.image)
    return dishImage
}

function buildDescription(dish) {
    const dishDescription = document.createElement(`div`)
    dishDescription.classList.add(`text-center`)
    dishDescription.innerHTML = dish.description
    return dishDescription
}

function buildPrice(dish) {
    const dishPrice = document.createElement(`h4`)
    dishPrice.innerHTML = `${dish.price} $`
    return dishPrice
}

export { showMenu }