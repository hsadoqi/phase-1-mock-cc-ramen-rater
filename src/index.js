const baseUrl = `http://localhost:3000/ramens`

const ramenMenu = document.getElementById('ramen-menu')

const ramenDetailContainer = document.getElementById('ramen-detail')
const ramenImage = document.querySelector('.detail-image')
const ramenName = ramenDetailContainer.querySelector('.name')
const ramenRestaurant = ramenDetailContainer.querySelector('.restaurant')

const ramenRating = document.getElementById('rating-display')
const ramenComment = document.getElementById('comment-display')


const newRamenForm = document.getElementById('new-ramen')
const newName = document.getElementById('new-name')
const newRestaurant = document.getElementById('new-restaurant')
const newImage = document.getElementById('new-image')
const newRating = document.getElementById('new-rating')
const newComment = document.getElementById('new-comment')

const editRamenForm = document.getElementById('edit-ramen')
const editRating = document.getElementById('new-rating')
const editComment = document.getElementById('new-comment')

const deleteRamenBtn = document.getElementById('delete-ramen')

fetch(baseUrl)
.then(res => res.json())
.then(function(data){
    showRamenDetails(data[0])

    data.forEach(function(ramenObj){
        showNewRamen(ramenObj)
    })
})

newRamenForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const newRamenObj = {
        name: newName.value,
        restaurant: newRestaurant.value,
        image: newImage.value,
        comment: newComment.value,
        rating: newRating.value
    }

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newRamenObj)
        }).then(res => res.json())
        .then(showNewRamen)

    })

deleteRamenBtn.addEventListener('click', deleteRamen)

function editRamen(ramen){

    const editRamenObj = {
        rating: editRating.value,
        comment: editComment.value
    }

    fetch(`${baseUrl}/${ramen.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editRamenObj)
    }).then(res => res.json())
    .then(showRamenDetails)
}

function deleteRamen(){
    const deletedRamenId = ramenDetailContainer.dataset.id

    fetch(`${baseUrl}/${deletedRamenId}`, {
        method: 'DELETE'
    }).then(res => res.json())
    .then(res => {
        const deletedRamen = ramenMenu.querySelector(`[data-id="${deletedRamenId}"]`)
        deletedRamen.remove()
    })
}

function showNewRamen(ramen){
    const ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    ramenImg.alt = ramen.name
    ramenImg.dataset.id = ramen.id

    ramenImg.addEventListener('click', (e) => {
        showRamenDetails(ramen)
    })

    ramenMenu.appendChild(ramenImg)
}

function showRamenDetails(ramen){
    ramenImage.src = ramen.image
    ramenImage.alt = ramen.name
    ramenName.innerText = ramen.name
    ramenRestaurant.innerText = ramen.restaurant
    ramenRating.innerText = ramen.rating
    ramenComment.innerText = ramen.comment

    ramenDetailContainer.dataset.id = ramen.id

    editRamenForm.addEventListener('submit', (e) => {
        e.preventDefault()
        editRamen(ramen)
    })
}
