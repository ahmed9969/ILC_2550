import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="bg-cream flex-1 flex items-center justify-center px-6 py-32">
      <div className="text-center max-w-md">
        <p className="font-serif text-8xl font-bold text-terracotta/20 leading-none mb-6">404</p>
        <h1 className="font-serif text-3xl text-charcoal font-bold mb-3">Page Not Found</h1>
        <p className="text-charcoal/60 leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Return Home
        </Link>
      </div>
    </section>
  );
}
