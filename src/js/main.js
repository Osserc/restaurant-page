import * as homepage from "./homepage"
import * as menu from "./menu"
import * as contacts from "./contacts"
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

const homeTab = document.getElementById(`home-tab`)
const menuTab = document.getElementById(`menu-tab`)
const contactsTab = document.getElementById(`contacts-tab`)

homeTab.addEventListener(`click`, homepage.showHomepage)

menuTab.addEventListener(`click`, menu.showMenu)

contactsTab.addEventListener(`click`, contacts.showContacts)

homepage.showHomepage()