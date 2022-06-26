const menuButton = document.getElementById( 'menu-button' );

menuButton.addEventListener( 'click', function() {
    // you get a list of elements
    const navItems = document.querySelectorAll( '.nav-items' );

    // go through the list and add / remove d-none
    for( let i = 0; i < navItems.length; i++ ) {
        // add d-none if not present / remove d-none if present
        navItems[i].classList.toggle( 'd-sm-none' );
    }
});