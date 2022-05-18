//initialize and add the map
function initMap() {
   const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 9.283330, lng: 12.466670 },
        zoom: 8,
    });
}

//Sticky Menu Background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        this.document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

//smooth scrolling
$('#navbar a, .btn').on('click', function(event){
    if (this.hash !==''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
            );
    }
});