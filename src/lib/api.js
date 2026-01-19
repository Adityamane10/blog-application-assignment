const API_BASE_URL = 'http://localhost:3001'

export const blogApi = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/blogs`)
    if (!response.ok) {
      throw new Error('Failed to fetch blogs')
    }
    return response.json()
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog')
    }
    return response.json()
  },

  create: async (blog) => {
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...blog,
        date: new Date().toISOString(),
      }),
    })
    if (!response.ok) {
      throw new Error('Failed to create blog')
    }
    return response.json()
  },
}
