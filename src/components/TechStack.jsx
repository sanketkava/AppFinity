import React from 'react';

function TechStack() {
  const techs = [
    { name: 'React Native', icon: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg' },
    { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    { name: 'Express', icon: 'https://media-hosting.imagekit.io/5036754cd08b4cef/pngwing.com.png?Expires=1839516885&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CKkTe1KQeNiITmTVbAYScP9KyktVW0ym9qQ67wpb0qM8SMzCGTv7OkIdo6TAtpzMtIest6LnCDU1vtShW8KcbJR2OJ~fZhvPdWRvmNbgLs93ZBsWJ2mNTrdXbMpUq6pIVsl7V6B~RrX-2~EfgaYYLI4va2MkwKAQTqCzYfwPlW4NJcGsZIoVCITmsBlZf492ALNinj3k3pVXUHT45bdKwckkV5GtMNaHRZvcmFuKLu2i8AciLSI~lTP-3gdP0mUtiwkHBXOSznhhY8OaciA7nKlCFNUp~qB827Nk5xUU4Ex1TdP1yUm~PQqHfEbcXTJeOeWhUYE5fC6ghcWAanRFXQ__' },
    { name: 'TypeScript', icon: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-blue-400 font-medium">Our Expertise</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            We leverage cutting-edge technologies to build robust, scalable, and future-proof applications.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="tech-stack-icon flex flex-col items-center p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition"
            >
              <img src={tech.icon} alt={tech.name} className="h-16 mb-4" />
              <span className="text-gray-300 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;