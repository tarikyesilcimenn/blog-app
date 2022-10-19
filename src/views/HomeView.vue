<template>
  <div class="home">
    <div v-if="errors">
      {{errors}}
    </div>
    <div v-else-if="articles.length">
      <ArticleList :articles="articles"/>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>
<script>

import ArticleList from '../components/ArticleList.vue';
import getArticles from '../composables/getArticles.js';

export default {
  name: "HomeView",
  components: {
    ArticleList
  },
  setup(){
    const {articles, errors, loadArticleList} = getArticles();
    // console.log(articles);
    loadArticleList();
    return{articles,errors};
  }
};
</script>
