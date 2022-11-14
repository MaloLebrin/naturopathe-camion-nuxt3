import { defineStore } from 'pinia'
import type { Article, Category } from '~~/types'
import { defaultBlogState } from '~~/types'

export const useBlogStore = defineStore('Blog', {
  state: () => ({
    ...defaultBlogState(),
  }),
  getters: {
    getArticlesArray: state => state.articles,
    getPublishedArticlesArray: state => state.articles.filter(article => article.published),
    isArticleAlreadyStored: state => {
      return (id: number) => state.articles.find(article => article.id === id) !== undefined
    },
    getCategoriesArray: state => state.categories,
    getOneArticle: state => (id: number) => state.articles.find(article => article.id === id),
    getOneCategory: state => (id: number) => state.categories.find(category => category.id === id),
    getCategoryByArticleId: state => (articleId: number) => {
      const article = state.articles.find(article => article.id === articleId)
      if (article) {
        return state.categories.find(category => category.id === article.categoryId)
      }
      return undefined
    },
    isCategoryAlreadyStored: state => (categoryId: number) => state.categories.find(category => category.id === categoryId) !== undefined,
  },
  actions: {
    createOneArticle(article: Article) {
      if (this.isArticleAlreadyStored(article.id)) {
        const index = this.articles.findIndex(art => art.id === article.id)
        this.articles[index] = article
      } else {
        this.articles.push(article)
      }
    },

    createManyArticles(articles: Article[]) {
      articles.forEach(article => {
        this.createOneArticle(article)
      })
    },

    createOneCategory(category: Category) {
      if (this.isCategoryAlreadyStored(category.id)) {
        const index = this.categories.findIndex(cat => cat.id === category.id)
        this.categories[index] = category
      } else {
        this.categories.push(category)
      }
    },

    createManyCategories(categories: Category[]) {
      categories.forEach(category => {
        this.createOneCategory(category)
      })
    },

    deleteOneArticle(id: number) {
      this.articles = this.articles.filter(article => article.id !== id)
    },

    deleteOneCategory(id: number) {
      this.categories = this.categories.filter(category => category.id !== id)
    },
  },
})
