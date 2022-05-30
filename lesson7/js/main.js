// get all images with the data-src attribute
let imagesToLoad = document.querySelectorAll('img[data-src]');
// console.log(imagesToLoad);

// optional parameters being set for the IntersectionalObserver
/* const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
}; */

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
});

// first check to see if Intersection Observer is supported
/* if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            
        });
    }, imgOptions);
    
    // loop through each image and check status and load if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}
else { // just load all images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
} */
