document.addEventListener('DOMContentLoaded', function() {
    // Inicializar los iconos de Lucide
    lucide.createIcons();

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const message = contactForm.elements['message'].value;

        console.log('Formulario enviado:', { name, email, message });

        // Aquí puedes agregar el código para enviar el formulario a tu servidor
        // Por ejemplo, usando fetch() para hacer una solicitud POST

        // Reiniciar el formulario
        contactForm.reset();

        // Mostrar el modal de éxito en lugar del alert
        successModal.show();
    });

    // Funcionalidad para los botones de la sección de propiedades
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Remover la clase active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Agregar la clase active al botón clickeado y su contenido correspondiente
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Animación de scroll suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});