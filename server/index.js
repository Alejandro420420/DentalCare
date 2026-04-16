import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const port = Number(process.env.PORT || 10000)
const host = '0.0.0.0'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.resolve(__dirname, '../dist')

app.use(
  cors({
    origin: true
  })
)
app.use(express.json())

const getTransporter = () => {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const secure = String(process.env.SMTP_SECURE).toLowerCase() === 'true'
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    throw new Error('Faltan credenciales SMTP en el archivo .env')
  }

  if (
    user === 'tu_correo@gmail.com' ||
    pass === 'tu_app_password' ||
    user.includes('tu_correo')
  ) {
    throw new Error(
      'El archivo .env sigue con los valores de ejemplo. Sustituye SMTP_USER y SMTP_PASS por credenciales reales.'
    )
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    }
  })
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  const { name, lastName, email, phone, message } = req.body ?? {}

  if (!name || !lastName || !email || !message) {
    return res.status(400).json({
      message: 'Completa los campos obligatorios del formulario.'
    })
  }

  try {
    const transporter = getTransporter()
    const destination = process.env.MAIL_TO || 'emilybedoya1611@gmail.com'
    const from = process.env.MAIL_FROM || process.env.SMTP_USER

    await transporter.sendMail({
      from,
      to: destination,
      replyTo: email,
      subject: `Nueva solicitud desde DentalCare: ${name} ${lastName}`,
      text: [
        'Se ha recibido una nueva solicitud desde el formulario web.',
        '',
        `Nombre: ${name}`,
        `Apellidos: ${lastName}`,
        `Correo: ${email}`,
        `Teléfono: ${phone || 'No indicado'}`,
        '',
        'Mensaje:',
        message
      ].join('\n'),
      html: `
        <h2>Nueva solicitud desde DentalCare</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Apellidos:</strong> ${lastName}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No indicado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    return res.json({
      message: 'Solicitud enviada correctamente.'
    })
  } catch (error) {
    console.error('Error enviando correo:', error)
    return res.status(500).json({
      message: error.message || 'No se pudo enviar la solicitud. Revisa la configuración SMTP.'
    })
  }
})

app.use(express.static(distPath))

app.get('/{*path}', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next()
  }

  return res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(port, host, () => {
  console.log(`DentalCare disponible en http://${host}:${port}`)
})
