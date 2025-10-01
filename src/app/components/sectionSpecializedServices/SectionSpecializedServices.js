export const SectionSpecializedServices = () => {
    return (
        <section id="nuestros-servicios" class="py-20 bg-white relative overflow-hidden code-section">
            {/* <!-- Background decorations --> */}
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    class="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] rounded-full opacity-5">
                </div>
                <div
                    class="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent3-color)] rounded-full opacity-5">
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* <!-- Section Header --> */}
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-6">
                        Nuestros
                        <span
                            class="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] bg-clip-text text-transparent"> Servicios
                            Especializados</span>
                    </h2>
                    <p class="text-xl text-[var(--gray-text-color)] max-w-3xl mx-auto">
                        Nos enfocamos exclusivamente en estos servicios específicos,
                        garantizando resultados profesionales y de calidad superior
                    </p>
                    <div
                        class="mt-8 w-24 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] mx-auto rounded-full">
                    </div>
                </div>

                {/* <!-- Services Grid --> */}
                <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* <!-- Service 1: Colchones --> */}
                    <div
                        class="group bg-gradient-to-br from-white to-[var(--light-background-color)] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[var(--light-border-color)]">
                        <div class="relative mb-6">
                            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8e42bfae-d79c-434a-1aaa-17f526c21c00/publicContain"
                                alt="Clean the upholstery of the sofa in the living room closeup"
                                class="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
                                <div
                                    class="absolute top-4 left-4 bg-[var(--primary-color)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    <i class="fas fa-bed mr-2" aria-hidden="true"></i>Especialidad #1
                                </div>
                        </div>

                        <h3 class="text-2xl font-bold text-[var(--dark-text-color)] mb-4">
                            Limpieza de Colchones
                        </h3>
                        <p class="text-[var(--gray-text-color)] mb-6 leading-relaxed">
                            Eliminamos ácaros, bacterias, manchas y olores de tu colchón.
                            Utilizamos técnicas de vapor y productos especializados que
                            desinfectan profundamente sin dañar el material.
                        </p>

                        <ul class="space-y-2 mb-6">
                            <li class="flex items-center text-sm text-[var(--dark-text-color)]">
                                <i class="fas fa-check-circle text-[var(--accent3-color)] mr-3" aria-hidden="true"></i>
                                Eliminación de ácaros y bacterias
                            </li>
                            <li class="flex items-center text-sm text-[var(--dark-text-color)]">
                                <i class="fas fa-check-circle text-[var(--accent3-color)] mr-3" aria-hidden="true"></i>
                                Remoción de manchas y olores
                            </li>
                            <li class="flex items-center text-sm text-[var(--dark-text-color)]">
                                <i class="fas fa-check-circle text-[var(--accent3-color)] mr-3" aria-hidden="true"></i>
                                Secado rápido sin humedad
                            </li>
                        </ul>

                        <a href="https://wa.me/593989411325?text=Me interesa el servicio de limpieza de colchones"
                            class="inline-flex items-center text-[var(--primary-color)] font-semibold hover:text-[var(--primary-button-hover-bg-color)] transition-colors duration-300">
                            Solicitar servicio
                            <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                aria-hidden="true"></i>
                        </a>
                    </div>

                    {/* <!-- Service 2: Muebles --> */}
                    <div
                        class="group bg-gradient-to-br from-white to-[var(--light-background-color)] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[var(--light-border-color)]">
                        <div class="relative mb-6">
                            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8e42bfae-d79c-434a-1aaa-17f526c21c00/publicContain"
                                alt="Clean the upholstery of the sofa in the living room closeup"
                                class="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
                                <div
                                    class="absolute top-4 left-4 bg-[var(--accent-color)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    <i class="fas fa-couch mr-2" aria-hidden="true"></i>Especialidad #2
                                </div>
                        </div>

                        <h3 class="text-2xl font-bold text-[var(--dark-text-color)] mb-4">
                            Limpieza de Muebles
                        </h3>
                        <p class="text-[var(--gray-text-color)] mb-6 leading-relaxed">
                            Renovamos tus sofás, sillas y muebles tapizados. Técnicas específicas
                            para cada tipo de tela que restauran el color original y eliminan la
                            suciedad acumulada.
                        </p>

                        <ul class="space-y-2 mb-6">
                            <li class="flex items-center text-sm text-[var(--dark-text-color)]">
                                <i class="fas fa-check-circle text-[var(--accent3-color)] mr-3" aria-hidden="true"></i>
                                Restauración del color original
                            </li>
                            <li class="flex items-center text-sm text-[var(--dark-text-color)]">
                                <i class="fas fa-check-circle text-[var(--accent3-color)] mr-3" aria-hidden="true"></i>
                                Técnicas específicas por material
                            </li>
                            <li class="flex items-center text-sm text-[var(--dark-text-color)]">
                                <i class="fas fa-check-circle text-[var(--accent3-color)] mr-3" aria-hidden="true"></i>
                                Protección de tejidos delicados
                            </li>
                        </ul>

                        <a href="https://wa.me/593989411325?text=Me interesa el servicio de limpieza de muebles"
                            class="inline-flex items-center text-[var(--primary-color)] font-semibold hover:text-[var(--primary-button-hover-bg-color)] transition-colors duration-300">
                            Solicitar servicio
                            <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                aria-hidden="true"></i>
                        </a>
                    </div>

                    {/* <!-- Service 3: Alfombras --> */}
                    <div
                        class="group bg-gradient-to-br from-white to-[var(--light-background-color)] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[var(--light-border-color)]">
                        <div class="relative mb-6">
                            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/17f35b7f-592b-4e0d-7f1d-e95765bb6600/public"
                                alt="A closeup of vacuuming a stylish area rug in a contemporary living space, radiating comfort"
                                class="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
                                <div
                                    class="absolute top-4 left-4 bg-[var(--accent3-color)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    <i class="fa-solid fa-rug mr-2" aria-hidden="true"></i>Especialidad #3
                                </div>
                        </div>

                        <h3 class="text-2xl font-bold text-[var(--dark-text-color)] mb-4">
                            Limpieza de Alfombras
                        </h3>
                        <p class="text-[var(--gray-text-color)] mb-6 leading-relaxed">
                            Limpieza profunda de alfombras y tapetes. Eliminamos manchas
                            difíciles, tierra incrustada y alérgenos, devolviendo la suavidad y
                            frescura original.
                        </p>

                        <ul class="space-y-2 mb-6">
                            <li class="flex items-center text-sm text-[var(--dark-text-color)]">
                                <i class="fas fa-check-circle text-[var(--accent3-color)] mr-3" aria-hidden="true"></i>
                                Eliminación de manchas difíciles
                            </li>
                            <li class="flex items-center text-sm text-[var(--dark-text-color)]">
                                <i class="fas fa-check-circle text-[var(--accent3-color)] mr-3" aria-hidden="true"></i>
                                Remoción de alérgenos y polvo
                            </li>
                            <li class="flex items-center text-sm text-[var(--dark-text-color)]">
                                <i class="fas fa-check-circle text-[var(--accent3-color)] mr-3" aria-hidden="true"></i>
                                Recuperación de suavidad original
                            </li>
                        </ul>

                        <a href="https://wa.me/593989411325?text=Me interesa el servicio de limpieza de alfombras"
                            class="inline-flex items-center text-[var(--primary-color)] font-semibold hover:text-[var(--primary-button-hover-bg-color)] transition-colors duration-300">
                            Solicitar servicio
                            <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                aria-hidden="true"></i>
                        </a>
                    </div>

                    {/* <!-- Service 4: Autos --> */}
                    <div
                        class="group bg-gradient-to-br from-white to-[var(--light-background-color)] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[var(--light-border-color)]">
                        <div class="relative mb-6">
                            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/d489ac07-2a2b-47bf-f0a7-0e06960f8a00/public"
                                alt="Car interior cleaning. Car detailing"
                                class="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
                                <div
                                    class="absolute top-4 left-4 bg-[var(--accent2-color)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    <i class="fas fa-car mr-2" aria-hidden="true"></i>Especialidad #4
                                </div>
                        </div>

                        <h3 class="text-2xl font-bold text-[var(--dark-text-color)] mb-4">
                            Limpieza de Interiores de Vehículos
                        </h3>
                        <p class="text-[var(--gray-text-color)] mb-6 leading-relaxed">
                            Detailing completo del interior de tu vehículo. Asientos, tapicería,
                            tablero y cada rincón queda impecable. Como nuevo, pero mejor.
                        </p>

                        <ul class="space-y-2 mb-6">
                            <li class="flex items-center text-sm text-[var(--dark-text-color)]">
                                <i class="fas fa-check-circle text-[var(--accent3-color)] mr-3" aria-hidden="true"></i>
                                Limpieza completa de asientos
                            </li>
                            <li class="flex items-center text-sm text-[var(--dark-text-color)]">
                                <i class="fas fa-check-circle text-[var(--accent3-color)] mr-3" aria-hidden="true"></i>
                                Desinfección de superficies
                            </li>
                            <li class="flex items-center text-sm text-[var(--dark-text-color)]">
                                <i class="fas fa-check-circle text-[var(--accent3-color)] mr-3" aria-hidden="true"></i>
                                Eliminación de olores persistentes
                            </li>
                        </ul>

                        <a href="https://wa.me/593989411325?text=Me interesa el servicio de limpieza de interiores de vehículos"
                            class="inline-flex items-center text-[var(--primary-color)] font-semibold hover:text-[var(--primary-button-hover-bg-color)] transition-colors duration-300">
                            Solicitar servicio
                            <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                {/* <!-- Bottom CTA --> */}
                <div class="text-center mt-16">
                    <p class="text-lg text-[var(--gray-text-color)] mb-6">
                        ¿No estás seguro de cuál servicio necesitas? ¡Contáctanos y te
                        asesoramos sin compromiso!
                    </p>
                    <a href="https://wa.me/593989411325?text=Necesito asesoría sobre qué servicio de limpieza necesito" target="_blank"
                        class="inline-flex items-center px-8 py-4 bg-[var(--primary-color)] text-[var(--primary-button-text-color)] rounded-lg font-semibold text-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        <i class="fab fa-whatsapp text-xl mr-3" aria-hidden="true"></i>
                        Consulta Gratuita por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}
