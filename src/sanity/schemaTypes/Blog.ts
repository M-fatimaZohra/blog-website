import { defineType } from 'sanity'
import { defineField } from 'sanity'


const blog = defineType({
    title: 'Blog',
    name: 'blog',
    type: 'document',
    fields: [
     defineField({
        
        title: 'Title',
        name: 'title',
        type: 'string'
      }),
      
      defineField({
        title: 'Description',
        name: 'description',
        type:"text"
      })
     
      ]
  })
  
  export default blog;