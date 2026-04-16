<template>
  <main>
    <HeroSection />

    <section class="container welcome-band">
      <div class="welcome-visual">
        <article class="floating-card floating-card-primary">
          <span class="floating-label">Primera visita</span>
          <strong>Revisión cercana y sin prisas</strong>
          <p>Queremos que la primera toma de contacto sea clara, cómoda y fácil de entender.</p>
        </article>

        <article class="floating-card floating-card-secondary">
          <span class="floating-label">Enfoque DentalCare</span>
          <ul class="floating-list">
            <li>Atención personalizada</li>
            <li>Prevención y seguimiento</li>
            <li>Tratamientos estéticos y familiares</li>
          </ul>
        </article>

        <div class="welcome-orbit orbit-one"></div>
        <div class="welcome-orbit orbit-two"></div>
      </div>

      <div class="welcome-copy">
        <span class="section-kicker">Bienvenidos</span>
        <h2>Un espacio pensado para que entrar al dentista se sienta más fácil</h2>
        <p>
          En DentalCare combinamos cercanía, claridad y una estética limpia para que la
          experiencia empiece bien desde el primer vistazo. Queremos que cada persona sepa
          qué hacemos, cómo trabajamos y por qué puede sentirse en buenas manos.
        </p>

        <div class="trust-points">
          <span>Atención humana</span>
          <span>Clínica accesible</span>
          <span>Prevención y estética</span>
        </div>
      </div>
    </section>

    <section class="section container">
      <SectionIntro
        kicker="Acerca de"
        title="Cuidamos tu sonrisa con una atención cercana, moderna y personalizada"
        text="DentalCare es una clínica concebida para ofrecer tratamientos de calidad en un entorno accesible, profesional y tranquilo, con un enfoque muy claro: cuidar bien a cada paciente desde la primera visita."
      />

      <div class="about-grid">
        <p class="lead-text">
          Nuestro objetivo es ayudarte a mantener una sonrisa sana, estética y funcional con
          diagnósticos claros, seguimiento cercano y tratamientos adaptados a lo que realmente
          necesitas.
        </p>
        <div class="stack-text">
          <p>
            Apostamos por una odontología integral que une prevención, tratamientos
            conservadores, estética dental y acompañamiento continuo.
          </p>
          <p>
            El proyecto pone especial foco en familias, adultos jóvenes y personas mayores,
            ofreciendo una atención clara, accesible y pensada para transmitir confianza.
          </p>
        </div>
      </div>

      <div class="wide-visual visual-card">
        <img
          class="section-image section-image-wide section-image-chair"
          src="/img/sillaDental.jpg"
          alt="Sillón dental y equipamiento clínico"
        />
      </div>
    </section>

    <section class="section container compact-top">
      <SectionIntro
        kicker="Estudio local"
        title="Una propuesta con sentido para Almensilla y su entorno"
        text="La idea de DentalCare parte de una necesidad concreta: ofrecer una opción dental cercana, cómoda y competitiva en una zona donde la oferta es reducida y existe margen real para una nueva clínica de confianza."
      />

      <div class="stats-grid">
        <article class="info-card">
          <strong>6.000 - 6.600</strong>
          <span>habitantes en el área analizada de Almensilla y su entorno más próximo.</span>
        </article>
        <article class="info-card">
          <strong>1 clínica</strong>
          <span>odontológica identificada en la zona dentro del estudio inicial.</span>
        </article>
        <article class="info-card">
          <strong>65%</strong>
          <span>de personas encuestadas cambiarían de clínica si reciben un mejor servicio.</span>
        </article>
        <article class="info-card">
          <strong>99 m²</strong>
          <span>de espacio proyectado para una clínica visible, cómoda y accesible.</span>
        </article>
      </div>
    </section>

    <section class="section container compact-top">
      <SectionIntro
        kicker="Servicios"
        title="Tratamientos pensados para cuidar tu sonrisa en cada etapa"
      />

      <div class="services-list">
        <ServiceCard
          index="01"
          title="Odontología General"
          description="Revisiones, limpiezas, prevención y tratamientos restauradores orientados a mantener una salud bucodental completa, con atención personalizada en cada consulta."
          image-src="/img/herramientasOdontologia.jpg"
          image-alt="Instrumental odontológico preparado para consulta"
          image-variant="tools"
        />
        <ServiceCard
          index="02"
          title="Estética Dental"
          description="Blanqueamiento, carillas y planes de mejora estética enfocados en conseguir resultados naturales, armónicos y duraderos."
          :reverse="true"
          image-src="/img/blanqueamiento.jpg"
          image-alt="Comparativa de blanqueamiento dental"
          image-variant="compare"
        />
      </div>
    </section>

    <section class="section container compact-top">
      <SectionIntro
        kicker="Diferencial"
        title="Una forma de trabajar basada en cercanía, precisión y confianza"
        text="Más allá del tratamiento, queremos ofrecer una experiencia cuidada: escuchar al paciente, explicar bien cada paso y hacer que cada visita resulte más cómoda y más clara."
      />

      <div class="features-grid">
        <article class="feature-card">
          <h3>Atención personalizada</h3>
          <p>Cada paciente recibe un enfoque individual, explicaciones claras y un plan adaptado a su caso.</p>
        </article>
        <article class="feature-card">
          <h3>Prevención y educación</h3>
          <p>Se da importancia a revisiones, profilaxis, flúor, selladores y educación en higiene oral.</p>
        </article>
        <article class="feature-card">
          <h3>Comodidad y accesibilidad</h3>
          <p>La propuesta contempla una clínica a pie de calle, visible y preparada para movilidad reducida.</p>
        </article>
        <article class="feature-card">
          <h3>Tecnología y precisión</h3>
          <p>Dos gabinetes, equipos actuales y apoyo de colaboradores externos para tratamientos especializados.</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import SectionIntro from '../components/SectionIntro.vue'
import ServiceCard from '../components/ServiceCard.vue'
</script>
