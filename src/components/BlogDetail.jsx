import { useQuery } from '@tanstack/react-query'
import { blogApi } from '@/lib/api'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Skeleton } from './ui/skeleton'
import { AlertCircle, Calendar, FileText } from 'lucide-react'

export default function BlogDetail({ blogId }) {
  const { data: blog, isLoading, isError, error } = useQuery({
    queryKey: ['blog', blogId],
    queryFn: () => blogApi.getById(blogId),
    enabled: !!blogId,
  })

  if (!blogId) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <FileText className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold mb-2">No blog selected</h3>
        <p className="text-sm text-gray-600">
          Select a blog from the list to view its details
        </p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="w-full h-64 rounded-lg" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="p-8 text-center">
        <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
        <h3 className="text-lg font-semibold mb-2">Failed to load blog</h3>
        <p className="text-sm text-gray-600">{error.message}</p>
      </div>
    )
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <Card>
      {blog.coverImage && (
        <div className="w-full h-64 overflow-hidden rounded-t-lg">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex gap-2 mb-2 flex-wrap">
          {blog.category?.map((cat) => (
            <Badge key={cat} variant="secondary">
              {cat}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-2xl">{blog.title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {formatDate(blog.date)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-relaxed whitespace-pre-wrap">{blog.content}</p>
      </CardContent>
    </Card>
  )
}
