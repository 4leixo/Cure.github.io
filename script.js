document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const artFolderPath = 'art/'; // Path to the art folder

    // --- IMPORTANT: Replace these with your actual image filenames --- 
    const imageFiles = [
        'fan art.png' // Added the image filename
        // 'image1.jpg',
        // 'painting_a.png',
        // 'digital_art_final.gif',
        // Add more image filenames here as strings
    ];
    // -----------------------------------------------------------------

    if (imageFiles.length === 0) {
        gallery.innerHTML = '<p>Add your image filenames to script.js to display them here!</p>';
    } else {
        imageFiles.forEach(fileName => {
            const imgElement = document.createElement('img');
            imgElement.src = artFolderPath + fileName;
            imgElement.alt = 'Artwork'; // You can customize alt text later if needed
            gallery.appendChild(imgElement);
        });
    }
});