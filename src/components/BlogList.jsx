import { useQuery } from '@tanstack/react-query'
import { blogApi } from '@/lib/api'
import BlogCard from './BlogCard'
import { Skeleton } from './ui/skeleton'
import { AlertCircle } from 'lucide-react'

export default function BlogList({ selectedBlogId, onSelectBlog }) {
  const { data: blogs, isLoading, isError, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: blogApi.getAll,
  })

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">All Blogs</h2>
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 border rounded-lg space-y-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <div className="p-8 text-center">
        <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
        <h3 className="text-lg font-semibold mb-2">Failed to load blogs</h3>
        <p className="text-sm text-gray-600">{error.message}</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        All Blogs ({blogs?.length || 0})
      </h2>
      <div className="space-y-4">
        {blogs?.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            isSelected={selectedBlogId === blog.id}
            onClick={() => onSelectBlog(blog.id)}
          />
        ))}
      </div>
    </div>
  )
}
