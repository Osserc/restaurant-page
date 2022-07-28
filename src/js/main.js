import * as homepage from "./homepage"
import * as menu from "./menu"
import * as contacts from "./contacts"
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

const homeTab = document.getElementById(`home-tab`)
const menuTab = document.getElementById(`menu-tab`)
const contactsTab = document.getElementById(`contacts-tab`)

homeTab.addEventListener(`click`, function() {
    console.log(`\`sup`)
})
menuTab.addEventListener(`click`, function() {
    console.log(`\`sup`)
})
contactsTab.addEventListener(`click`, function() {
    console.log(`\`sup`)
})

