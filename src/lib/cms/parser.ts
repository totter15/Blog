import matter from 'gray-matter'
import { Post } from './types'
import { z } from 'zod'

export const PostFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.union([z.string(), z.date()]).transform((val) => 
    val instanceof Date ? val.toISOString().split('T')[0] : val
  ),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().optional(),
  category: z.string(),
})

export function parsePost(
    fileContent:string,
    slug:string
    
  ): Post {
    const { data, content } = matter(fileContent)
  
    // frontmatter 검증
    const frontmatter = PostFrontmatterSchema.parse(data)
  
    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      tags: frontmatter.tags,
      draft: frontmatter.draft ?? false,
      category: frontmatter.category,
      content,
    }
  }

