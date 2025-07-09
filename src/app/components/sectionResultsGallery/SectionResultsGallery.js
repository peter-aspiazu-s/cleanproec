export const SectionResultsGallery = () => {
  return (
    <section id="galeria-de-resultados" class="py-20 bg-white relative overflow-hidden code-section">
            {/* <!-- Background decorative elements --> */}
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--primary-color)] to-transparent opacity-5 rounded-full transform translate-x-48 -translate-y-48">
                </div>
                <div
                    class="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[var(--accent-color)] to-transparent opacity-5 rounded-full transform -translate-x-32 translate-y-32">
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* <!-- Section Header --> */}
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-6">
                        Galería de
                        <span
                            class="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] bg-clip-text text-transparent"> Resultados</span>
                    </h2>
                    <p class="text-xl text-[var(--gray-text-color)] max-w-3xl mx-auto">
                        Cada imagen cuenta una historia de transformación. Mira cómo devolvemos
                        la vida a tus muebles, colchones, alfombras y vehículos.
                    </p>
                    <div
                        class="mt-8 w-24 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] mx-auto rounded-full">
                    </div>
                </div>

                {/* <!-- Gallery Grid --> */}
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* <!-- Gallery Item 1 --> */}
                    <div
                        class="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div class="aspect-w-4 aspect-h-3">
                            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/b1ee1724-1bf3-4a70-2c2c-09c837f09c00/public"
                                alt="Professional cleaner using soft brush to clean dust inside car interior."
                                data-media="{&quot;id&quot;:&quot;2187282854&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"
                                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500">
                        </div>
                        <div
                            class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 class="text-lg font-bold mb-1">Limpieza de Interiores</h3>
                            <p class="text-sm">Detailing profesional de vehículos</p>
                        </div>
                        <div
                            class="absolute top-4 right-4 bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Autos
                        </div>
                    </div>

                    {/* <!-- Gallery Item 2 --> */}
                    <div
                        class="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div class="aspect-w-4 aspect-h-3">
                            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/edefa3ed-184b-44e5-abe9-aa62766e6300/public"
                                alt="restoring leather seat upholstery. car interior detailing"
                                data-media="{&quot;id&quot;:&quot;2212785620&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"
                                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500">
                        </div>
                        <div
                            class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 class="text-lg font-bold mb-1">Restauración de Cuero</h3>
                            <p class="text-sm">Asientos como nuevos</p>
                        </div>
                        <div
                            class="absolute top-4 right-4 bg-[var(--accent2-color)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Tapicería
                        </div>
                    </div>

                    {/* <!-- Gallery Item 3 --> */}
                    <div
                        class="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div class="aspect-w-4 aspect-h-3">
                            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/d63eb9da-f1a4-4521-e783-26a12e3b0b00/public"
                                alt="A woman cleans a living room using a vacuum and duster, showcasing a tidy and organized modern home environment."
                                data-media="{&quot;id&quot;:&quot;2195632186&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"
                                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500">
                        </div>
                        <div
                            class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 class="text-lg font-bold mb-1">Limpieza Profesional</h3>
                            <p class="text-sm">Espacios impecables</p>
                        </div>
                        <div
                            class="absolute top-4 right-4 bg-[var(--accent-color)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Hogar
                        </div>
                    </div>

                    {/* <!-- Gallery Item 4 --> */}
                    <div
                        class="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div class="aspect-w-4 aspect-h-3">
                            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/712ea93a-580d-4954-0371-5b80177a9400/publicContain"
                                alt="close up housewife in yellow glove washing wooden table in the kitchen. Sanitizing, cleaning home"
                                data-media="{&quot;id&quot;:&quot;2148974123&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"
                                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500">
                        </div>
                        <div
                            class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 class="text-lg font-bold mb-1">Desinfección Profunda</h3>
                            <p class="text-sm">Sanitización completa</p>
                        </div>
                        <div
                            class="absolute top-4 right-4 bg-[var(--accent3-color)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Muebles
                        </div>
                    </div>

                    {/* <!-- Gallery Item 5 --> */}
                    <div
                        class="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div class="aspect-w-4 aspect-h-3">
                            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/94a41d7a-f886-4bca-3c1d-97b7aeabc200/public"
                                alt="Young female housekeeper cleaning And wipe down the table with a microfiber cloth in the living room. young woman doing housework Housekeeping concept"
                                data-media="{&quot;id&quot;:&quot;2147601343&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"
                                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500">
                        </div>
                        <div
                            class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 class="text-lg font-bold mb-1">Cuidado Detallado</h3>
                            <p class="text-sm">Atención a cada superficie</p>
                        </div>
                        <div
                            class="absolute top-4 right-4 bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Especializados
                        </div>
                    </div>

                    {/* <!-- Gallery Item 6 --> */}
                    <div
                        class="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div class="aspect-w-4 aspect-h-3">
                            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/17f35b7f-592b-4e0d-7f1d-e95765bb6600/public"
                                alt="A closeup of vacuuming a stylish area rug in a contemporary living space, radiating comfort"
                                data-media="{&quot;id&quot;:&quot;2198973665&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"
                                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500">
                        </div>
                        <div
                            class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 class="text-lg font-bold mb-1">Alfombras Renovadas</h3>
                            <p class="text-sm">Suavidad y frescura restauradas</p>
                        </div>
                        <div
                            class="absolute top-4 right-4 bg-[var(--accent4-color)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Alfombras
                        </div>
                    </div>
                </div>

                {/* <!-- Process Showcase --> */}
                <div
                    class="bg-gradient-to-r from-[var(--light-background-color)] to-[var(--medium-background-color)] rounded-3xl p-8 lg:p-12 mb-16">
                    <div class="text-center mb-12">
                        <h3 class="text-2xl lg:text-3xl font-bold text-[var(--dark-text-color)] mb-4">
                            Nuestro Proceso en Acción
                        </h3>
                        <p class="text-lg text-[var(--gray-text-color)] max-w-2xl mx-auto">
                            Cada trabajo es único, pero nuestro compromiso con la excelencia es
                            constante
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-8 items-center">
                        {/* <!-- Process Image --> */}
                        <div class="relative">
                            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/490bba73-6b94-4089-d3dc-d3d9e7bc7400/publicContain"
                                alt="A person is using a steam cleaner inside a car, focusing on the gear shift area, releasing steam to eliminate stains and disinfect surfaces effectively."
                                data-media="{&quot;id&quot;:&quot;2176611243&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}"
                                class="w-full h-80 object-cover rounded-2xl shadow-lg" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)] to-transparent opacity-20 rounded-2xl">
                            </div>
                            <div class="absolute bottom-4 left-4 right-4 text-white">
                                <h4 class="text-lg font-bold mb-1">Vapor Profesional</h4>
                                <p class="text-sm">Eliminación profunda de gérmenes y manchas</p>
                            </div>
                        </div>

                        {/* <!-- Process Details --> */}
                        <div class="space-y-6">
                            <div class="flex items-center space-x-4">
                                <div
                                    class="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-thermometer-half text-white text-lg" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h4 class="text-lg font-bold text-[var(--dark-text-color)]">
                                        Vapor a Alta Temperatura
                                    </h4>
                                    <p class="text-[var(--gray-text-color)]">
                                        Eliminamos el 99.9% de gérmenes y bacterias
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4">
                                <div
                                    class="w-12 h-12 bg-[var(--accent-color)] rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-leaf text-white text-lg" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h4 class="text-lg font-bold text-[var(--dark-text-color)]">
                                        Productos Eco-Friendly
                                    </h4>
                                    <p class="text-[var(--gray-text-color)]">
                                        Seguros para tu familia y el medio ambiente
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4">
                                <div
                                    class="w-12 h-12 bg-[var(--accent3-color)] rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-stopwatch text-white text-lg" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h4 class="text-lg font-bold text-[var(--dark-text-color)]">
                                        Secado Rápido
                                    </h4>
                                    <p class="text-[var(--gray-text-color)]">
                                        Listo para usar en pocas horas
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4">
                                <div
                                    class="w-12 h-12 bg-[var(--accent2-color)] rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-shield-virus text-white text-lg" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h4 class="text-lg font-bold text-[var(--dark-text-color)]">
                                        Protección Antimicrobiana
                                    </h4>
                                    <p class="text-[var(--gray-text-color)]">
                                        Protección duradera contra nuevas bacterias
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Stats and Guarantees --> */}
                <div class="grid md:grid-cols-3 gap-8 mb-16">
                    <div
                        class="text-center bg-white rounded-2xl p-8 shadow-lg border border-[var(--light-border-color)]">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-eye text-white text-xl" aria-hidden="true"></i>
                        </div>
                        <h3 class="text-xl font-bold text-[var(--dark-text-color)] mb-2">
                            Resultados Visibles
                        </h3>
                        <p class="text-[var(--gray-text-color)]">
                            La diferencia se nota inmediatamente. Colores más vivos, texturas más
                            suaves.
                        </p>
                    </div>

                    <div
                        class="text-center bg-white rounded-2xl p-8 shadow-lg border border-[var(--light-border-color)]">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent3-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-certificate text-white text-xl" aria-hidden="true"></i>
                        </div>
                        <h3 class="text-xl font-bold text-[var(--dark-text-color)] mb-2">
                            Garantía 100%
                        </h3>
                        <p class="text-[var(--gray-text-color)]">
                            Si no estás completamente satisfecho, regresamos sin costo adicional.
                        </p>
                    </div>

                    <div
                        class="text-center bg-white rounded-2xl p-8 shadow-lg border border-[var(--light-border-color)]">
                        <div
                            class="w-16 h-16 bg-gradient-to-br from-[var(--accent3-color)] to-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-heart text-white text-xl" aria-hidden="true"></i>
                        </div>
                        <h3 class="text-xl font-bold text-[var(--dark-text-color)] mb-2">
                            Satisfacción Total
                        </h3>
                        <p class="text-[var(--gray-text-color)]">
                            98% de nuestros clientes nos recomiendan y contratan nuevamente.
                        </p>
                    </div>
                </div>

                {/* <!-- Call to Action --> */}
                <div
                    class="text-center bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] rounded-3xl p-8 lg:p-12 text-white">
                    <h3 class="text-2xl lg:text-3xl font-bold mb-4">
                        ¿Listo para Ver la Transformación?
                    </h3>
                    <p class="text-lg mb-8 opacity-90">
                        Únete a los cientos de clientes satisfechos que han experimentado la
                        diferencia Limpio
                    </p>
                    <a href="https://wa.me/593960067820?text=Quiero ver cómo pueden transformar mis muebles/colchones/alfombras/auto" target="_blank"
                        class="inline-flex items-center px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        <i class="fab fa-whatsapp text-xl mr-3" aria-hidden="true"></i>
                        ¡Solicita tu Cotización Ahora!
                    </a>
                </div>
            </div>
        </section>
  )
}
