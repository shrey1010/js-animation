var id =null;
spaceship();
function spaceship() {
    var elem2= document.querySelector('.img-space');
    var pos2 = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if(pos2!==640){
            pos2++;
            elem2.style.bottom = pos2+'px';
        }
        else{
            pos2=0;
        }
        
    }
}