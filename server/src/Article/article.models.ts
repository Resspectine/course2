import { ArticleCategory, Hashtag } from '../Dictionaries/Dictionary.models';

export enum ArticleServiceErrorCodes {
    TitleIsInvalid = 'asec0001',
    DescriptionIsInvalid = 'asec0002',
    ContentIsInvalid = 'asec0003',
    CategoryIsInvalid = 'asec0004',
    TagsAreInvalid = 'asec0005'
}

export interface Article {
    id: string;
    createdAt: Date;
    createdBy: string;
    title: string;
    description: string;
    content: string;
    articleCategory: ArticleCategory;
    articleCategoryId: string;
    tags: Hashtag[];
    rating: number;
}

export interface ArticleReduced {
    id: string;
    createdAt: Date;
    createdBy: string;
    title: string;
    description: string;
    articleCategoryId: string;
    articleCategory: ArticleCategory;
    tags: Hashtag[];
}

export interface ArticleListQueryParams {
    skip: number;
    take: number;
}