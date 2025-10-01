import Link from "next/link"

export const Footer = () => {
  return (
    <footer class="bg-[var(--dark-background-color)] text-white relative overflow-hidden code-section"
        id="global-footer">
        {/* <!-- Background decorative elements --> */}
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                class="absolute top-0 left-1/4 w-64 h-64 bg-[var(--primary-color)] rounded-full opacity-5 transform -translate-y-32">
            </div>
            <div
                class="absolute bottom-0 right-1/4 w-48 h-48 bg-[var(--accent-color)] rounded-full opacity-5 transform translate-y-24">
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* <!-- Main Footer Content --> */}
            <div class="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* <!-- Company Info --> */}
                <div class="lg:col-span-2">
                    <div class="mb-6">
                        <Link href="/" class="block mb-4 ml-5">
                            <svg class="h-[110px] w-auto transition-transform duration-300 hover:scale-[1.8] scale-[2] looka-1j8o68f"
                                viewBox="0 0 312.5 312.5">
                                <defs id="SvgjsDefs1013"></defs>
                                <g id="SvgjsG1014" featurekey="rootContainer" transform="matrix(6.25,0,0,6.25,0,0)"
                                    fill="transparent">
                                    <path xmlns="http://www.w3.org/2000/svg"
                                        d="M5 0h45v45a5 5 0 0 1-5 5H0V5a5 5 0 0 1 5-5z"></path>
                                </g>
                                <g id="SvgjsG1015" featurekey="symbolFeature-0"
                                    transform="matrix(1.25,0,0,1.25,116,94)" fill="#ffffff">
                                    <path xmlns="http://www.w3.org/2000/svg" fill="#ffffff" fill-rule="evenodd"
                                        d="M211.770903,227.529704 C212.823626,226.474383 214.471593,224.804894 214.913845,224.257147 L195.686292,203.313708 C192.706372,200.333789 191,196.299472 191,192 C191,183.163444 198.163444,176 207,176 C215.836556,176 223,183.163444 223,192 L223,199.5 L223,205.561728 C223,209.473765 223,209.473765 223,213 C223,217.059029 221.904121,220.701658 220.016909,223.902044 L234.473231,239.647377 C234.574297,239.757454 234.660701,239.875795 234.732546,240 L242.002752,240 C242.555506,240 243,240.45191 243,241.009369 L243,242.990631 C243,243.556647 242.552846,244 242.001254,244 L222.998746,244 C222.438615,244 222,243.54809 222,242.990631 L222,241.009369 C222,240.443353 222.44482,240 222.993532,240 L229.366895,240 L217.644191,227.231152 C217.22508,227.724616 215.774814,229.18554 214.719517,230.238012 C215.660257,231.318504 216.476744,232.540085 217.101555,233.925145 C219.06409,239.321813 215.780237,244 209.995066,244 L198.661197,244 C201.912662,241.436331 204,237.461928 204,233 C204,228.888046 202.227264,225.190137 199.404357,222.62884 C201.754858,222.942269 204.109324,223.433352 205.894427,224.211146 C207.807357,225.044635 209.876275,226.114261 211.770903,227.529704 L211.770903,227.529704 Z M190,244 C196.075132,244 201,239.075132 201,233 C201,226.924868 196.075132,222 190,222 C183.924868,222 179,226.924868 179,233 C179,239.075132 183.924868,244 190,244 Z M198.573736,200.546872 L217.159629,220.789992 C218.336708,218.44632 219,215.84956 219,213 C219,209.473765 219,209.473765 219,205.561728 C219,202.432099 219,202.432099 219,199.5 C219,193.625 219,193.625 219,192 C219,185.372583 213.627417,180 207,180 C200.372583,180 195,185.372583 195,192 C195,195.227702 196.277508,198.248071 198.573736,200.546872 Z"
                                        transform="translate(-179 -176)"></path>
                                </g>
                                <g id="SvgjsG1016" featurekey="nameFeature-0"
                                    transform="matrix(0.6488712871287129,0,0,0.6488712871287129,55.16318224009901,192.6127797029703)"
                                    fill="#ffffff">
                                    <path
                                        d="M21.602 19.395 q-1.09375 -1.5625 -1.97265625 -2.216796875 t-1.8945 -0.9375 t-2.1289 -0.2832 q-1.640625 0 -3.046875 0.732421875 t-2.4316 1.9922 t-1.6113 2.9297 t-0.58594 3.5449 q0 1.89453125 0.576171875 3.564453125 t1.5918 2.9199 t2.4219 1.9824 t3.0859 0.73242 q1.171875 0 2.1875 -0.380859375 t1.8457 -1.0059 t1.4551 -1.4355 t0.97656 -1.6895 l6.2891 1.7578 q-0.60546875 1.9140625 -1.77734375 3.544921875 t-2.8223 2.8223 t-3.7109 1.875 t-4.4434 0.68359 q-2.01171875 0 -3.84765625 -0.546875 t-3.4277 -1.543 t-2.8906 -2.4023 t-2.2168 -3.1152 t-1.4258 -3.6719 t-0.50781 -4.0918 q0 -3.18359375 1.11328125 -5.966796875 t3.0469 -4.8633 t4.541 -3.2813 t5.6152 -1.2012 q2.40234375 0 4.04296875 0.595703125 t3.6133 2.3535 l4.375 0 l0 6.6016 l-6.0352 0 z M33.70358203125 10.390999999999998 l12.676 0 l0 5.3711 l-3.125 0 l0 18.887 l6.4453 0 q0.25390625 0 0.498046875 -0.146484375 t0.42969 -0.38086 t0.30273 -0.50781 t0.11719 -0.52734 l0 -3.9648 l6.3281 0 l0 10.879 l-23.672 0 l0 -5.3516 l3.0664 0 l0 -18.887 l-3.0664 0 l0 -5.3711 z M61.1376640625 10.390999999999998 l23.555 0 l0 10.098 l-6.3672 0 l0 -4.1992 l-7.5977 0 l0 5.8398 l5.8789 0 l0 5.6641 l-5.8789 0 l0 6.8555 l7.5977 0 l0 -5.2539 l6.3672 0 l0 10.605 l-23.555 0 l0 -5.3516 l3.1055 0 l0 -18.359 l-3.1055 0 l0 -5.8984 z M104.46980859375 34.6484 l2.9492 0 l-1.3281 -4.2578 l-9.1016 0 l-1.3281 4.2578 l3.125 0 l0 5.3516 l-11.23 0 l0 -5.3516 l2.207 0 l8.0664 -24.258 l7.832 0 l7.8906 24.258 l2.1484 0 l0 5.3516 l-11.23 0 l0 -5.3516 z M98.53280859375 25.391 l5.9766 0 l-3.0078 -9.6289 z M138.212921875 10.390999999999998 l11.25 0 l0 5.3711 l-2.4023 0 l0 24.238 l-6.4844 0 l-12.324 -19.141 l0 13.789 l2.4805 0 l0 5.3516 l-11.23 0 l0 -5.3516 l2.4414 0 l0 -18.887 l-2.4023 0 l0 -5.3711 l8.9453 0 l12.246 19.395 l0 -14.023 l-2.5195 0 l0 -5.3711 z M153.81100390625 10.390999999999998 l13.672 0 q2.28515625 0 4.19921875 0.712890625 t3.3008 1.9238 t2.168 2.793 t0.78125 3.3008 q0 2.0703125 -0.615234375 3.876953125 t-1.9043 3.1348 t-3.2617 2.0996 t-4.668 0.77148 l-4.1211 0 l0 5.6445 l2.7148 0 l0 5.3516 l-12.266 0 l0 -5.3516 l3.0664 0 l0 -18.887 l-3.0664 0 l0 -5.3711 z M163.36200390625 15.762 l0 7.9492 l2.6758 0 q2.2265625 0 3.53515625 -0.9375 t1.3086 -2.9688 q0 -1.89453125 -1.23046875 -2.96875 t-3.6133 -1.0742 l-2.6758 0 z M182.2997734375 10.390999999999998 l15.664 0 q2.28515625 0 4.08203125 0.68359375 t3.0273 1.8262 t1.8848 2.6563 t0.6543 3.1543 q0 1.50390625 -0.322265625 2.63671875 t-0.9375 2.0117 t-1.5137 1.5527 t-2.0508 1.2207 q0.99609375 0.5078125 1.7578125 1.552734375 t1.1523 2.7051 l0.99609 3.8477 l2.4414 0 l0.039063 5.7617 l-8.5938 0 l-1.1719 -7.0313 q-0.17578125 -1.25 -0.537109375 -2.158203125 t-0.9668 -1.4844 t-1.4746 -0.84961 t-2.0605 -0.27344 l-2.5195 0 l0 6.4453 l2.7148 0 l0 5.3516 l-12.266 0 l0 -5.3516 l3.0664 0 l0 -18.887 l-3.0664 0 l0 -5.3711 z M191.8507734375 15.762 l0 7.168 l3.8867 0 q1.11328125 0 2.001953125 -0.205078125 t1.5234 -0.64453 t0.97656 -1.1035 t0.3418 -1.582 q0 -1.71875 -1.23046875 -2.67578125 t-3.6133 -0.95703 l-3.8867 0 z M226.72560546875 40.52734 q-2.01171875 0 -3.84765625 -0.546875 t-3.4277 -1.543 t-2.8906 -2.3926 t-2.2168 -3.1055 t-1.4258 -3.6621 t-0.50781 -4.082 t0.50781 -4.0918 t1.4258 -3.6719 t2.2168 -3.1055 t2.8906 -2.3926 t3.4277 -1.543 t3.8477 -0.54688 t3.8574 0.54688 t3.4375 1.543 t2.8906 2.3926 t2.2266 3.1055 t1.4355 3.6719 t0.50781 4.0918 q0 2.109375 -0.5078125 4.072265625 t-1.4355 3.6719 t-2.2266 3.1055 t-2.8906 2.3926 t-3.4375 1.543 t-3.8574 0.54688 z M226.72560546875 34.3945 q1.69921875 0 3.115234375 -0.732421875 t2.4316 -1.9922 t1.5723 -2.9297 t0.55664 -3.5449 q0 -1.89453125 -0.56640625 -3.57421875 t-1.5918 -2.9395 t-2.4316 -1.9922 t-3.0859 -0.73242 t-3.0859 0.73242 t-2.4219 1.9922 t-1.5918 2.9395 t-0.57617 3.5742 q0 1.875 0.576171875 3.544921875 t1.5918 2.9297 t2.4219 1.9922 t3.0859 0.73242 z M255.26608203125 10.390999999999998 l23.555 0 l0 10.098 l-6.3672 0 l0 -4.1992 l-7.5977 0 l0 5.8398 l5.8789 0 l0 5.6641 l-5.8789 0 l0 6.8555 l7.5977 0 l0 -5.2539 l6.3672 0 l0 10.605 l-23.555 0 l0 -5.3516 l3.1055 0 l0 -18.359 l-3.1055 0 l0 -5.8984 z M302.7592265625 19.395 q-1.09375 -1.5625 -1.97265625 -2.216796875 t-1.8945 -0.9375 t-2.1289 -0.2832 q-1.640625 0 -3.046875 0.732421875 t-2.4316 1.9922 t-1.6113 2.9297 t-0.58594 3.5449 q0 1.89453125 0.576171875 3.564453125 t1.5918 2.9199 t2.4219 1.9824 t3.0859 0.73242 q1.171875 0 2.1875 -0.380859375 t1.8457 -1.0059 t1.4551 -1.4355 t0.97656 -1.6895 l6.2891 1.7578 q-0.60546875 1.9140625 -1.77734375 3.544921875 t-2.8223 2.8223 t-3.7109 1.875 t-4.4434 0.68359 q-2.01171875 0 -3.84765625 -0.546875 t-3.4277 -1.543 t-2.8906 -2.4023 t-2.2168 -3.1152 t-1.4258 -3.6719 t-0.50781 -4.0918 q0 -3.18359375 1.11328125 -5.966796875 t3.0469 -4.8633 t4.541 -3.2813 t5.6152 -1.2012 q2.40234375 0 4.04296875 0.595703125 t3.6133 2.3535 l4.375 0 l0 6.6016 l-6.0352 0 z"
                                        >
                                    </path>
                                </g>
                            </svg>
                        </Link>
                        <p class="text-gray-300 text-lg leading-relaxed max-w-md">
                            Especialistas en limpieza y desinfección a domicilio de colchones,
                            muebles, alfombras e interiores de vehículos en Guayas, Ecuador.
                        </p>
                    </div>

                    {/* <!-- Contact Info --> */}
                    <div class="space-y-3">
                        <div class="flex items-center space-x-3">
                            <div
                                class="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                                <i class="fas fa-phone text-white" aria-hidden="true"></i>
                            </div>
                            <div>
                                <a href="tel:+593989411325"
                                    class="text-white hover:text-[var(--primary-color)] transition-colors duration-300 font-medium">
                                    098 941 1325
                                </a>
                            </div>
                        </div>

                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <i class="fab fa-whatsapp text-white" aria-hidden="true"></i>
                            </div>
                            <div>
                                <a href="https://wa.me/593989411325" target="_blank"
                                    class="text-white hover:text-green-400 transition-colors duration-300 font-medium">
                                    WhatsApp: 098 941 1325
                                </a>
                            </div>
                        </div>

                        <div class="flex items-center space-x-3">
                            <div
                                class="w-10 h-10 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
                                <i class="fas fa-map-marker-alt text-white" aria-hidden="true"></i>
                            </div>
                            <div>
                                <span class="text-gray-300">Guayas, Ecuador</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Quick Links --> */}
                <div>
                    <h3 class="text-xl font-bold text-white mb-6">Navegación Rápida</h3>
                    <ul class="space-y-3">
                        <li>
                            <Link href="/"
                                class="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300 flex items-center group">
                                <i class="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"
                                    aria-hidden="true"></i>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <a href="#nuestros-servicios"
                                class="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300 flex items-center group">
                                <i class="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"
                                    aria-hidden="true"></i>
                                Nuestros Servicios
                            </a>
                        </li>
                        <li>
                            <a href="#por-que-elegirnos"
                                class="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300 flex items-center group">
                                <i class="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"
                                    aria-hidden="true"></i>
                                Por Qué Elegirnos
                            </a>
                        </li>
                        <li>
                            <a href="#galeria-de-resultados"
                                class="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300 flex items-center group">
                                <i class="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"
                                    aria-hidden="true"></i>
                                Galería de Resultados
                            </a>
                        </li>
                        <li>
                            <a href="#contacto"
                                class="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300 flex items-center group">
                                <i class="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"
                                    aria-hidden="true"></i>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Services --> */}
                <div>
                    <h3 class="text-xl font-bold text-white mb-6">Nuestros Servicios</h3>
                    <ul class="space-y-3">
                        <li>
                            <a href="https://wa.me/593989411325?text=Me interesa el servicio de limpieza de colchones"
                                class="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300 flex items-center group">
                                <i class="fas fa-bed text-xs mr-2 text-[var(--primary-color)]"
                                    aria-hidden="true"></i>
                                Limpieza de Colchones
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/593989411325?text=Me interesa el servicio de limpieza de muebles"
                                class="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300 flex items-center group">
                                <i class="fas fa-couch text-xs mr-2 text-[var(--accent-color)]"
                                    aria-hidden="true"></i>
                                Limpieza de Muebles
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/593989411325?text=Me interesa el servicio de limpieza de alfombras"
                                class="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300 flex items-center group">
                                <i class="fa-solid fa-rug text-xs mr-2 text-[var(--accent3-color)]"
                                    aria-hidden="true"></i>
                                Limpieza de Alfombras
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/593989411325?text=Me interesa el servicio de limpieza de interiores de vehículos"
                                class="text-gray-300 hover:text-[var(--primary-color)] transition-colors duration-300 flex  items-center group">
                                <i class="fas fa-car text-xs mr-2 text-[var(--accent2-color)]"
                                    aria-hidden="true"></i>
                                Interiores de Vehículos
                            </a>
                        </li>
                    </ul>

                    {/* <!-- CTA Button --> */}
                    <div class="mt-6">
                        <a href="https://wa.me/593989411325?text=Quiero solicitar una cotización gratuita" target="_blank"
                            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <i class="fab fa-whatsapp mr-2" aria-hidden="true"></i>
                            Cotizar Ahora
                        </a>
                    </div>  
                </div>
            </div>

            {/* <!-- Social Media & Bottom Bar --> */}
            <div class="border-t border-gray-700 pt-8 pb-6">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    {/* <!-- Social Media --> */}
                    <div class="flex items-center space-x-4">
                        <span class="text-gray-300 text-sm font-medium">Síguenos:</span>
                        <div class="flex space-x-3">
                            <a href="https://www.facebook.com/share/16fEtmTJp7/" target="_blank"
                                class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 group">
                                <i class="fab fa-facebook-f text-white group-hover:scale-110 transition-transform duration-300"
                                    aria-hidden="true"></i>
                            </a>
                            <a href="https://www.instagram.com/cleanpro_ec?igsh=MTF3MGlvZWx5a3R5" target="_blank"
                                class="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300 group">
                                <i class="fab fa-instagram text-white group-hover:scale-110 transition-transform duration-300"
                                    aria-hidden="true"></i>
                            </a>
                            <a href="https://www.tiktok.com/@cleanproec6?_t=ZM-8xt9xvw8L4v&_r=1" target="_blank"
                                class="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 group">
                                <i class="fab fa-tiktok text-white group-hover:scale-110 transition-transform duration-300"
                                    aria-hidden="true"></i>
                            </a>
                            <a href="https://wa.me/593989411325" target="_blank"
                                class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300 group">
                                <i class="fab fa-whatsapp text-white group-hover:scale-110 transition-transform duration-300"
                                    aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Business Hours --> */}
                    <div class="text-center md:text-right">
                        <div class="text-sm text-gray-300">
                            <div class="font-semibold text-white mb-1">Horario de Atención</div>
                            <div>Lunes a Domingo: 7:00 AM - 8:00 PM</div>
                            <div class="text-xs text-[var(--primary-color)] mt-1">
                                ¡Disponibles fines de semana!
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Copyright --> */}
            <div class="border-t border-gray-700 pt-6 pb-4">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div class="text-sm text-gray-400">
                        © 2025 CleanPro EC - Servicios de Limpieza Especializada. Todos los
                        derechos reservados.
                    </div>

                    <div class="flex items-center space-x-6 text-sm text-gray-400">
                        <span>Guayas, Ecuador</span>
                        <span>•</span>
                        <span>Servicio a Domicilio</span>
                        <span>•</span>
                        <span>100% Especializado</span>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Floating WhatsApp Button (Alternative) --> */}
        <div class="fixed bottom-6 right-6 z-50">
            <a href="https://wa.me/593989411325?text=¡Hola! Necesito información sobre sus servicios de limpieza" target="_blank"
                class="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse">
                <i class="fab fa-whatsapp text-xl" aria-hidden="true"></i>
            </a>
        </div>
    </footer>
  )
}
