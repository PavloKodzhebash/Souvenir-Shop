function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("modal-caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.title;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function addToCart(itemName) {
    alert(itemName + " has been added to your cart!");
}

