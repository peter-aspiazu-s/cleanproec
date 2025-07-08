// src/app/api/submit-form/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; // Importa Nodemailer

export async function POST(request) {
  try {
    const formData = await request.json(); // Obtiene los datos enviados desde el formulario

    // Configura el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Servidor SMTP de Gmail
      port: 465, // Puerto seguro para SSL
      secure: true, // Usa SSL/TLS
      auth: {
        user: process.env.EMAIL_USER, // Tu correo electrónico (desde .env.local)
        pass: process.env.EMAIL_PASS, // Tu contraseña de aplicación/normal (desde .env.local)
      },
      // Puedes añadir esto para ver más detalles en consola si tienes problemas
      // debug: true,
      // logger: true
    });

    // Contenido del correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER, // De dónde se envía el correo
      to: 'aspiazusa@gmail.com', // A dónde se envía el correo (tu correo)
      subject: `Nuevo formulario de contacto de ${formData.nombre}`, // Asunto del correo
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${formData.nombre}</p>
        <p><strong>Teléfono:</strong> ${formData.telefono}</p>
        <p><strong>Correo Electrónico:</strong> ${formData.email}</p>
        <p><strong>Servicio de Interés:</strong> ${formData.servicio}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${formData.mensaje}</p>
      `, // Contenido del correo en HTML
    };

    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);

    console.log('Correo enviado con éxito:', formData);

    // Responde al frontend con éxito
    return NextResponse.json({ message: 'Formulario enviado con éxito. Te contactaremos pronto.' }, { status: 200 });

  } catch (error) {
    console.error('Error al procesar el formulario o enviar el correo:', error);

    // Responde al frontend con un error
    return NextResponse.json({ message: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.', error: error.message }, { status: 500 });
  }
}