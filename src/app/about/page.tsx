import { Code, Cpu, Users, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Cutting-edge Tech",
      description: "Stay updated with the latest technologies and frameworks in the development world."
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Community Driven",
      description: "Connect with fellow developers, share knowledge, and grow together."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Fast & Efficient",
      description: "Quick access to resources and information you need to build amazing projects."
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: "Modern Stack",
      description: "Built with Next.js, TypeScript, and Tailwind CSS for optimal performance."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">About DevHub</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Connecting developers with the best resources, tools, and community to help you build the future of the web.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-700 transition-colors">
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-neutral-800 rounded-xl p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            At DevHub, we believe in empowering developers with the knowledge and tools they need to bring their ideas to life. 
            Whether you&apos;re just starting your coding journey or you&apos;re a seasoned professional, our platform is designed to help 
            you grow and succeed in the ever-evolving world of technology.
          </p>
          <p>
            We&apos;re committed to building a supportive community where developers can share their experiences, learn from each other, 
            and collaborate on exciting projects. Our goal is to make technology more accessible and to help shape the future of 
            software development.
          </p>
        </div>
      </div>
    </div>
  );
}