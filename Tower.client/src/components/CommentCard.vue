<template>
    <div class="container-fluid">
        <card>
            <div class="d-flex pt-2 px-3">
            <img class="img-fluid pro rounded-circle" :src="comment.creator.picture" alt="">
            <p class="pt-4 px-3"><b>{{ comment.creator.name }}</b></p>
        </div>
        <div class="d-flex">
            <p class="px-4 pt-3">{{ comment.body }}</p>
            <button class="btn" @click="deleteComment(comment.id)"><i class="mdi mdi-delete px-4 pt-3 text-danger"></i></button>
        </div>
        </card>
    </div>
</template>


<script>
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import {commentsService} from '../services/CommentsService.js'

export default {
    props:{
        comment:{type:Comment, required:true}
    },
    setup(){
        return {
            async deleteComment(id){
            try {
                const yes = await Pop.confirm("delet comment?")
                if(!yes){
                    return
                }
                await commentsService.deletComment(id)
            } catch (error) {
                Pop.error(error)
                logger.log(error)
            }

        }
        }
    }
}
</script>


<style lang="scss" scoped>
.pro{
height: 80px;

}

</style>
