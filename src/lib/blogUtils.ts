import fs from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'

const POSTS_PATH = join(process.cwd(), 'src/posts')

type PostData = {
  title: string
  author: string
  slug: string
}

export async function getPostBySlug(slug: string) {
  const source = await fs.readFile(join(POSTS_PATH, `${slug}.md`), 'utf8')

  const { data, content } = matter(source)

  return { data, content }
}

export async function getAllPostData(): Promise<PostData[]> {
  const files = await fs.readdir(POSTS_PATH, 'utf-8')

  const postDatas = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace('.md', '')
      const {
        data: { title, author },
      } = await getPostBySlug(slug)
      return { title, author, slug }
    }),
  )

  return postDatas
}
