import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const articles = defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/articles'}),schema:z.object({title:z.string(),description:z.string(),category:z.enum(['Meio ambiente','Ciência','Tecnologia','Saúde','Universo']),date:z.coerce.date(),author:z.string(),image:z.string(),imageAlt:z.string(),credit:z.string().default('Unsplash'),featured:z.boolean().default(false),draft:z.boolean().default(false)})});
export const collections = { articles };
