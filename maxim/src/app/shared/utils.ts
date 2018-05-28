import { IPill } from './components/pillsInput/pillsModel';
import { IObjectWithId } from '../pages/news/news.component';

export function tagsToPills(tags: IObjectWithId[]): IPill[] {
  return tags.map((tag: { id: string, name: string }) => ({ name: tag.name, value: tag.id }))
}

export function pillsToTags(pills: IPill[]): IObjectWithId[] {
  return pills.map((pill: IPill) => ({ id: pill.value, name: pill.name }))
}

export function getEmptyArticle(): any {
  return {
    articleCategory: {
      id: ''
    },
    content: '',
    title: '',
    description: '',
    tags: [],
  }
}
