// Modal functions
function openModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var caption = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Add to cart stub
function addToCart(itemName) {
    alert(itemName + " has been added to your cart!");
}
