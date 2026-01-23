import { fetchPostFiles } from './github'
import { parsePost } from './parser'
import { Post, PostSummary } from './types'

export async function getPosts(): Promise<PostSummary[]> {
  const files = await fetchPostFiles()

  if (!files || !Array.isArray(files)) return []
  
  const posts = await Promise.all(
    files.map(async (file) => {
      const raw = await fetch(file?.download_url ?? '').then(r => r.text())
      return parsePost(raw, file?.name?.split('/').pop()?.replace('.md', '') ?? '')
    })
  )
  return posts.filter(p => !p.draft).sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const file = await fetchPostFiles(slug)

  if (!file || typeof file !== 'string') return null

  const post = parsePost(file, slug)
  return post.draft ? null : post
}