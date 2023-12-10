document.addEventListener('DOMContentLoaded', function () 
{
    // Get all navigation items
    const navItems = document.querySelectorAll('.navitem');

    // Add event listeners for mouseover and mouseout events
    navItems.forEach(item => 
        {
        item.addEventListener('mouseover', function () 
        {
            // Add a class to the current item to change its color to red when the mouse is over it
            this.classList.add('hovered');
        });

        item.addEventListener('mouseout', function () 
        {
            // Remove the class to revert the color back to the original when the mouse is out
            this.classList.remove('hovered');
        });
    });
});