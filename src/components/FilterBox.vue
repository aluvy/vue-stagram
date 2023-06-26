<template>
    <div class="filter-item" :class="`${filter}`" :style="{ backgroundImage : `url(${uploadImage})` }"></div> 
</template>

<script>
export default {
    name: 'compFilterBox',
    props: {
        uploadImage: String,
        filter: String,
    }
}
</script>

<style scoped>
.filter-item {display:block; width:10rem; height:10rem; background-size:cover; background-position:center;}
</style>