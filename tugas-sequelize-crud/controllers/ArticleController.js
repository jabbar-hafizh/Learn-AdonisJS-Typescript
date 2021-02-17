const Article = require('../models').Article
const View = require('../views')

class ArticleController {
  static async showAll() {
    try {
      const articles = await Article.findAll()
      View.print(JSON.stringify(articles, null, 2))
    } catch (error) {
      View.showErr(error)
    }
  }

  static async show(args) {
    const id = args[1]
    try {
      const articles = await Article.findByPk(parseInt(id))
      View.print(JSON.stringify(articles, null, 2))
    } catch (error) {
      View.showErr(error)
    }
  }

  static async create(args) {
    const title = args[1]
    const body = args[2]
    const slug = args[3]
    const data = {
      title: title,
      body: body,
      slug: slug,
    }

    try {
      const article = await Article.create(data)
      View.print(JSON.stringify(article, null, 2))
    } catch (error) {
      View.showErr(error)
    }
  }

  static async update(args) {
    const id = args[1]
    const title = args[2]
    const body = args[3]
    const slug = args[4]
    const data = {
      title: title,
      body: body,
      slug: slug,
    }

    try {
      await Article.update(data, {
        where: {
          id: id
        }
      })
      try {
        const articles = await Article.findByPk(parseInt(id))
        View.print(JSON.stringify(articles, null, 2))
      } catch (error) {
        View.showErr(error)
      }
    } catch (error) {
      View.showErr(error)
    }
  }

  static async delete(args) {
    const id = args[1]
    try {
      await Article.destroy({
        where: {
          id: id
        }
      })
      View.print(`data id ${id} deleted`)
    } catch (error) {
      View.showErr(error)
    }
  }
}

module.exports = ArticleController
