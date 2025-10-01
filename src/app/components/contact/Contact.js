import { Form } from "./Form"

export const Contact = () => {
  return (
    <section id="contacto"
        class="py-20 bg-gradient-to-br from-[var(--light-background-color)] via-white to-[var(--medium-background-color)] relative overflow-hidden code-section">
        {/* <!-- Background elements --> */}
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                class="absolute top-10 left-10 w-40 h-40 bg-[var(--primary-color)] rounded-full opacity-5 animate-pulse">
            </div>
            <div class="absolute bottom-20 right-20 w-32 h-32 bg-[var(--accent-color)] rounded-full opacity-5 animate-pulse"
                style={{animationDelay: '1s'}}></div>
            <div
                class="absolute top-1/2 left-1/4 w-2 h-24 bg-[var(--accent3-color)] rounded-full opacity-10 transform rotate-45">
            </div>
            <div
                class="absolute bottom-1/3 right-1/3 w-2 h-16 bg-[var(--accent2-color)] rounded-full opacity-10 transform -rotate-45">
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* <!-- Section Header --> */}
            <div class="text-center mb-16">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-6">
                    ¡Hablemos de tu
                    <span
                        class="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] bg-clip-text text-transparent"> Proyecto
                        de Limpieza</span>!
                </h2>
                <p class="text-xl text-[var(--gray-text-color)] max-w-3xl mx-auto">
                    Estamos aquí para ayudarte. Cotizaciones gratuitas, respuesta inmediata
                    y atención personalizada.
                </p>
                <div
                    class="mt-8 w-24 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] mx-auto rounded-full">
                </div>
            </div>

            {/* <!-- Contact Methods --> */}
            <div class="grid md:grid-cols-3 gap-8 mb-16">
                {/* <!-- WhatsApp --> */}
                <div
                    class="group bg-white rounded-2xl p-8 shadow-lg border border-[var(--light-border-color)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="fab fa-whatsapp text-white text-2xl" aria-hidden="true"></i>
                        </div>
                        <h3 class="text-xl font-bold text-[var(--dark-text-color)] mb-2">
                            WhatsApp
                        </h3>
                        <p class="text-[var(--gray-text-color)] mb-4">Respuesta inmediata</p>
                        <a href="https://wa.me/593989411325?text=¡Hola! Me interesa solicitar información sobre los servicios de limpieza especializada" target="_blank"
                            class="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105">
                            <i class="fab fa-whatsapp mr-2" aria-hidden="true"></i>
                            098 941 1325
                        </a>
                    </div>
                </div>

                {/* <!-- Phone --> */}
                <div
                    class="group bg-white rounded-2xl p-8 shadow-lg border border-[var(--light-border-color)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-phone text-white text-2xl" aria-hidden="true"></i>
                        </div>
                        <h3 class="text-xl font-bold text-[var(--dark-text-color)] mb-2">
                            Teléfono
                        </h3>
                        <p class="text-[var(--gray-text-color)] mb-4">Llamada directa</p>
                        <a href="tel:+593989411325"
                            class="inline-flex items-center px-6 py-3 bg-[var(--primary-color)] text-white rounded-lg font-semibold hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 hover:scale-105">
                            <i class="fas fa-phone mr-2" aria-hidden="true"></i>
                            098 941 1325
                        </a>
                    </div>
                </div>

                {/* <!-- Location --> */}
                <div
                    class="group bg-white rounded-2xl p-8 shadow-lg border border-[var(--light-border-color)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent3-color)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-map-marker-alt text-white text-2xl" aria-hidden="true"></i>
                        </div>
                        <h3 class="text-xl font-bold text-[var(--dark-text-color)] mb-2">
                            Ubicación
                        </h3>
                        <p class="text-[var(--gray-text-color)] mb-4">Servicio a domicilio</p>
                        <div class="text-[var(--primary-color)] font-semibold">
                            <i class="fas fa-map-marker-alt mr-2" aria-hidden="true"></i>
                            Guayas, Ecuador
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Main Contact Section --> */}
            <div class="grid lg:grid-cols-2 gap-12 mb-16">
                {/* <!-- Contact Form --> */}
                <div class="bg-white rounded-3xl p-8 shadow-xl border border-[var(--light-border-color)]">
                    <h3 class="text-2xl font-bold text-[var(--dark-text-color)] mb-6">
                        Solicita tu Cotización Gratuita
                    </h3>
                    <Form />
                </div>

                {/* <!-- Contact Information --> */}
                <div class="space-y-8">
                    {/* <!-- Quick Contact --> */}
                    <div
                        class="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] rounded-3xl p-8 text-white">
                        <h3 class="text-2xl font-bold mb-6">
                            ¿Necesitas Respuesta Inmediata?
                        </h3>
                        <p class="text-lg mb-6 opacity-90">
                            Para cotizaciones urgentes o consultas rápidas, contáctanos
                            directamente por WhatsApp. Estamos disponibles de lunes a domingo.
                        </p>

                        <div class="space-y-4">
                            <div class="flex items-center space-x-4">
                                <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <i class="fas fa-clock text-white" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <div class="font-semibold">Horario de Atención</div>
                                    <div class="opacity-90">Lunes a Domingo: 7:00 AM - 8:00 PM</div>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4">
                                <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <i class="fa-solid fa-truck-fast text-white" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <div class="font-semibold">Respuesta Rápida</div>
                                    <div class="opacity-90">Menos de 30 minutos por WhatsApp</div>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4">
                                <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <i class="fas fa-calculator text-white" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <div class="font-semibold">Cotización Gratuita</div>
                                    <div class="opacity-90">
                                        Sin compromiso, evaluación incluida
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="https://wa.me/593989411325?text=Necesito una cotización urgente para servicios de limpieza especializada" target="_blank"
                            class="inline-flex items-center px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mt-6">
                            <i class="fab fa-whatsapp text-xl mr-3" aria-hidden="true"></i>
                            Contactar por WhatsApp
                        </a>
                    </div>

                    {/* <!-- Social Media --> */}
                    <div class="bg-white rounded-2xl p-8 shadow-lg border border-[var(--light-border-color)]">
                        <h3 class="text-xl font-bold text-[var(--dark-text-color)] mb-6">
                            Síguenos en Redes Sociales
                        </h3>
                        <p class="text-[var(--gray-text-color)] mb-6">
                            Mantente al día con nuestros trabajos más recientes, tips de
                            limpieza y promociones especiales.
                        </p>

                        <div class="flex flex-wrap gap-4">
                            <a href="https://www.facebook.com/share/16fEtmTJp7/" target="_blank"
                                class="group flex items-center space-x-3 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                                <i class="fab fa-facebook-f text-lg group-hover:animate-pulse"
                                    aria-hidden="true"></i>
                                <span class="font-semibold">Facebook</span>
                            </a>

                            <a href="https://www.instagram.com/cleanpro_ec?igsh=MTF3MGlvZWx5a3R5" target="_blank"
                                class="group flex items-center space-x-3 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-300 hover:scale-105">
                                <i class="fab fa-instagram text-lg group-hover:animate-pulse"
                                    aria-hidden="true"></i>
                                <span class="font-semibold">Instagram</span>
                            </a>

                            <a href="https://www.tiktok.com/@cleanproec6?_t=ZM-8xt9xvw8L4v&_r=1" target="_blank"
                                class="group flex items-center space-x-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                                <i class="fab fa-tiktok text-lg group-hover:animate-pulse" aria-hidden="true"></i>
                                <span class="font-semibold">TikTok</span>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Testimonial --> */}
                    <div id="testimonios-de-clientes"
                        class="bg-gradient-to-r from-[var(--light-background-color)] to-[var(--medium-background-color)] rounded-2xl p-8 border border-[var(--light-border-color)]">
                        <div class="text-center">
                            <div
                                class="w-16 h-16 bg-[var(--accent4-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-quote-right text-white text-2xl" aria-hidden="true"></i>
                            </div>
                            <p class="text-[var(--dark-text-color)] italic mb-4">
                                &quot;Increíble servicio. Mi sofá quedó como nuevo y el proceso fue
                                súper rápido. Definitivamente los recomiendo.&quot;
                            </p>
                            <div class="flex justify-center mb-2">
                                <div class="flex space-x-1">
                                    <i class="fas fa-star text-[var(--accent4-color)]" aria-hidden="true"></i>
                                    <i class="fas fa-star text-[var(--accent4-color)]" aria-hidden="true"></i>
                                    <i class="fas fa-star text-[var(--accent4-color)]" aria-hidden="true"></i>
                                    <i class="fas fa-star text-[var(--accent4-color)]" aria-hidden="true"></i>
                                    <i class="fas fa-star text-[var(--accent4-color)]" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="text-sm text-[var(--gray-text-color)]">
                                María González - Cliente satisfecha
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Final CTA --> */}
            <div
                class="text-center bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-[var(--light-border-color)]">
                <h3 class="text-2xl lg:text-3xl font-bold text-[var(--dark-text-color)] mb-4">
                    ¡Tu Hogar Merece lo Mejor!
                </h3>
                <p class="text-lg text-[var(--gray-text-color)] mb-8">
                    No esperes más para disfrutar de un ambiente limpio, fresco y saludable.
                    Agenda tu servicio hoy mismo.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <a href="https://wa.me/593989411325?text=Quiero agendar mi servicio de limpieza especializada hoy mismo" target="_blank"
                        class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] text-white rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <i class="fab fa-whatsapp text-xl mr-3" aria-hidden="true"></i>
                        Agendar Servicio Ahora
                    </a>

                    <a href="tel:+593989411325"
                        class="inline-flex items-center px-8 py-4 bg-[var(--secondary-button-bg-color)] text-[var(--secondary-button-text-color)] rounded-lg font-bold text-lg hover:bg-[var(--secondary-button-hover-bg-color)] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                        <i class="fas fa-phone text-xl mr-3" aria-hidden="true"></i>
                        Llamar Ahora
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
