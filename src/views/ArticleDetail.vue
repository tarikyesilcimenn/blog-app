<template>
  <div>
    <h1>Article Detail</h1>
    <div v-if="errors">{{errors}}</div>
    <div v-if="article" class="detail content">
        <h2><i>Article Header : </i>{{article.header}}</h2>
        <p><i>Article Content: </i>{{article.content}}</p>
    </div>
    <div v-else v-show="errors.length !== 0">
        Loading...
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import getArticle from '../composables/getArticle.js'
export default {
    setup() {
        const route = useRoute();
        const id = ref(route.params.id);

        const {article, errors, loadArticle} = getArticle(route.params.id);
        loadArticle();
        return{
            id,
            article,
            errors
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
        border-radius: 50%;
        padding: 8px;
        cursor: pointer;
    }
</style>