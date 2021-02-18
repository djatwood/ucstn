// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        document.getElementById(el.getAttribute("href").slice(1)).scrollIntoView({ behavior: "smooth" })
    })
})

// Open / close all products
document.querySelectorAll(".toggleAllProducts").forEach(el => {
    el.addEventListener("click", toggleProducts)
})

const allProducts = document.querySelector(".allProducts")
const openAllProductsButton = document.querySelector("button.toggleAllProducts")
let allProductsOpen = window.matchMedia("(min-width: 1024px)").matches

if (allProducts) toggleProducts()
function toggleProducts() {
    if (allProductsOpen) {
        allProducts.classList.remove("scaleDown")
        allProducts.classList.add("scaleUp")
        openAllProductsButton.innerHTML = `${feather.icons["chevron-up"].toSvg()} Click to close all products`
    } else {
        allProducts.classList.remove("scaleUp")
        allProducts.classList.add("scaleDown")
        openAllProductsButton.innerHTML = `${feather.icons["chevron-down"].toSvg()} Click to view all products`
    }
    allProductsOpen = !allProductsOpen
}

// Quote Form
const cform = document.querySelector("#contact form")
if (cform) {
    const items = []

    cform.addEventListener("submit", event => {
        event.preventDefault()
        const form = new FormData(cform)
        const data = {}
        for (const [key, value] of form) data[key] = value

        data["items"] = items

        console.log(data)
        // fetch
    })

    const itemsContainer = cform.querySelector('.items tbody')
    const itemsContainerEmpty = cform.querySelector('.empty')
    const newItemContainer = cform.querySelector(".new-item")
    const newItemNameInput = newItemContainer.querySelector('input[type="text"]')
    const newItemQuantityInput = newItemContainer.querySelector('input[type="number"]')
    const newItemButton = newItemContainer.querySelector('button')

    newItemNameInput.addEventListener("keypress", pressedEnter)
    newItemQuantityInput.addEventListener("keypress", pressedEnter)

    function pressedEnter(event) {
        if (event.key == "Enter") {
            event.preventDefault()
            newItemButton.click()
        }
    }

    newItemButton.addEventListener("click", event => {
        event.preventDefault()

        const name = newItemNameInput.value
        const quantity = parseInt(newItemQuantityInput.value) || 0

        const tr = document.createElement("tr")
        const n = document.createElement("td")
        const q = document.createElement("td")
        const d = document.createElement("td")
        n.classList.add("p-2", "border-t")
        q.classList.add("p-2", "border-t")
        d.classList.add("p-2", "border-t", "text-right", "cursor-pointer")
        n.setAttribute("contenteditable", "true")
        q.setAttribute("contenteditable", "true")
        n.innerText = name
        q.innerText = quantity
        d.innerText = "✖ Remove"
        n.addEventListener("click", e => e.preventDefault())
        q.addEventListener("click", e => e.preventDefault())
        d.addEventListener("click", e => {
            e.preventDefault()
            const index = Array.from(itemsContainer.children).indexOf(tr)
            if (-1 == index) return
            items.splice(index - 1, 1)
            itemsContainer.removeChild(tr)
            if (items.length < 1) {
                itemsContainerEmpty.classList.remove("hidden")
            }
        })
        tr.appendChild(n)
        tr.appendChild(q)
        tr.appendChild(d)
        itemsContainer.appendChild(tr)

        items.push({ name, quantity })

        newItemNameInput.value = ""
        newItemQuantityInput.value = ""

        newItemNameInput.focus()
        itemsContainerEmpty.classList.add("hidden")
    })
}
