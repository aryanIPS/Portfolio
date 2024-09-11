var typed = new Typed(".text",{
    strings:["Frontend Developer", "Django Developer", "Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

// const form = document.querySelector('form');

// function sendEmail() {
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "aryansharma4427@gmail.com",
//         Password : "640491501A41FA2096EAF9614B32B51307E9",
//         To : 'aryansharma4427@gmail.com',
//         From : "aryansharma4427@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//         message => alert(message)
//     );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendEmail();
// });

<script>
        document.addEventListener(
              'DOMContentLoaded', () => {
            document.getElementById('submitButton').
                addEventListener('click', function () {
                    alert('Form submitted!');
                });
            });
</script>