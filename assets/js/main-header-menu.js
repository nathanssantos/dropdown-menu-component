const mainHeader = document.querySelector(".main-header")
const dropdownMenu = document.querySelector(".dropdown-menu ul")
const dropdownMenuItems = document.querySelectorAll(".dropdown-menu-item")
const dropdownButton = document.querySelector(".main-header-dropdown-button")
const HEADER_HEIGHT = 70
const DROPDOWN_MENU_HEIGHT = 360
const TOP_DISTANCE_TO_HIDE_THE_HEADER = 330


// SHOW/HIDE MAIN HEADER ON SCROLL
const hideMainHeader = () => mainHeader.style.top = `-${HEADER_HEIGHT}px`
let previousScrollPosition = window.pageYOffset

const toggleMainHeader = window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset
    if (previousScrollPosition > currentScrollPosition || currentScrollPosition < TOP_DISTANCE_TO_HIDE_THE_HEADER) mainHeader.style.top = "0"
    else hideMainHeader()
    previousScrollPosition = currentScrollPosition
}


// TOGGLE DROPDOWN MENU
let dropdownMenuState = 0
const openDropdownMenu = () => {
    dropdownMenu.style.height = `${DROPDOWN_MENU_HEIGHT}px`
}

const closeDropdownMenu = () => {
    dropdownMenu.style.height = "0"
    dropdownMenuState = 0
}

const toggleDropdownMenu = n => {
    dropdownMenuState += n
    switch (dropdownMenuState) {
        case 1:
            openDropdownMenu()
            break
        case 2:
            closeDropdownMenu()
            break
        default:
            closeDropdownMenu()
    }
}

const closeDropdownMenuSelectingItem = () => {
    dropdownMenuItems.forEach((item) => {
        item.addEventListener("click", closeDropdownMenu)
    })
}
closeDropdownMenuSelectingItem()