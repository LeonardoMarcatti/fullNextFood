import sql from 'better-sqlite3'
import xss from 'xss'
import slugify from 'slugify'
import fs from 'node:fs'

const db = sql('meals.db')

{
   /**
    * Estamos apenas simulando um delay
    */
}

const getMeals = async () => {
   await new Promise(resolve => setTimeout(resolve, 500))
   // throw new Error('Failed to get data!')
   return db.prepare('select * from meals').all()
}

const getMeal = async (slug) => {
   await new Promise(resolve => setTimeout(resolve, 500))
   // throw new Error('Failed to get data!')
   return db.prepare('select * from meals where slug = ?').get(slug)
}

const saveMeal = async (meal) => {
   meal.slug = slugify(meal.title, {lower: true}) // força o lowercase
   meal.instructions = xss(meal.instructions) // limpa as instruções de XSS
   const extension = meal.image.name.split('.').pop()
   const fileName = `${meal.slug}.${extension}` 
   const stream = fs.createWriteStream(`public/images/${fileName}`)
   const bufferedImage = await meal.image.arrayBuffer()
   stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
         throw new Error('Failed to save image')
      }
   })

   meal.image = `/images/${fileName}`
   db.prepare(`insert into meals(title, summary, instructions, creator, creator_email, image, slug) values(@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`).run(meal)
}

export {getMeal, saveMeal}
export default getMeals