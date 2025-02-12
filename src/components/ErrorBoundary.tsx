import { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { HomeIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  private handleReload = () => {
    window.location.reload()
  }

  private handleGoHome = () => {
    window.location.href = '/'
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-24">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Oops! Something went wrong
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                We apologize for the inconvenience. Please try refreshing the page or return to the homepage.
              </p>
              {process.env.NODE_ENV === 'development' && (
                <pre className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left overflow-auto max-w-2xl mx-auto text-sm">
                  {this.state.error?.toString()}
                </pre>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={this.handleReload}
                variant="outline"
                className="group"
              >
                <ArrowPathIcon className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                Reload Page
              </Button>
              <Button
                onClick={this.handleGoHome}
                className="group"
              >
                <HomeIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
} 