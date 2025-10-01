export const SectionWhyChooseUs = () => {
  return (
    <section id="por-que-elegirnos"
            class="py-20 bg-gradient-to-br from-[var(--light-background-color)] via-white to-[var(--medium-background-color)] relative overflow-hidden code-section">
            {/* <!-- Background elements --> */}
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="absolute top-0 left-0 w-full h-full">
                    <div
                        class="absolute top-20 left-1/4 w-2 h-32 bg-[var(--primary-color)] rounded-full opacity-10 transform rotate-45">
                    </div>
                    <div
                        class="absolute bottom-32 right-1/3 w-2 h-24 bg-[var(--accent-color)] rounded-full opacity-10 transform -rotate-45">
                    </div>
                    <div
                        class="absolute top-1/2 right-20 w-1 h-20 bg-[var(--accent3-color)] rounded-full opacity-15 transform rotate-12">
                    </div>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* <!-- Section Header --> */}
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-6">
                        ¿Por Qué Elegir
                        <span
                            class="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] bg-clip-text text-transparent"> Limpio</span>?
                    </h2>
                    <p class="text-xl text-[var(--gray-text-color)] max-w-3xl mx-auto">
                        Somos más que una empresa de limpieza. Somos especialistas dedicados
                        exclusivamente a lo que mejor sabemos hacer.
                    </p>
                    <div
                        class="mt-8 w-24 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] mx-auto rounded-full">
                    </div>
                </div>

                {/* <!-- Main Content --> */}
                <div class="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    {/* <!-- Left - Image --> */}
                    <div class="relative">
                        <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/490bba73-6b94-4089-d3dc-d3d9e7bc7400/publicContain"
                                alt="A person is using a steam cleaner inside a car, focusing on the gear shift area, releasing steam to eliminate stains and disinfect surfaces effectively."
                                data-media="{&quot;id&quot;:&quot;2176611243&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"
                                class="w-full h-96 lg:h-[500px] object-cover" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-[var(--dark-background-color)] to-transparent opacity-40">
                            </div>
                            <div class="absolute bottom-8 left-8 text-white">
                                <h3 class="text-2xl font-bold mb-2">Tecnología Avanzada</h3>
                                <p class="text-lg opacity-90">
                                    Equipos profesionales para resultados superiores
                                </p>
                            </div>
                        </div>

                        {/* <!-- Floating stats --> */}
                        <div
                            class="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-[var(--light-border-color)] transform rotate-3 hover:rotate-6 transition-transform duration-300">
                            <div class="text-center">
                                <div class="text-3xl font-bold text-[var(--primary-color)] mb-1">
                                    +500
                                </div>
                                <div class="text-sm font-medium text-[var(--gray-text-color)]">
                                    Trabajos Realizados
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Right - Benefits --> */}
                    <div class="space-y-8">
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4 group">
                                <div
                                    class="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <i class="fas fa-star text-white text-lg" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-[var(--dark-text-color)] mb-2">
                                        100% Especializado
                                    </h3>
                                    <p class="text-[var(--gray-text-color)] leading-relaxed">
                                        No somos una empresa de limpieza general. Nos dedicamos
                                        exclusivamente a colchones, muebles, alfombras y autos. Esta
                                        especialización nos permite ser expertos en cada servicio.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4 group">
                                <div
                                    class="w-12 h-12 bg-[var(--accent-color)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <i class="fas fa-home text-white text-lg" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-[var(--dark-text-color)] mb-2">
                                        Servicio a Domicilio
                                    </h3>
                                    <p class="text-[var(--gray-text-color)] leading-relaxed">
                                        Llevamos nuestro equipo profesional directamente a tu hogar. Sin
                                        traslados, sin molestias. Trabajamos en tu espacio con la máxima
                                        comodidad para ti.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4 group">
                                <div
                                    class="w-12 h-12 bg-[var(--accent3-color)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <i class="fas fa-shield-alt text-white text-lg" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-[var(--dark-text-color)] mb-2">
                                        Productos Eco-Amigables
                                    </h3>
                                    <p class="text-[var(--gray-text-color)] leading-relaxed">
                                        Utilizamos productos biodegradables y seguros para tu familia y
                                        mascotas. Limpieza profunda sin comprometer la salud de tu
                                        hogar.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4 group">
                                <div
                                    class="w-12 h-12 bg-[var(--accent2-color)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <i class="fas fa-clock text-white text-lg" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-[var(--dark-text-color)] mb-2">
                                        Disponibilidad Flexible
                                    </h3>
                                    <p class="text-[var(--gray-text-color)] leading-relaxed">
                                        Adaptamos nuestros horarios a tu disponibilidad. Fines de
                                        semana, tardes, o cuando mejor te convenga. Tu tiempo es valioso
                                        para nosotros.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Stats Section --> */}
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div class="text-center group">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-users text-white text-xl" aria-hidden="true"></i>
                        </div>
                        <div class="text-3xl font-bold text-[var(--dark-text-color)] mb-2">
                            500+
                        </div>
                        <div class="text-sm text-[var(--gray-text-color)] font-medium">
                            Clientes Satisfechos
                        </div>
                    </div>

                    <div class="text-center group">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent3-color)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-award text-white text-xl" aria-hidden="true"></i>
                        </div>
                        <div class="text-3xl font-bold text-[var(--dark-text-color)] mb-2">
                            5 años
                        </div>
                        <div class="text-sm text-[var(--gray-text-color)] font-medium">
                            de Experiencia
                        </div>
                    </div>

                    <div class="text-center group">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[var(--accent3-color)] to-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-thumbs-up text-white text-xl" aria-hidden="true"></i>
                        </div>
                        <div class="text-3xl font-bold text-[var(--dark-text-color)] mb-2">
                            98%
                        </div>
                        <div class="text-sm text-[var(--gray-text-color)] font-medium">
                            Satisfacción
                        </div>
                    </div>

                    <div class="text-center group">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[var(--accent2-color)] to-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-redo text-white text-xl" aria-hidden="true"></i>
                        </div>
                        <div class="text-3xl font-bold text-[var(--dark-text-color)] mb-2">
                            24h
                        </div>
                        <div class="text-sm text-[var(--gray-text-color)] font-medium">
                            Respuesta
                        </div>
                    </div>
                </div>

                {/* <!-- Process Section --> */}
                <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-[var(--light-border-color)]">
                    <h3 class="text-2xl lg:text-3xl font-bold text-[var(--dark-text-color)] text-center mb-12">
                        Nuestro Proceso Garantizado
                    </h3>

                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="text-center group">
                            <div class="relative mb-6">
                                <div
                                    class="w-20 h-20 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <i class="fas fa-calendar-check text-white text-2xl" aria-hidden="true"></i>
                                </div>
                                <div
                                    class="absolute -top-2 -right-2 w-8 h-8 bg-[var(--accent4-color)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    1
                                </div>
                            </div>
                            <h4 class="text-lg font-bold text-[var(--dark-text-color)] mb-3">
                                Agenda tu Cita
                            </h4>
                            <p class="text-[var(--gray-text-color)] leading-relaxed">
                                Contáctanos por WhatsApp y coordinamos la fecha y hora que mejor te
                                convenga. Evaluación gratuita incluida.
                            </p>
                        </div>

                        <div class="text-center group">
                            <div class="relative mb-6">
                                <div
                                    class="w-20 h-20 bg-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <i class="fas fa-tools text-white text-2xl" aria-hidden="true"></i>
                                </div>
                                <div
                                    class="absolute -top-2 -right-2 w-8 h-8 bg-[var(--accent4-color)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    2
                                </div>
                            </div>
                            <h4 class="text-lg font-bold text-[var(--dark-text-color)] mb-3">
                                Limpieza Especializada
                            </h4>
                            <p class="text-[var(--gray-text-color)] leading-relaxed">
                                Nuestro equipo llega con herramientas profesionales y realiza el
                                trabajo con técnicas especializadas para cada material.
                            </p>
                        </div>

                        <div class="text-center group">
                            <div class="relative mb-6">
                                <div
                                    class="w-20 h-20 bg-[var(--accent3-color)] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <i class="fas fa-check-double text-white text-2xl" aria-hidden="true"></i>
                                </div>
                                <div
                                    class="absolute -top-2 -right-2 w-8 h-8 bg-[var(--accent4-color)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    3
                                </div>
                            </div>
                            <h4 class="text-lg font-bold text-[var(--dark-text-color)] mb-3">
                                Garantía de Calidad
                            </h4>
                            <p class="text-[var(--gray-text-color)] leading-relaxed">
                                Verificamos que todo esté perfecto antes de irnos. Si no estás 100%
                                satisfecho, regresamos sin costo adicional.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!-- Final CTA -->   */}
                <div class="text-center mt-16">
                    <p class="text-lg text-[var(--gray-text-color)] mb-6">
                        ¿Listo para experimentar la diferencia de un servicio verdaderamente
                        especializado?
                    </p>
                    <a href="https://wa.me/593989411325?text=Quiero programar mi servicio de limpieza especializada" target="_blank"
                        class="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] text-white rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                        <i class="fab fa-whatsapp text-2xl mr-4" aria-hidden="true"></i>
                        ¡Agenda tu Servicio Ahora!
                    </a>
                </div>
            </div>
        </section>
  )
}
