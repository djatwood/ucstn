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
