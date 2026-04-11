// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// progress bar animation on scroll
document.addEventListener('DOMContentLoaded', function () {
    var bars = document.querySelectorAll('.progress-bar');

    bars.forEach(function (bar) {
        bar.dataset.target = bar.style.width;
        bar.style.width = '0%';
        bar.style.transition = 'width 1.9s ease-in-out';
    });

    var resumeSection = document.getElementById('resume');

    if (resumeSection) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    bars.forEach(function (bar) {
                        bar.style.width = bar.dataset.target;
                    });
                    observer.unobserve(resumeSection);
                }
            });
        }, { threshold: 0.55 });

        observer.observe(resumeSection);
    }
});

// project rows fade-in on scroll
document.addEventListener('DOMContentLoaded', function () {
    var projectRows = document.querySelectorAll('.project-row');

    var rowObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('project-visible');
                rowObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.50 });

    projectRows.forEach(function (row) {
        row.classList.add('project-hidden');
        rowObserver.observe(row);
    });
});

