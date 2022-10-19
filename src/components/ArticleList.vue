<template>
  <div class="articleList">
    <div v-for="article in articles" :key="article.id">
        <Article :article="article"/>
    </div>
  </div>
</template>

<script>
import Article from './Article.vue'
export default {
    props:['articles'],
    components:{
    Article,
},
    setup(props) {
        // console.log(props.articles)
    }
}
</script>

<style>
    .articleList {
        margin-top: 120px !important;
    }
</style>