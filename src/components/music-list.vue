<template>
    <article class='music-list'>
        <div class='music-item' v-for='item in music_list'>
            <router-link :to="{name:'music-detail',params:{id:item.id}}">
                <div class='music-img'>
                    <img :src='item.image' >
                </div>
                <div class='music-info'>
                    <h3>{{item.title}}</h3>
                    <div class='music-singer' v-if='item.attrs.singer'>{{item.attrs.singer[0]}}</div>
                    <div class='music-star'>{{"★★★★★☆☆☆☆☆".slice(5 - parseInt(item.rating.average/2), 10 - parseInt(item.rating.average/2))}} {{item.rating.averaged}}</div>
                    <div class='music-pubdate' v-if='item.attrs.pubdate'>发行日期：<span>{{item.attrs.pubdate[0]}}</span></div>
                </div>
            </router-link>
        </div>
    </article>
</template>
<script>
export default{
    props:{
        music_list:{
            type: Array
        }
    }
}
</script>
<style lang='less' scoped>
.music-list{
    float: left;
    width: 100%;
    box-sizing: border-box;
    padding: 0 .1rem;
    .music-item{
        width: 100%;
        margin-top: .16rem;
        a{
            display: flex;
            width: 100%;
        }
        .music-img{
            flex: 0 0 1.2rem;
            margin-right: .06rem;
            img{
                display: block;
                margin: 0;
                padding: 0;
                width: 100%;
            }
        }
        .music-info{
            flex: 1;
        }
    }
}
.music-info{
    h3{
        font-size: .14rem;
        color: #666;
        text-align: center;
        line-height: .3rem;

    }
    .music-star{
        width: 100%;
        text-align: center;
        font-size: .14rem;
        line-height: .2rem;
        color: orange;
    }
    .music-singer,
    .music-pubdate{
        width: 100%;
        text-align: center;
        font-size: .12rem;
        line-height: .2rem;
        color: #666;
        // span{
        //     color: orange;
        // }
    }
}
</style>
