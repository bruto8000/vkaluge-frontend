<template>
           <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- FORM INPUT -->
              <div class="form-input">
                <label for="register-email">{{name || 'БЕЗЫМЯННЫЙ'}}</label>
                <input
                  
     
                  placeholder="89001234567"
                  type="text"
                  id="register-email"
                  name="register_email"
                />
              </div>
              <!-- /FORM INPUT -->
            </div>
            <!-- /FORM ITEM -->
          </div>
          <!-- /FORM ROW -->
</template>

<script>



export default {
props: ['name'],
data(){
    return {

    }

},
methods: {
 
},
mounted(){

}

}
</script>

<style>

</style>