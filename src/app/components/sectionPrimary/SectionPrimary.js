export const SectionPrimary = () => {
    return (
        <section
            className="relative min-h-screen pt-20 bg-gradient-to-br from-[var(--light-background-color)] via-white to-[var(--medium-background-color)] overflow-hidden code-section"
            id="sejpc0k">
            {/* <!-- Floating decorative elements --> */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-20 h-20 bg-[var(--accent-color)] rounded-full opacity-20 animate-bounce">
                </div>
                <div
                    className="absolute top-40 right-20 w-16 h-16 bg-[var(--accent2-color)] rounded-full opacity-15 animate-pulse">
                </div>
                <div className="absolute bottom-32 left-20 w-24 h-24 bg-[var(--accent3-color)] rounded-full opacity-10 animate-bounce"
                    style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-20 right-10 w-12 h-12 bg-[var(--accent4-color)] rounded-full opacity-25 animate-pulse"
                    style={{animationDelay: '1s'}}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
                    {/* <!-- Left Content --> */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-6">
                            <h1
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--dark-text-color)] leading-tight">
                                <span className="block">Limpieza</span>
                                <span
                                    className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] bg-clip-text text-transparent">Especializada</span>
                                <span className="block">a Domicilio</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-[var(--gray-text-color)] max-w-2xl mx-auto lg:mx-0">
                                Nos especializamos exclusivamente en la limpieza y desinfección
                                profesional de 
                                <span className="font-semibold text-[var(--primary-color)]"> colchones, muebles,
                                    alfombras e interiores de vehículos</span>. Todo en la comodidad de tu
                                hogar.
                            </p>
                        </div>

                        {/* <!-- Service highlights --> */}
                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                            <div
                                className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-[var(--light-border-color)]">
                                <div
                                    className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                                    <i className="fas fa-bed text-white text-sm" aria-hidden="true"></i>
                                </div>
                                <span className="text-sm font-medium text-[var(--dark-text-color)]">Colchones</span>
                            </div>
                            <div
                                className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-[var(--light-border-color)]">
                                <div
                                    className="w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
                                    <i className="fas fa-couch text-white text-sm" aria-hidden="true"></i>
                                </div>
                                <span className="text-sm font-medium text-[var(--dark-text-color)]">Muebles</span>
                            </div>
                            <div
                                className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-[var(--light-border-color)]">
                                <div
                                    className="w-8 h-8 bg-[var(--accent3-color)] rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-rug text-white text-sm" aria-hidden="true"></i>
                                </div>
                                <span className="text-sm font-medium text-[var(--dark-text-color)]">Alfombras</span>
                            </div>
                            <div
                                className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-[var(--light-border-color)]">
                                <div
                                    className="w-8 h-8 bg-[var(--accent2-color)] rounded-full flex items-center justify-center">
                                    <i className="fas fa-car text-white text-sm" aria-hidden="true"></i>
                                </div>
                                <span className="text-sm font-medium text-[var(--dark-text-color)]">Autos</span>
                            </div>
                        </div>

                        {/* <!-- CTA Buttons --> */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                            <a href="https://wa.me/593960067820?text=¡Hola! Me interesa solicitar una cotización para servicios de limpieza especializada"
                                className="inline-flex items-center px-8 py-4 bg-[var(--primary-color)] text-[var(--primary-button-text-color)] rounded-lg font-semibold text-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                                <i className="fab fa-whatsapp text-2xl mr-3" aria-hidden="true"></i>
                                ¡Cotiza Ahora por WhatsApp!
                            </a>

                            <a href="tel:+593960067820"
                                className="inline-flex items-center px-8 py-4 bg-[var(--secondary-button-bg-color)] text-[var(--secondary-button-text-color)] rounded-lg font-semibold text-lg hover:bg-[var(--secondary-button-hover-bg-color)] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                                <i className="fas fa-phone text-xl mr-3" aria-hidden="true"></i>
                                Llamar Ahora
                            </a>
                        </div>

                        {/* <!-- Contact info --> */}
                        <div class="flex items-center justify-center lg:justify-start space-x-6 pt-4">
                            <div class="flex items-center space-x-2 text-[var(--gray-text-color)]">
                                <i class="fas fa-phone text-[var(--primary-color)]" aria-hidden="true"></i>
                                <span class="font-medium">096 006 7820</span>
                            </div>
                            <div class="flex items-center space-x-2 text-[var(--gray-text-color)]">
                                <i class="fas fa-map-marker-alt text-[var(--primary-color)]" aria-hidden="true"></i>
                                <span class="font-medium">Guayas, Ecuador</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Right Content - Image --> */}
                    <div class="relative">
                        <div class="relative transform lg:translate-x-12">
                            {/* <!-- Main image with decorative elements --> */}
                            <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8bd216d8-7d0c-4338-f8a2-f363fa1a6c00/public"
                                    alt="Hand of a woman cleaning car dashboard"
                                    class="w-full h-96 lg:h-[500px] object-cover" />
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)] to-transparent opacity-20">
                                    </div>
                            </div>

                            {/* <!-- Floating badges --> */}
                            <div
                                class="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-[var(--light-border-color)] transform rotate-6 hover:rotate-12 transition-transform duration-300">
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-[var(--primary-color)]">
                                        100%
                                    </div>
                                    <div class="text-xs font-medium text-[var(--gray-text-color)]">
                                        Especializado
                                    </div>
                                </div>
                            </div>

                            <div
                                class="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-[var(--light-border-color)] transform -rotate-6 hover:-rotate-12 transition-transform duration-300">
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-[var(--accent3-color)]">
                                        24/7
                                    </div>
                                    <div class="text-xs font-medium text-[var(--gray-text-color)]">
                                        Disponible
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- WhatsApp floating button --> */}
            <a href="https://wa.me/593960067820?text=¡Hola! Me interesa solicitar una cotización para servicios de limpieza especializada"
                class="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse">
                <i class="fab fa-whatsapp text-2xl" aria-hidden="true"></i>
            </a>

            {/* <!-- Bottom wave --> */}
            <div class="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg class="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        fill="white"></path>
                </svg>
            </div>
        </section>
    )
}
