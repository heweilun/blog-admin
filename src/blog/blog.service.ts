import { Injectable } from '@nestjs/common';
import {SuccessModel, ErrorModel} from '../model/resModel';
import BlogEntity from 'src/entity/blog.entity';
import { getRepository, Repository, Like } from 'typeorm';

@Injectable()
export class BlogService {
    async blogSearch(searchBlogDto): Promise<any> {
        const { pageSize = 20, pageNo = 1, title } = searchBlogDto
        const searchState = await getRepository(BlogEntity).find({
            where: [
                { title: Like(`%${title?title:''}%`) },
            ],
            skip: pageSize * (pageNo -1),
            take: pageSize
        })
        return searchState?new SuccessModel(searchState, '查询成功'):new ErrorModel(searchState, '未查询到相关内容')
    }

    async blogAdd(addBlogDto): Promise<any> {
        const { title, content, author, createtime, user_id } = addBlogDto
        const addState = await getRepository(BlogEntity).save(addBlogDto)
        return addState?new SuccessModel(addState, '博客创建成功'):new ErrorModel(addState, '博客创建失败')
    }

    async blogDelete(deleteBlogDto): Promise<any> {
        const { blog_id, user_id } = deleteBlogDto
        const deleteState = await getRepository(BlogEntity).delete({blog_id, user_id})
        return deleteState.affected?new SuccessModel(null, '博客删除成功'):new ErrorModel(null, '博客删除失败')
    }

    async blogUpdate(updateBlogDto): Promise<any> {
        const { blog_id, user_id } = updateBlogDto
        const updateState = await getRepository(BlogEntity).update({blog_id, user_id},updateBlogDto)
        return updateState.affected?new SuccessModel(null, '博客已更新'):new ErrorModel(null, '博客更新失败')
    }
}
