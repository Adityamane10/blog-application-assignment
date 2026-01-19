import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils'
import { Calendar } from 'lucide-react'

export default function BlogCard({ blog, isSelected, onClick }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <Card
      className={cn(
        'cursor-pointer hover:shadow-md transition-all',
        isSelected && 'ring-2 ring-primary'
      )}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex gap-2 mb-2 flex-wrap">
          {blog.category?.map((cat) => (
            <Badge key={cat} variant="secondary">
              {cat}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-lg">{blog.title}</CardTitle>
        <CardDescription>{blog.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          {formatDate(blog.date)}
        </div>
      </CardContent>
    </Card>
  )
}
