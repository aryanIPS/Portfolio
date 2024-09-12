
var typed = new Typed(".text",{
    strings:["Frontend Developer", "Django Developer", "Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitButton').addEventListener('click', function () {
                alert('Form submitted!');
            });
});