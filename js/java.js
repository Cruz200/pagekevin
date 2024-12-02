document.getElementById('sidebarCollapse').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
    });

    document.getElementById('sidebarClose').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
    });

    var accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var collapseId = button.getAttribute('data-bs-target');
        var collapseElement = document.querySelector(collapseId);
        button.classList.toggle('active');
        collapseElement.classList.toggle('show');
         });
    });

    setInterval(function() {
        const animatedText = document.getElementById('animatedText');
        animatedText.classList.remove('animate__heartBeat');
        setTimeout(function() {
            animatedText.classList.add('animate__heartBeat');
        }, 10);
    }, 6000);