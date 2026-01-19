import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { blogApi } from '@/lib/api'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Loader2 } from 'lucide-react'

export default function CreateBlogDialog({ open, onOpenChange }) {
  const queryClient = useQueryClient()
  
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    coverImage: '',
    content: '',
  })

  const createMutation = useMutation({
    mutationFn: blogApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] })
      onOpenChange(false)
      setFormData({
        title: '',
        category: '',
        description: '',
        coverImage: '',
        content: '',
      })
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const categories = formData.category
      .split(',')
      .map((cat) => cat.trim().toUpperCase())
      .filter(Boolean)

    createMutation.mutate({
      ...formData,
      category: categories,
    })
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Create New Blog</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new blog post
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Enter blog title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Categories *</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              placeholder="Enter categories separated by commas (e.g., TECH, FINANCE)"
              required
            />
            <p className="text-xs text-gray-500">
              Separate multiple categories with commas
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Enter a short description"
              rows={2}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverImage">Cover Image URL</Label>
            <Input
              id="coverImage"
              value={formData.coverImage}
              onChange={(e) => handleChange('coverImage', e.target.value)}
              placeholder="https://example.com/image.jpg"
              type="url"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content *</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Enter the full blog content"
              rows={8}
              required
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={createMutation.isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={createMutation.isPending}>
              {createMutation.isPending && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              )}
              Create Blog
            </Button>
          </DialogFooter>

          {createMutation.isError && (
            <p className="text-sm text-red-600">
              Error: {createMutation.error.message}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
