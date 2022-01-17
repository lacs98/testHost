<template>
    <div class="flex flex-col justify-center items-center mt-60 mx-96">
        <Add/>
        <div class="flex w-full justify-between pb-2">
            <button class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" /></svg></button>
            <div class="flex items-center justify-center space-x-2">
                <input class="border focus:outline-none focus:border-primary" type="text" placeholder=" Buscador..">
                <button class="text-white bg-primary rounded-full p-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" /></svg></button>
            </div>
        </div>
        <table class="table-fixed w-full border text-center">
        <thead class="border bg-primary text-white p-4">
            <tr>
            <th class="w-1/4 ...">Licencia</th>
            <th class="w-1/4 ...">Paquete</th>
            <th class="w-1/4 ...">Usuario</th>
            <th class="w-1/4 ...">Expira</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>A1</td>
            <td>X</td>
            <td>null</td>
            <td>null</td>
            </tr>
            <tr class="border">
            <td>A2</td>
            <td>Y</td>
            <td>null</td>
            <td>null</td>
            </tr>
            <tr>
            <td>A3</td>
            <td>Z</td>
            <td>null</td>
            <td>null</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import Add from '../components/License/Add.vue'
export default {
  components: { Add },
  setup () {

  }
}
</script>
