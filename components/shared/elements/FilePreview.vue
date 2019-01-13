<template>
  <div class="container">
    <div class="field">
      <label for="image">{{ label }}
        <input
          id="file"
          ref="image"
          type="file"
          accept="image/*"
          @change="handleFileUpload()">
      </label>
      <img
        v-show="showPreview"
        id="image"
        :src="imagePreview"
        :name="name"
        type="file">
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        label: {
          default: 'Image',
          type: String
        },
        name: {
          default: 'image',
          type: String
        }
      },
      data () {
        return {
          imagePreview: '',
          showPreview: false
        }
      },
      methods: {
        handleFileUpload () {
          let file = this.$refs.image.files[0];
          let reader  = new FileReader();
          
          if (file && file.type.match('image.*')) {
            reader.addEventListener("load", function () {
                this.showPreview = true;
                this.imagePreview = reader.result;
              }.bind(this), false);

              reader.readAsDataURL( file );
            }
          }
      }
    }
</script>