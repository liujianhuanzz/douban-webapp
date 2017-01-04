<template>
    <div class='search-bar'>
        <input type="text" placeholder="请输入查询信息" v-model.trim='msg'>
        <button class='search-button' @click='search'>搜索</button>
    </div>
</template>
<script>
export default{
    data(){
        return {
            msg: ''
        }
    },
    props:{
        search_fun:{
            type: Function
        },
        loading_show:{
            type: Function
        },
        search_url:{
            type: String
        }
    },
    methods:{
        search(){
            let self = this;
            self.msg? self.$emit('loading_show', true):'';
            self.msg? self.$http.jsonp(self.search_url + self.msg).then((response) => {
            	if(response.ok){
                    self.$emit('search_fun', response.data);
                    self.$emit('loading_show', false);
            	}
           	}):null;
        }
    }
}
</script>
<style lang='less'>
.search-bar{
    display: flex;
    width: 100%;
    height: .4rem;
    box-sizing: border-box;
    padding: .02rem .1rem;
    background-color: #f2f2f2;
    input{
        display: flex;
        flex: 1;
        box-sizing: border-box;
        padding-left: .3rem;
        background: #f2f2f2 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMzgwMTE3NDA3MjA2ODExOEE2REYwRjYyMDk5RTU5MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMTE0QkEzMTdFNzQxMUUzQTU0M0FGODFFQjUzMUREQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMTE0QkEzMDdFNzQxMUUzQTU0M0FGODFFQjUzMUREQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDI4MDExNzQwNzIwNjgxMTgwODNDNjY0RTlFMjI0MTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDM4MDExNzQwNzIwNjgxMThBNkRGMEY2MjA5OUU1OTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ASYEFAAADH0lEQVR42sSYW0iUQRTHv90umxA9dIdqYSvrJbMrUSxldvGlG9ViUBEk4ksRBD2V1JsQvfSYRIUvUg9hdEXTLmw3MDLKsLLHilazksqgdPsfOMbHaWa+b3an7cCPYc+M8/1n5szMGSPZbNaTlkwmpWsq2ApWgwUgDkZzXQa8BPfBZSrT6fTfnYa0SICgeeAISIFoyD5fgzrQAGGDtoJ0H6HRHwcdoNJCDFkxOAPaMbCSvGcInUxGcRUs8fK3H2APZupCToJYDMXCLE37LtACOkEPKAIJsBys9cWV3+gDVRB11koQxMRQ3AOLFe3aQC2L1dl4cAAcYqF+GwLrIarVJobqFGJ+ghqwJkAMWR84Cko49uR3GjHoCaEEoWEpj06K2QTqLePmDVgFHgr/JB50qBk6pthJ+8GNXCIZS9OPYiN4K6r2YvAJoyA0mI5ys/DfAqfy2V4Q1Ytin3CPANVBM7SNglv4ax1seRLVhOKxcO8IElQufK94t7myc+J3AqsSNwmSp2mr59ZaFL75JkEzhK/TsaBu8Ev4ppkEjRS+by7V8AUr+ywyCZLX/SjPvcXE70GToHfCN8elEg7gMcL93iSoS/jKHM/OSoXvuUnQHeGjtGOuQ0G7xO8ePlq0gi4q/IcdLddSFBXC3YRAH9IKQiVt8wfCv5vzm3zExDTXT33Yy1VaY64BDjHU72mwUFRdwwS0BwpCo2aaSlE3kao4G7SxseC8InYonT1ok6BVK9IFymHughMs0Jh9gi3gKdiuqP9iOn90OXUpCxinaPsdXAI3edtm+MSdCVbwU6k44Hs04DKsSLfNq4PW/TqY4v0bM4qKKu6eJygWObj1P4IBhZ8u1tsY+GybhyJdJ+vATn4m2xiJOMnLt0FzWWtFRUK87aN8JqX49aHKiT/xWXaFjgvM8mdfX8tQNGvikpavgs/C0IJU2zrOAT3AS5PxZw34gOzPJIpy73L8zTPP8s0+bF/BC86VqfygSGFkXD6ihyLoV1TTcdI2/H+AqFcgCyuqYIJCimooqKAAURTgqYIL0oj6c1j+F0FCVIf/5P4twADDxQb4LiGmhAAAAABJRU5ErkJggg==");
        background-size: .14rem;
        background-position: .1rem .12rem;
        background-repeat: no-repeat;
        border: 0 none;
        border-radius: .3rem;
        font-size: .12rem;

    }
    button{
        flex: 0 0 .6rem;
        margin-left: .1rem;
        color: #fff;
        border: 1px solid #f2f2f2;
        background-color: #00b600;
        outline: none;
        &:active{
            border: 1px solid #f2f2f2;
        }
    }
}
</style>
