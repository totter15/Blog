import { Octokit, RestEndpointMethodTypes } from "@octokit/rest"

const gitAccessToken = process.env.NEXT_PUBLIC_GIT_ACCESS_TOKEN
const owner = process.env.NEXT_PUBLIC_OWNER ?? ''
const repo = process.env.NEXT_PUBLIC_REPO_NAME ?? ''


const octokit = new Octokit({
    auth:gitAccessToken
  })
  
export async function fetchPostFiles(slug?:string):Promise<RestEndpointMethodTypes['repos']['getContent']['response']['data']> {
    const response = await octokit.rest.repos.getContent({
        mediaType: {
            format: "raw",
          },
        owner,
        repo,
        path: slug ? `posts/${slug}.md` : 'posts'
    })
    return response.data
}