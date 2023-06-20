<template>
    <div class="post">
        <div class="post-header">
            <div class="profile" :style="`background-image:url('/src/assets/img/profile1.jpg')`"></div>
            <span class="profile-name">{{ item.name }}</span>
        </div>
        <div class="post-body"></div>
        <div class="post-content">
            <p class="like">43 Likes</p>
            <p class="content"><strong>{{ item.name }}</strong>{{ item.content }}</p>
            <p class="date">{{ item.date }}</p>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'compPost',
    props: {
        data: Array,
        item: Array,
        idx: Number,
    }
}
</script>

<style>
.post-header {height:6rem; padding:0 1.6rem; display:flex; align-items:center;}
.profile {width:3.2rem; height:3.2rem; border-radius:50%; background-position:50% 50%; background-repeat:no-repeat; background-size:100% auto; background-color:#ddd;}
.profile-name {padding-left:1rem; font-size:1.4rem; color:#262626; font-weight:700;}


.post-body {padding-bottom:100%; background-image: url("https://placeimg.com/640/480/animals"); background-position: center; background-size: cover;}

.post-content {padding:2rem 1.6rem;}
.post-content .like{}
.post-content .content{line-height:1.6; padding:1rem 0;}
.post-content .content strong{font-weight:700;}
.post-content .date {font-size:1rem; color:#737373;}
</style>