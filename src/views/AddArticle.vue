<template>
    <div class="addArticle">
        <form @submit.prevent="addArticle">
            <label class="mb10">Article Header:</label>
            <input class="h40 mb10" type="text" id="header" name="header" v-model="header" required>
            <label class="mb10">Article Content:</label>
            <textarea class="h40 mb10" type="text" id="content" name="content" v-model="content" required/>
            <button class="h40">Create</button>
        </form>
    </div>
</template>
<script>
import {ref} from 'vue';
import { db, timeStamp } from '@/firebase/config';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const header = ref('');
        const content = ref('');
        const router = useRouter();

        const addArticle = async () => {
            const article = {
                header: header.value,
                content: content.value,
                createdDate: timeStamp,
            }
            let res = await db.collection('articles').add(article).then(()=>{
                router.push({name:'home'})
            })

        }
        return {header, content, addArticle}
    },
}
</script>
<style>
    .addArticle {
        display: flex;
        justify-content: center;
    }
    .addArticle form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
    }
    button {
        margin-top: 20px;
        background-color: #eb4d4b;
        border: 12px;
        color: white;
    }
    .h40 {
        height: 40px;
    }
    .mb10 {
        margin-bottom: 10px;
    }
</style>
