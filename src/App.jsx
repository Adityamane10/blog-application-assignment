import { useState } from 'react'
import BlogList from './components/BlogList'
import BlogDetail from './components/BlogDetail'
import CreateBlogDialog from './components/CreateBlogDialog'
import { Button } from './components/ui/button'
import { PlusCircle } from 'lucide-react'

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState(null)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const handleBlogSelect = (blogId) => {
    setSelectedBlogId(blogId)
  }

  const handleCreateClick = () => {
    setIsCreateDialogOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Blog Application</h1>
          <Button onClick={handleCreateClick}>
            <PlusCircle className="w-4 h-4 mr-2" />
            Create Blog
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="lg:sticky lg:top-24 h-fit lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <BlogList 
              selectedBlogId={selectedBlogId}
              onSelectBlog={handleBlogSelect}
            />
          </div>
          
          <div className="lg:sticky lg:top-24 h-fit lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <BlogDetail blogId={selectedBlogId} />
          </div>
        </div>
      </main>

      <CreateBlogDialog 
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      />
    </div>
  )
}

export default App
