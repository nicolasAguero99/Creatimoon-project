<template>
  <div class='max-w-[1040px] m-auto'>
    <header class='flex flex-wrap-reverse gap-x-40 gap-y-20 justify-center items-center'>
      <div class='flex flex-col gap-11 text-left'>
        <h1 class='text-[30px] md:text-[50px] text-center md:text-left font-semibold max-w-[550px] px-4'>Soluciones <span class='text-primary'>creativas</span> a problemas complejos.</h1>
        <p class='max-w-[500px] text-sm md:text-base text-center md:text-left px-4'>Somos un equipo de profesionales apasionados por nuestro trabajo, siempre buscando nuevas formas de mejorar el proceso y resolver problemas para que te lleves la mejor experiencia.</p>
        <router-link class='text-paragraph bg-primary border-2 border-primary rounded-full py-2 text-[16px] w-1/2 text-center m-auto md:m-0 transition-colors duration-300 hover:bg-background hover:text-primary' to='/pricing'>¡Creemos juntos!</router-link>
      </div>
      <div class='flex flex-col gap-10'>
        <img class='w-[250px] md:w-[320px] m-auto' src="/images/header-img.svg" alt="illustration design">
        <div class='flex gap-4 text-left text-paragraph'>
          <div class='flex flex-col items-start bg-secondary px-3 py-2 rounded-xl'>
            <span class='font-bold text-lg'>72</span>
            <span class='w-[125px]'>Proyectos realizados</span>
          </div>
          <div class='flex flex-col items-start bg-primary px-3 py-2 rounded-xl'>
            <span class='font-bold text-lg'>+10</span>
            <span class='w-[125px]'>Años de experiencia</span>
          </div>
        </div>
      </div>
    </header>
    <section class='max-w-[1040px] m-auto flex flex-wrap justify-center lg:justify-between items-center gap-x-6 lg:gap-x-0 gap-y-6 mt-20 px-6'>
      <div class='bg-tertiary rounded-full py-2 px-4'><img src="/icons/coto-logo.svg" alt="coto logo"></div>
      <div class='bg-tertiary rounded-full py-2 px-4'><img src="/icons/walmart-logo.svg" alt="walmart logo"></div>
      <div class='bg-tertiary rounded-full py-2 px-4'><img src="/icons/ibm-logo.svg" alt="ibm logo"></div>
      <div class='bg-tertiary rounded-full py-2 px-4'><img src="/icons/nike-logo.svg" alt="nike logo"></div>
      <div class='bg-tertiary rounded-full py-2 px-4'><img src="/icons/hym-logo.svg" alt="hym logo"></div>
    </section>
    <section class='mt-20 px-6'>
      <h2 class='text-center font-semibold text-3xl md:text-4xl mb-16'>Nuestros <span class='text-primary'>servicios</span></h2>
      <div class='flex flex-wrap gap-8 justify-center xl:justify-between m-auto'>
        <div class='w-[300px] flex flex-col gap-4 border-2 bg-tertiary border-primary rounded-xl text-left px-8 py-6 transition-colors duration-300 hover:bg-primary hover:text-paragraph [&>img]:hover:invert'>
          <img class='w-6' src="/icons/uxui-icon.svg" alt="ux-ui icon">
          <h4 class='text-xl font-semibold'>Diseño UX/UI</h4>
          <p>Expertos en la accesibilidad de interfaces y experiencia del usuario.</p>
        </div>
        <div class='w-[300px] flex flex-col gap-4 border-2 bg-tertiary border-primary rounded-xl text-left px-8 py-6 transition-colors duration-300 hover:bg-primary hover:text-paragraph [&>img]:hover:invert'>
          <img class='w-6' src="/icons/web-icon.svg" alt="ux-ui icon">
          <h4 class='text-xl font-semibold'>Desarrollo web</h4>
          <p>Trabajamos con los lenguajes más demandados en el mercado.</p>
        </div>
        <div class='w-[300px] flex flex-col gap-4 border-2 bg-tertiary border-primary rounded-xl text-left px-8 py-6 transition-colors duration-300 hover:bg-primary hover:text-paragraph [&>img]:hover:invert'>
          <img class='w-6' src="/icons/design-icon.svg" alt="ux-ui icon">
          <h4 class='text-xl font-semibold'>Branding</h4>
          <p>Creamos tu marca desde cero o hacemos un rebranding para renovar tu imagen.</p>
        </div>
        <div class='w-[300px] flex flex-col gap-4 border-2 bg-tertiary border-primary rounded-xl text-left px-8 py-6 transition-colors duration-300 hover:bg-primary hover:text-paragraph [&>img]:hover:invert'>
          <img class='w-6' src="/icons/promotion-icon.svg" alt="promotion icon">
          <h4 class='text-xl font-semibold'>Promoción</h4>
          <p>Impulsamos tu presencia a través de estrategias para aumentar tu visibilidad.</p>
        </div>
        <div class='w-[300px] flex flex-col gap-4 border-2 bg-tertiary border-primary rounded-xl text-left px-8 py-6 transition-colors duration-300 hover:bg-primary hover:text-paragraph [&>img]:hover:invert'>
          <img class='w-6' src="/icons/design-graphic-icon.svg" alt="design graphic icon">
          <h4 class='text-xl font-semibold'>Diseño gráfico</h4>
          <p>Trabajamos con las herramientas más actuales en la industria del diseño gráfico.</p>
        </div>
        <div class='w-[300px] flex flex-col gap-4 border-2 bg-tertiary border-primary rounded-xl text-left px-8 py-6 transition-colors duration-300 hover:bg-primary hover:text-paragraph [&>img]:hover:invert'>
          <img class='w-6' src="/icons/product-icon.svg" alt="product icon">
          <h4 class='text-xl font-semibold'>Productos</h4>
          <p>Ofrecemos nuestros diseños estampados en diversos productos de alta calidad.</p>
        </div>
      </div>
    </section>
    <section class='mt-20'>
      <h2 class='text-center font-semibold text-3xl md:text-4xl mb-20 w-fit m-auto'>¿Qué dicen <span class='text-primary'>nuestros clientes?</span></h2>
      <div class='flex flex-col lg:flex-row gap-y-14 justify-center lg:justify-between items-center lg:items-baseline text-center px-8'>
        <div class='flex flex-col gap-4'>
          <img class='w-24 m-auto' src="/images/profile-client-1.png" alt="profile picture">
          <h6 class='font-semibold text-xl'>Lucas García</h6>
          <p class='w-[220px]'>Tuve una experiencia espectacular con esta agencia. Hicieron mi marca desde cero y quedó genial. Súper gradecida con ustedes.</p>
        </div>
        <div class='flex flex-col gap-4'>
          <img class='w-24 m-auto' src="/images/profile-client-2.png" alt="profile picture">
          <h6 class='font-semibold text-xl'>Nicolás Agüero</h6>
          <p class='w-[220px]'>Desarrollaron el sitio web de mi negocio, y quedó muy bueno. Les agradezco mucho por la buena onda y por la calidad de su trabajo.</p>
        </div>
        <div class='flex flex-col gap-4'>
          <img class='w-24 m-auto' src="/images/profile-client-3.png" alt="profile picture">
          <h6 class='font-semibold text-xl'>Belén Stella</h6>
          <p class='w-[220px]'>Tenía problemas con mi sitio web en cuanto a experiencia de usuario, y supieron ayudarme increiblemente. ¡Gracias infinitas!</p>
        </div>
      </div>
    </section>
    <section class='mt-20'>
      <h2 class='text-center font-semibold text-3xl md:text-[45px] mb-10'>¿Trabajamos <span class='text-primary'>juntos?</span></h2>
      <p class='max-w-[460px] m-auto text-center px-6'>Mirá nuestro listado de paquetes pre-hechos y contratá el que más te guste y se adecúe a tus necesidades. <br>
      Y si querés algo más personalizado, ¡no dudes en mandarnos un mensaje!</p>
      <div class='flex flex-wrap gap-6 justify-center mt-10 px-6'>
        <router-link class='text-paragraph border-2 border-primary bg-primary rounded-[10px] py-2 px-6 transition-colors duration-300 hover:bg-background hover:text-[#ffffff]' to='/pricing'>Mirá los paquetes</router-link>
        <button class='bg-background border-2 border-primary rounded-[10px] py-1 px-4 transition-colors duration-300 hover:bg-primary hover:text-background'>Mandanos un mensaje</button>
      </div>
    </section>
  </div>
</template>