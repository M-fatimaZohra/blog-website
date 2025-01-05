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
        type:"text",
       
        
      })
     ,
     defineField({
      title: 'Image',
      name: 'image',
      type:"image"
    })
   ,
   defineField({
    title: 'Content',
    name: 'content',
    type:"array",
    of:[{
      type:"block"
    }]
  })
 ,
 
 defineField({
  title: 'Slug_name',
  name: 'slug',
  type:"slug",
options:{
  source:"title"
}
})
,  
    
    ]
  })
  
  export default blog;