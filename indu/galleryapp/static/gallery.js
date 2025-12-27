const gallery = [
    { src: "5.jpg", caption: "BEACH" },
    { src: "4.jpg", caption: "FOREST" },
    { src: "3.jpg", caption: "DESSERT" }
];
let index = 0;
function changeImage(type) {
    if (type === "next") 
    {
        index++;
        if(index >= gallery.length)
        {
            index = 0;
        }
    }
    if (type === "prev") 
    {
        index--;
        if(index < 0)
        {
            index = gallery.length - 1;
        }
    }
    document.getElementById("Image").src = gallery[index].src;
    document.getElementById("Text").innerText = gallery[index].caption;
}
