"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Image List

      Filename:lightbox_data.js
*/

// Title of the slideshow
let lightboxTitle = "EE Tree Service inc";

// Names of the image files shown in the slideshow
let imgFiles = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg",
                "img/background-2.jpg", "img/card-1.jpg", "img/card-2.jpg", "img/card-3.jpg",
                "img/mowing.jpg", "img/removal.jpg", "img/trimming.jpg", "img/heroImage.jpg"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="Dead Tree Removal";
imgCaptions[1]="Snow Plowing"; 
imgCaptions[2]="Tree Trimming"; 
imgCaptions[3]="Tree Trimming"; 
imgCaptions[4]="Tree Removal";
imgCaptions[5]="Pine Tree Removal";
imgCaptions[6]="Landscaping";
imgCaptions[7]="Snow Plowing";
imgCaptions[8]="Gardening";
imgCaptions[9]="Tree Removal";
imgCaptions[10]="Tree Trimming";
imgCaptions[11]="Fallen Tree";

// Count of images in the slideshow
let imgCount = imgFiles.length;
