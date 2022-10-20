<template>
  <div>
    <h1>Article Detail</h1>
    <div v-if="errors">{{errors}}</div>
    <div v-if="article" class="detail content">
        <div>
            <h2><i>Article Header : </i>{{article.header}}</h2>
            <p><i>Article Content: </i>{{article.content}}</p>
            <p><i>Created Date: </i>{{article.createdDate}}</p>
        </div>

        <img width="45" height="45" class="delete" src="../../public/trashCan.png" alt="delete-article" @click="deleteArticle"/>
    </div>
    <div v-else>
        Loading...
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import getArticle from '../composables/getArticle.js'
import { db } from '@/firebase/config';
export default {
    setup() {
        const route = useRoute();
        const id = ref(route.params.id);
        const {article, errors, loadArticle} = getArticle(route.params.id);
        const router = useRouter();
        loadArticle();
        const deleteArticle  = async () => {
            await db.collection('articles').doc(route.params.id).delete().then(() => {
                router.push('/')
            })
        }
        return{
            id,
            article,
            errors,
            deleteArticle
        }
    }
}
</script>

<style>
    .detail {
        position: relative;
    }
    .content{
        margin-bottom: 30px;
    }
    .delete {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }
</style>