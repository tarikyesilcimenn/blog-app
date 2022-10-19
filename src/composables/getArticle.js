import { ref } from 'vue';
import { db } from '@/firebase/config';
import moment from 'moment/moment';
const getArticle = (id) => {
    const article = ref(null);
    const errors = ref(null);

    const loadArticle = async () => {
        try {
            let res = await db.collection('articles').doc(id).get();

            if(!res.exists) {
                throw Error('Article not found');
            }
            article.value = {...res.data(), id:res.id}
            const date = res.data().createdDate.toDate();
        } catch (error) {
            errors.value = error.message;
        }
    }
    return {article, errors, loadArticle,}
}
export default getArticle;