'use client';

import { useState } from 'react';

export const Form = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        servicio: '',
        mensaje: '',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita que la página se recargue

        setLoading(true);
        setMessage('');
        setIsError(false);

        try {
        const response = await fetch('/api/submit-form', { // Asegúrate que esta URL coincida con tu carpeta de API
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage(data.message || 'Formulario enviado con éxito.');
            setFormData({ // Limpia el formulario después del éxito
            nombre: '',
            telefono: '',
            email: '',
            servicio: '',
            mensaje: '',
            });
        } else {
            setIsError(true);
            setMessage(data.message || 'Hubo un error al enviar el formulario.');
        }
        } catch (error) {
        setIsError(true);
        setMessage('Error de red. Por favor, inténtalo de nuevo más tarde.');
        console.error('Error al enviar el formulario:', error);
        } finally {
        setLoading(false);
        }
    };

  return (
    <form onSubmit={handleSubmit} class="space-y-6">
        <div class="grid md:grid-cols-2 gap-4">
            <div>
                <label class="block text-sm font-medium text-[var(--dark-text-color)] mb-2">
                    Nombre completo *
                </label>
                <input 
                    type="text" 
                    name="nombre" 
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    class="w-full px-4 py-3 border border-[var(--light-border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre" />
            </div>
            <div>
                <label class="block text-sm font-medium text-[var(--dark-text-color)] mb-2">
                    Teléfono *
                </label>
                <input 
                    type="tel" 
                    name="telefono" 
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    class="w-full px-4 py-3 border border-[var(--light-border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-300"
                    placeholder="096 000 0000" />
            </div>
        </div>

        <div>
            <label class="block text-sm font-medium text-[var(--dark-text-color)] mb-2">
                Correo electrónico *
            </label>
            <input 
                type="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                class="w-full px-4 py-3 border border-[var(--light-border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-300"
                placeholder="tu@email.com" />
        </div>

        <div>
            <label class="block text-sm font-medium text-[var(--dark-text-color)] mb-2">
                Servicio de interés *
            </label>
            <select 
                name="servicio" 
                required
                value={formData.servicio}
                onChange={handleChange}
                class="w-full px-4 py-3 border border-[var(--light-border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-300">
                <option value="">Selecciona un servicio</option>
                <option value="colchones">Limpieza de Colchones</option>
                <option value="muebles">Limpieza de Muebles</option>
                <option value="alfombras">Limpieza de Alfombras</option>
                <option value="vehiculos">
                    Limpieza de Interiores de Vehículos
                </option>
                <option value="multiple">Múltiples servicios</option>
            </select>
        </div>

        <div>
            <label class="block text-sm font-medium text-[var(--dark-text-color)] mb-2">
                Describe tu necesidad
            </label>
            <textarea 
                name="mensaje" 
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                class="w-full px-4 py-3 border border-[var(--light-border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-300"
                placeholder="Cuéntanos qué necesitas limpiar, cuántos elementos, ubicación aproximada, etc."></textarea>
        </div>

        <button 
            type="submit"
            disabled={loading}
            class="w-full px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] text-white rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
            <i class="fas fa-paper-plane mr-3" aria-hidden="true"></i>
            Enviar Solicitud
        </button>
        {message && (
            <p className={`mt-4 text-center ${isError ? 'text-red-600' : 'text-green-600'}`}>
                {message}
            </p>
        )}
    </form>
  )
}
