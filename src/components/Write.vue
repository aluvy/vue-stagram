<template>
    <div class="writer">
        <div class="upload-image" :style="{ backgroundImage : `url(${uploadImage})` }"></div>
        <div class="write">
            <textarea class="write-box">write!</textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'compWrite',
    props: {
        uploadImage: String,
    }
}
</script>

<style scoped>
.upload-image{padding-bottom:100%; background-size:cover; background-position:center;}
.write-box {border:none; width:90%; height:100px; padding:15px; margin:auto; display:block; outline:none;}
</style>