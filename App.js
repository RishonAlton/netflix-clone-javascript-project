const tabItems = document.querySelectorAll(".tab")
const tabContent = document.querySelectorAll(".tab-content")


const selectItem = (e) => {
    tabItems.forEach(item => item.classList.remove("active"))
    tabContent.forEach(item => item.classList.remove("show"))
    e.currentTarget.classList.add("active")
    const tabContentItem = document.getElementById(`${e.currentTarget.id}-content`)
    tabContentItem.classList.add("show")
}


tabItems.forEach(item => item.addEventListener("click", selectItem))