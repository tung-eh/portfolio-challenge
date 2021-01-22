import blogImg from '../images/blog.jpg'

const blogs = [
  {
    image: blogImg,
    title: 'How to organize your CSS',
    description: `In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  

Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.`,

    plaform: 'dev.to',
  },
]

const Blogs = () => (
  <div className="grid gap-2">
    <div className="card">
      <span className="text-gray-600">Blogs ({blogs.length})</span>
    </div>
    <div className="grid gap-4">
      {blogs.map(({ image, title, description, plaform }, index) => (
        <div
          className="card flex flex-col-reverse md:flex-row gap-8"
          key={index}
        >
          <div className="flex flex-col gap-2 justify-between">
            <span className="text-sm text-gray-300">Blog</span>
            <h2 className="text-xl text-gray-700" style={{ maxWidth: '11rem' }}>
              {title}
            </h2>
            <p className="text-sm whitespace-pre-wrap">{description}</p>
            <span className="text-sm text-blue-400">{plaform}</span>
          </div>
          <img
            className="w-96 h-80 object-cover rounded-xl"
            src={image}
            alt="Blog thumbnail"
          />
        </div>
      ))}
    </div>
  </div>
)

export default Blogs
