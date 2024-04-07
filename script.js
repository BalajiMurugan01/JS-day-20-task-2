document.addEventListener('DOMContentLoaded', () => {
  const dogGallery = document.getElementById('dogGallery');

  // Fetch random dog pictures from Dog CEO API
  fetch('https://dog.ceo/api/breeds/image/random/10')
    .then(response => response.json())
    .then(data => {
      data.message.forEach(imageUrl => {
        // Create a Bootstrap card for each dog picture
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        card.innerHTML = `
          <div class="card">
            <img src="${imageUrl}" class="card-img-top" alt="Dog Picture">
          </div>
        `;
        dogGallery.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching dog pictures:', error));
});
