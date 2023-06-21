<template>
    <div class="post">
        <div class="post-header">
            <div class="profile" :style="`background-image:url('${item.userImage}')`"></div>
            <span class="profile-name">{{ item.name }}</span>
        </div>
        <div class="post-body" :style="`background-image:url('${item.postImage}')`"></div>
        <div class="post-content">
            <div class="icon">
                <button type="button">
                    <svg aria-label="좋아요" class="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>좋아요</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                </button>
                <button type="button">
                    <svg aria-label="좋아요" class="x1lliihq x1n2onr6" color="rgb(255, 48, 64)" fill="rgb(255, 48, 64)" height="24" role="img" viewBox="0 0 48 48" width="24"><title>좋아요</title><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                </button>
                <button type="button">
                    <svg aria-label="댓글 달기" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>댓글 달기</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                </button>
                <button type="button">
                    <svg aria-label="게시물 공유" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>게시물 공유</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </button>
            </div>

            <p class="like">{{ item.likes }} Likes</p>
            <p class="content"><strong>{{ item.name }}</strong> {{ item.content }}</p>
            <p class="date">{{ item.date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'compPost',
    props: {
        data: Object,
        item: Object,
        idx: Number,
    }
}
</script>

<style>
.post-header {height:6rem; padding:0 1.6rem; display:flex; align-items:center;}
.profile {width:3.2rem; height:3.2rem; border-radius:50%; background-position:50% 50%; background-repeat:no-repeat; background-size:100% auto; background-color:#ddd;}
.profile-name {padding-left:1rem; color:#262626; font-weight:600;}

.post-body {padding-bottom:100%; background-position:50% 50%; background-repeat:no-repeat; background-size:cover; background-color:#ddd;}

.post-content {padding:0 1.6rem 1.5rem;}
.post-content .icon{display:flex; align-items:center; padding:0.8rem 0;}
.post-content .icon button{width:4rem; height:4rem; display:flex; align-items:center; justify-content:center;}
.post-content .icon button:first-child{margin-left:-0.8rem;}
.post-content .like{font-weight:600;}
.post-content .content{line-height:1.6; padding:0.8rem 0 0.4rem;}
.post-content .content strong{display:inline-block; font-weight:600;}
.post-content .date {font-size:1rem; color:#737373;}
</style>