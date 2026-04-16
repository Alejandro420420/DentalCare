# DentalCare

Proyecto web para una clinica odontologica con:

- Frontend en Vue 3 + Vite
- Rutas para `Inicio`, `Acerca de`, `Servicios` y `Contacto`
- Backend en Express
- Envio del formulario mediante Nodemailer

## Ejecutar en local

1. Instala dependencias:

```bash
npm install
```

2. Crea un archivo `.env` a partir de `.env.example`

3. Arranca frontend y backend:

```bash
npm run dev
```

## Despliegue recomendado

La opcion mas simple para este proyecto es `Render`, porque permite publicar el frontend y el backend juntos en una sola URL publica.

La configuracion ya esta preparada en [render.yaml](/c:/Users/alexh/Desktop/DentalCare/render.yaml).

### Pasos

1. Sube este proyecto a un repositorio de GitHub.
2. Entra en Render.
3. Crea un nuevo servicio usando `Blueprint`.
4. Conecta el repositorio.
5. Render detectara `render.yaml` automaticamente.
6. Anade en Render las variables SMTP necesarias.
7. Publica el servicio.

La URL gratis sera algo del tipo:

```txt
https://dentalcare.onrender.com
```

## Publicarlo en tu dominio

Cuando Render termine el despliegue y te de una URL como `https://dentalcare.onrender.com`, puedes conectarle tu dominio propio.

### Pasos

1. Compra o usa un dominio en Namecheap, GoDaddy, Cloudflare o el proveedor que prefieras.
2. En Render, entra en tu servicio `dentalcare`.
3. Abre `Settings` > `Custom Domains`.
4. Anade tu dominio, por ejemplo `tudominio.com` o `www.tudominio.com`.
5. Render te mostrara los registros DNS que debes crear en tu proveedor del dominio.
6. Crea esos registros DNS exactamente como te los muestre Render.
7. Espera a que el dominio quede verificado y activo.

### Recomendacion practica

- Usa `www.tudominio.com` como dominio principal.
- Si puedes, redirige `tudominio.com` hacia `www.tudominio.com`.
- Deja `VITE_API_URL` vacio en produccion para que el formulario use el mismo dominio del sitio.

## Configuracion del correo

El formulario envia los datos al endpoint:

```txt
POST /api/contact
```

Y el backend reenvia la solicitud al correo definido en:

```txt
MAIL_TO
```

Variables necesarias en `.env`:

```env
PORT=3001
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu_correo@gmail.com
SMTP_PASS=tu_app_password
MAIL_FROM="DentalCare <tu_correo@gmail.com>"
MAIL_TO=emilybedoya1611@gmail.com
VITE_API_URL=
```

## Notas

- El logo se carga desde `img/dentalcare.png`.
- Si usas Gmail, normalmente necesitaras una App Password para `SMTP_PASS`.
- En produccion con Render, deja `VITE_API_URL` vacio para usar el mismo dominio del sitio.
