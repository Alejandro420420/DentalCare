<template>
  <main class="section container">
    <SectionIntro
      kicker="Servicios"
      title="Soluciones odontológicas para prevención, cuidado y estética"
      text="La cartera de servicios se ha ampliado con la información de tu PDF, combinando tratamientos básicos, especializados, odontopediatría y soluciones estéticas."
    />

    <div class="services-list spaced-list">
      <ServiceCard
        index="01"
        title="Odontología General"
        description="Atención preventiva y correctiva para mantener una salud bucal estable: revisiones, limpiezas profesionales, empastes y seguimiento continuo."
        image-src="/img/cepillado-dental.jpg"
        image-alt="Maqueta dental con cepillo rojo"
        image-variant="focus-top"
      />

      <ServiceCard
        index="02"
        title="Estética Dental"
        description="Tratamientos orientados a mejorar la armonía de la sonrisa con resultados naturales, apoyados en planificación clínica y materiales de alta calidad."
        :reverse="true"
        image-src="/img/blanqueamiento.jpg"
        image-alt="Resultados de blanqueamiento dental"
        image-variant="compare"
      />

      <ServiceCard
        index="03"
        title="Cuidado Personalizado"
        description="Planes adaptados a adultos, jóvenes y familias, con seguimiento cercano, resolución de dudas y una experiencia clínica cómoda y profesional."
        image-src="/img/sillaDental.jpg"
        image-alt="Sillón dental preparado para la atención del paciente"
        image-variant="chair"
      />
    </div>

    <div class="service-groups">
      <article class="service-group-card">
        <h3>Servicios preventivos y básicos</h3>
        <ul>
          <li>Revisiones y diagnósticos</li>
          <li>Profilaxis y limpiezas</li>
          <li>Aplicación de flúor y selladores</li>
          <li>Educación en higiene oral</li>
          <li>Urgencias dentales</li>
        </ul>
      </article>

      <article class="service-group-card">
        <h3>Odontología general y especializada</h3>
        <ul>
          <li>Empastes, reconstrucciones y endodoncias</li>
          <li>Extracciones simples y quirúrgicas</li>
          <li>Ortodoncia metálica e invisible</li>
          <li>Tratamiento de encías</li>
          <li>Implantes y rehabilitación oral</li>
        </ul>
      </article>

      <article class="service-group-card">
        <h3>Estética y odontopediatría</h3>
        <ul>
          <li>Blanqueamiento y carillas de composite</li>
          <li>Coronas y puentes estéticos</li>
          <li>Revisiones infantiles</li>
          <li>Selladores y flúor para niños</li>
          <li>Ortodoncia interceptiva</li>
        </ul>
      </article>
    </div>

    <div class="advanced-care-grid">
      <article class="advanced-care-card advanced-care-card-wide">
        <img
          class="section-image section-image-wide section-image-focus-top"
          src="/img/dental-care-concept-with-a-large-tooth-model-and-professional-dental-tools-including-a-mirror-and-scaler-displayed-on-a-reflective-surface-in-a-clinical-setting-photo.jpg"
          alt="Modelo dental junto a instrumental clínico"
        />
        <div class="advanced-care-copy">
          <span class="section-kicker">Tecnología clínica</span>
          <h3>Material preparado para ofrecer precisión y seguridad en cada tratamiento</h3>
        </div>
      </article>

      <article class="advanced-care-card">
        <img
          class="section-image section-image-implant"
          src="/img/dental-implant-3d-rendering-image-for-medical-content-photo.jpg"
          alt="Representación de implante dental"
        />
        <div class="advanced-care-copy">
          <span class="section-kicker">Implantología</span>
          <p>Opciones de rehabilitación para recuperar función, estabilidad y estética.</p>
        </div>
      </article>

      <article class="advanced-care-card">
        <img
          class="section-image section-image-prosthesis"
          src="/img/Protesis-dental.jpg"
          alt="Piezas protésicas dentales"
        />
        <div class="advanced-care-copy">
          <span class="section-kicker">Prótesis</span>
          <p>Soluciones protésicas pensadas para cada necesidad clínica y funcional.</p>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup>
import SectionIntro from '../components/SectionIntro.vue'
import ServiceCard from '../components/ServiceCard.vue'
</script>
