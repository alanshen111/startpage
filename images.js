// Get all the images
image_array = [
    
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    
  ]
  
  index = 0;

  function get_image(){
    
    if (index == image_array.length - 1){
        index = 0;
    }

    else{
        index++;
    }
  
    // Get an image at the random_index
    selected_image = image_array[index]
  
    // Display the image
    document.getElementById('image_bg').src = `./images/${selected_image}`
  }