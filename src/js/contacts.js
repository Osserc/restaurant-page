import { page } from "./globals"

function showContacts() {
    page.replaceChildren(buildContacts())
}

function buildContacts() {
    const holder = document.createElement(`div`)
    holder.classList.add(`d-flex`, `flex-column`, `align-items-center`, `card`, `bg-danger`, `text-dark`, `w-100`, `px-5`, `py-2`, `fade-in`)
    holder.append(buildHeader(), buildAddress(), buildEmail(), buildPhone())
    return holder
}

function buildHeader() {
    const header = document.createElement(`h3`)
    header.classList.add(`fade-in`)
    header.innerHTML = `Contacts`
    return header
}

function buildAddress() {
    const addressHolder = document.createElement(`div`)
    addressHolder.classList.add(`d-flex`, `align-items-center`, `justify-content-between`, `w-100`, `fade-in`)
    const addressLabel = document.createElement(`div`)
    addressLabel.classList.add(`fw-bold`)
    addressLabel.innerHTML = `Location`
    const addressContent = document.createElement(`div`)
    addressContent.innerHTML = `Reachcliff cave`
    addressHolder.append(addressLabel, addressContent)
    return addressHolder
}

function buildEmail() {
    const emailHolder = document.createElement(`div`)
    emailHolder.classList.add(`d-flex`, `align-items-center`, `justify-content-between`, `w-100`, `fade-in`)
    const emailLabel = document.createElement(`div`)
    emailLabel.classList.add(`fw-bold`)
    emailLabel.innerHTML = `Email`
    const emailContent = document.createElement(`div`)
    emailContent.innerHTML = `eola_business@namirasden.com`
    emailHolder.append(emailLabel, emailContent)
    return emailHolder
}

function buildPhone() {
    const phoneHolder = document.createElement(`div`)
    phoneHolder.classList.add(`d-flex`, `align-items-center`, `justify-content-between`, `w-100`, `fade-in`)
    const phoneLabel = document.createElement(`div`)
    phoneLabel.classList.add(`fw-bold`)
    phoneLabel.innerHTML = `Telephone`
    const phoneContent = document.createElement(`div`)
    phoneContent.innerHTML = `341 598 21 74`
    phoneHolder.append(phoneLabel, phoneContent)
    return phoneHolder
}

export { showContacts }