<template>
    <div class="post">
        <div class="post-header">
            <div class="profile" :style="{ backgroundImage : `url('${post.userImage}')` }"></div>
            <span class="profile-name">{{ post.name }}</span>
        </div>
        <div class="post-body" :class="`${post.filter}`" :style="{ backgroundImage : `url('${post.postImage}')` }" @click="clickLikes"></div>
        <div class="post-content">
            <div class="icon">
                <button type="button" class="btn_like" :class="{on : $store.state.isLikes[idx]}" title="좋아요"></button>
                <button type="button" class="btn_comment" title="댓글 달기"></button>
                <button type="button" class="btn_dm" title="게시물 공유"></button>
                <button type="button" class="btn_keep" title="저장"></button>
            </div>

            <!-- <p class="like">{{ post.likes }} Likes</p> -->
            <p class="like">{{ $store.state.likes[idx] }} Likes</p>
            <p class="content"><strong>{{ post.name }}</strong> {{ post.content }}</p>
            <p class="date">{{ post.date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'compPost',
    methods: {
        clickLikes(){
            this.$store.commit('changeLikes', this.idx);
        }
    },
    props: {
        data: Object,
        post: Object,
        idx: Number,
        filter: Text,
    }
}
</script>

<style>
.post-header {height:6rem; padding:0 1.6rem; display:flex; align-items:center;}
.profile {width:3.2rem; height:3.2rem; border-radius:50%; background-position:50% 50%; background-repeat:no-repeat; background-size:100% auto; background-color:#ddd;}
.profile-name {padding-left:1rem; color:#262626; font-weight:600;}

.post-body {padding-bottom:100%; background-position:50% 50%; background-repeat:no-repeat; background-size:cover; background-color:#ddd;}

.post-content {padding:0 1.6rem 1.5rem;}
.post-content .icon{display:flex; align-items:center; justify-content:space-between; padding:0.8rem 0; margin:0 -0.8rem;}
.post-content .icon button{width:4rem; height:4rem; display:flex; align-items:center; justify-content:center; background-position:50% 50%; background-size:2.4rem auto; background-repeat:no-repeat;}

.post-content .btn_like{background-image:url(../assets/img/ico_like.svg);}
.post-content .btn_like.on{background-image:url(../assets/img/ico_like_on.svg);}
.post-content .btn_comment{background-image:url(../assets/img/ico_comment.svg);}
.post-content .btn_dm{background-image:url(../assets/img/ico_dm.svg);}
.post-content .btn_keep{background-image:url(../assets/img/ico_keep.svg); margin-left:auto;}


.post-content .like{font-weight:600;}
.post-content .content{line-height:1.6; padding:0.8rem 0 0.4rem;}
.post-content .content strong{display:inline-block; font-weight:600;}
.post-content .date {font-size:1rem; color:#737373;}
</style>