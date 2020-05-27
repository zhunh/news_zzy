import request from "@/utils/request"
// 获取新闻列表
export function getNewsList(){
    return request({
        url:"/getNewsList",
        method:"get"
    })
}
// 按id获取新闻
export function getNewsById(id){
    return request({
        url:"/getNewsById",
        method:"get",
        params:{
            id:id
        }
    })
}
// 按tag获取新闻
export function getNewsByTag(tag){
    return request({
        url:"/getNewsByTag",
        method:"get",
        params:{
            tag:tag
        }
    })
}
// 按author获取新闻
export function getNewsByAuthor(author){
    return request({
        url:"/getNewsByAuthor",
        method:"get",
        params:{
            author:author
        }
    })
}
// 获取tag列表
export function getTagList(){
    return request({
        url:"/getTagList",
        method:"get"
    })
}
// 按author获取评论
export function getCommentByAuthor(author){
    return request({
        url:"/getCommentByAuthor",
        method:"get",
        params:{
            author:author
        }
    })
}
// 获取某条新闻评论
export function getCommentList(news_id){
    return request({
        url:"/getCommentList",
        method:"get",
        params:{
            news_id:news_id
        }
    })
}
// 评论
export function addComment(com){
    return request({
        url:"/addComment",
        method:"post",
        data:com
    })
}
// 添加新闻
export function addNews(news){
    return request({
        url:"/addNews",
        method:"post",
        data:news
    })
}
// 搜索新闻
export function searchNews(condition){
    return request({
        url:"/searchNews",
        method:"post",
        data:condition
    })
}
// 根据id 删除新闻
export function deleteNewsById(id){
    return request({
        url:"/deleteNewsById",
        method:"post",
        data:{ id:id }
    })
}
// 根据id 删除评论
export function deleteCommentById(id){
    return request({
        url:"/deleteCommentById",
        method:"post",
        data:{ id:id }
    })
}