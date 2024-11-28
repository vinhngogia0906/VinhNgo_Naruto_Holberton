document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Welcome, feel free to be a Naruto fan!");
});
function showCharacterModal(imageSrc, title, description) {
  document.getElementById('characterImage').src = imageSrc;
  document.getElementById('characterModalLabel').textContent = title;
  document.getElementById('characterDescription').textContent = description;
}

function toggleImageSize(imageId) {
  // Get the image element by ID
  const img = document.getElementById(imageId);

  // Check if the classList contains 'small'
  if (img.classList.contains('small')) {
    // Remove the 'small' class
    img.classList.remove('small');
  } else {
    // Add the 'small' class
    img.classList.add('small');
  }
}