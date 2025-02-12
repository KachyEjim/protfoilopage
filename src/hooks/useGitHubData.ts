import { useState, useEffect } from 'react'
import { githubService } from '@/services/githubService'

export function useGitHubData(repoName: string) {
  const [data, setData] = useState<{
    stars: number
    forks: number
    languages: Record<string, number>
    loading: boolean
    error: string | null
  }>({
    stars: 0,
    forks: 0,
    languages: {},
    loading: true,
    error: null
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const [repo, languages] = await Promise.all([
          githubService.getRepository(repoName),
          githubService.getLanguages(repoName)
        ])

        setData({
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          languages,
          loading: false,
          error: null
        })
      } catch (error) {
        setData(prev => ({
          ...prev,
          loading: false,
          error: 'Failed to fetch GitHub data'
        }))
      }
    }

    fetchData()
  }, [repoName])

  return data
} 