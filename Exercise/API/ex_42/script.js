window.onload=function(){
    const imagesArray=[
        ['batmanwb.png','batman.png','batman'],
        ['flashwb.png','flash.png','flash'],
        ['supermanwb.png','superman.png','superman'],
        ['wonder_womanwb.png','wonder_woman.png','wonder_woman']
    ];
    

    const body=document.querySelector('body');
    // console.log(body);
    imagesArray.forEach(function(image1){
        // console.log(image1);
        imgSrc='image/'+image1[0];
        const imgElement=document.createElement('img');
    
        imgElement.setAttribute('src',imgSrc);
        // console.log(imgElement);
        
        //Replace the black and white picture for the color one when the user rolls over the image element (like it's active)
        imgElement.addEventListener('mouseover',function(){
            imgSrc='image/'+image1[1];
            imgElement.setAttribute('src',imgSrc);
        });
        //Replace the color image for the black and white one when the user rolls out of the image element (like it's inactive again)
        imgElement.addEventListener('mouseout',function(){
            imgSrc='image/'+image1[0];
            imgElement.setAttribute('src',imgSrc);
        });
        // Show an alert with the superhero name in upper case when the user clicks on an image using
        imgElement.addEventListener('click',function(){
            window.alert(image1[2].toUpperCase());
        });
        body.appendChild(imgElement);
    });

}