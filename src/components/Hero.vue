<template>
  <div class="md:grid grid-cols-2 justify-items-center h-screen pt-52">
    <div class="flex flex-col text-left space-y-5 w-9/12">
      <div class="font-bold text-9xl tracking-wide text-primary">WhatsEZ</div>
      <div class="text-lg w-5/6">Software especializado para el envio masivo de mensajes automáticos en diferentes plataformas y redes sociales.</div>
      <div class="space-x-3">
        <button class="text-primary"><span style="font-size: 1.5em"><i class="fab fa-facebook"></i></span></button>
        <button class="text-primary"><span style="font-size: 1.5em"><i class="fab fa-youtube"></i></span></button>
        <button class="text-primary"><span style="font-size: 1.5em"><i class="fab fa-instagram"></i></span></button>
        <button class="text-primary"><span style="font-size: 1.5em"><i class="fab fa-twitter"></i></span></button>
        <button class="text-primary"><span style="font-size: 1.5em"><i class="fab fa-tiktok"></i></span></button>
      </div>
        <button class="text-left text-frombanner font-semibold inline-flex items-center">Más información
          <div class="px-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </div>
            </button>
      <div class="w-1/2 flex justify-center">
        <button class="bg-frombanner rounded-lg text-white text-xl p-2 w-full">Comprar</button>
      </div>
    </div>
    <div>
      <img src="https://whatsez.online/wp-content/uploads/elementor/thumbs/10-Social-Media-Marketing-ovtiithhq1jzfj10l91hsxrsgvnscelj3yzggxqii4.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
