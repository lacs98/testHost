<template>
    <div class="w-screen h-screen flex justify-center items-center absolute opacity top-0 transform  transition duration-200 ease-in-out">
        <div class="bg-white shadow-md">
            <div class="flex flex-col bg-white p-4">
                <div class="text-center text-white bg-primary p-2 font-medium italic flex justify-between">
                    <h1 class="w-full">Agregar licencias</h1>
                    <button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg></button>
                    </div>
                <form @submit.prevent=''>
                    <div class="grid grid-cols-2 grid-rows-2 place-items-center gap-2 py-4 space-y-5">
                        <label>Código:</label>
                        <div class="h-full"><input class="focus:outline-none border focus:border-primary flex-col" type="text"></div>
                        <label>Paquete:</label>
                        <select class="focus:outline-none border w-full text-center focus:border-primary" name="select">
                        <option value="value1">Value 1</option>
                        <option value="value2" selected>Value 2</option>
                        <option value="value3">Value 3</option>
                        </select>
                        </div>
                    <div class="flex flex-col justify-center items-center w-full">
                    <button type="submit" class="p-2 w-6/12 bg-primary text-white font-semibold rounded-sm">Guardar</button>
                    {{error}}
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  setup () {

  }
}
</script>
