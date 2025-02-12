const GITHUB_API = 'https://api.github.com'
const USERNAME = 'Chymezy'
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN

interface Repository {
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  language: string
  html_url: string
  topics: string[]
  updated_at: string
  created_at: string
}

interface Contribution {
  date: string
  count: number
}

export const githubService = {
  // Get repository details
  getRepository: async (repoName: string): Promise<Repository> => {
    console.log('Fetching repo:', repoName)
    const response = await fetch(`${GITHUB_API}/repos/${USERNAME}/${repoName}`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    if (!response.ok) {
      console.error('GitHub API Error:', await response.text())
      throw new Error('Failed to fetch repository')
    }
    return response.json()
  },

  // Get contribution data
  getContributions: async (): Promise<Contribution[]> => {
    const response = await fetch(`${GITHUB_API}/users/${USERNAME}/events`, {
      headers: {
        'Authorization': `token ${TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    if (!response.ok) throw new Error('Failed to fetch contributions')
    return response.json()
  },

  // Get languages used in a repository
  getLanguages: async (repoName: string): Promise<Record<string, number>> => {
    const response = await fetch(`${GITHUB_API}/repos/${USERNAME}/${repoName}/languages`, {
      headers: {
        'Authorization': `token ${TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    if (!response.ok) throw new Error('Failed to fetch languages')
    return response.json()
  }
} 