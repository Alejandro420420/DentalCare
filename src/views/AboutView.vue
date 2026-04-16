<template>
  <main class="section container">
    <SectionIntro
      kicker="Acerca de"
      title="Una clínica dental pensada para estar cerca de las personas"
      text="DentalCare nace con la idea de acercar una atención odontológica moderna, accesible y profesional a pacientes que valoran el trato claro, la confianza y la comodidad."
    />

    <div class="about-grid">
      <p class="lead-text">
        Creemos en una odontología cercana, clara y orientada a resultados. La idea surge
        al detectar que muchas personas del entorno necesitan una alternativa más cómoda
        para cuidar su salud bucodental sin desplazamientos innecesarios.
      </p>

      <div class="stack-text">
        <p>
          Nuestra propuesta se dirige a familias, adultos y pacientes jóvenes que buscan
          revisiones, prevención, tratamientos conservadores, ortodoncia y estética dental
          en un mismo espacio.
        </p>
        <p>
          La clínica combina cercanía, profesionalidad y una experiencia más amable, para
          que acudir al dentista se perciba como algo natural, confiable y bien acompañado.
        </p>
      </div>
    </div>

    <div class="wide-visual visual-card">
      <img
        class="section-image section-image-wide section-image-tools"
        src="/img/herramientasOdontologia.jpg"
        alt="Profesional mostrando instrumental odontológico"
      />
    </div>

    <div class="timeline-grid">
      <article class="info-card">
        <strong>Origen</strong>
        <span>Surge para responder a una oferta dental local limitada y a la demanda de mayor cercanía.</span>
      </article>
      <article class="info-card">
        <strong>Enfoque</strong>
        <span>Atención humana, tiempos adecuados en consulta y tratamientos adaptados a cada caso.</span>
      </article>
      <article class="info-card">
        <strong>Espacio</strong>
        <span>Clínica proyectada en 99 m² con recepción, espera, gabinetes y área de esterilización.</span>
      </article>
      <article class="info-card">
        <strong>Visión</strong>
        <span>Consolidarse como una opción moderna y cercana para salud y estética dental en la zona.</span>
      </article>
    </div>
  </main>
</template>

<script setup>
import SectionIntro from '../components/SectionIntro.vue'
</script>
