const grid = document.querySelector(".galery");
imagesLoaded(grid, ()=>{
    let msry = new Masonry( grid, {
        itemSelector: ".galery-img",
        columnWidth: 300,
    })
})