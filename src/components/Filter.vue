<template>
    <div class="filter">
        <div class="upload-image" :style="{ backgroundImage : `url(${uploadImage})` }"></div>
        <div class="filters">
        <ul>
            <li class="filter-1"></li>
            <li class="filter-1"></li>
            <li class="filter-1"></li>
            <li class="filter-1"></li>
            <li class="filter-1"></li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'compFilter',
    props: {
        uploadImage: String,
    }
}
</script>

<style scoped>
.upload-image{padding-bottom:100%; background-size:cover; background-position:center;}
.filters{overflow-x:scroll; white-space:nowrap;}
.filter-1 {width:100px; height:100px; background-color:cornflowerblue; margin:10px 10px 10px auto; padding:8px; display:inline-block; color :white; background-size:cover;}
.filters::-webkit-scrollbar {height:5px;}
.filters::-webkit-scrollbar-track {background:#f1f1f1;}
.filters::-webkit-scrollbar-thumb {background:#888; border-radius:5px;}
.filters::-webkit-scrollbar-thumb:hover {background:#555;}
</style>