document.addEventListener("DOMContentLoaded", function() {
    const featuredImage = document.querySelector("figure img"); // Select the main featured image
    const caption = document.querySelector("figure figcaption"); // Select the caption element
    const thumbnailContainer = document.querySelector("ul"); // Select the thumbnail container

    // Array of image information with filenames matching the HTML code
    const images = [
        { large: "flowers-pink-large.jpg", small: "flowers-pink-small.jpg", title: "Pink Flowers in Bloom" },
        { large: "flowers-purple-large.jpg", small: "flowers-purple-small.jpg", title: "Purple Flowers in the Garden" },
        { large: "flowers-red-large.jpg", small: "flowers-red-small.jpg", title: "Red Flowers in the Field" },
        { large: "flowers-white-large.jpg", small: "flowers-white-small.jpg", title: "White Daffodils in the Park" }
    ];

    // Set initial featured image and caption
    featuredImage.src = images[0].large;
    caption.textContent = images[0].title;

    // Dynamically create thumbnails
    images.forEach((image, index) => {
        const listItem = document.createElement("li");
        const thumbnail = document.createElement("img");
        
        // Set attributes for thumbnail
        thumbnail.src = image.small;
        thumbnail.alt = image.title;
        thumbnail.dataset.large = image.large;
        thumbnail.dataset.index = index; // Track index for later
        listItem.appendChild(thumbnail);
        thumbnailContainer.appendChild(listItem);

        // Set the first thumbnail as active
        if (index === 0) {
            thumbnail.classList.add("active");
        }

        // Add click event to each thumbnail
        thumbnail.addEventListener("click", function() {
            // Update featured image and caption
            featuredImage.src = thumbnail.dataset.large;
            caption.textContent = image.title;
            updateActiveThumbnail(thumbnail); // Highlight the selected thumbnail
        });
    });

    // Function to add an 'active' class to the current thumbnail
    function updateActiveThumbnail(selectedThumbnail) {
        const thumbnails = thumbnailContainer.querySelectorAll("img");
        thumbnails.forEach(thumbnail => thumbnail.classList.remove("active"));
        selectedThumbnail.classList.add("active");
    }
});
