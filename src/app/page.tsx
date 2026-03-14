import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">📚</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">StudyAI</span>
          </div>
          <div className="space-x-4">
            <button className="text-gray-700 hover:text-primary-600 transition-colors">
              Features
            </button>
            <button className="text-gray-700 hover:text-primary-600 transition-colors">
              Pricing
            </button>
            <Link href="/login">
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Get Started Free
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Study Smarter, Not Harder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform PDFs, videos, and text into study notes, quizzes, and flashcards in just 10-30 seconds!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors w-full sm:w-auto">
              Watch Demo
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 5 free uploads/month
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything You Need to Study Better
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Study Notes</h3>
            <p className="text-gray-600">
              Upload PDFs, videos, or text and get comprehensive, organized study notes instantly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Quizzes</h3>
            <p className="text-gray-600">
              Generate multiple-choice quizzes from your notes to test your knowledge.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎴</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Flashcards</h3>
            <p className="text-gray-600">
              Create digital and printable flashcards for effective memorization.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Simple, Affordable Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-3xl font-bold text-gray-900 mb-4">$0</p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>✅ 5 uploads/month</li>
              <li>✅ Basic features</li>
              <li>❌ Unlimited uploads</li>
              <li>❌ AI chat tutor</li>
            </ul>
            <button className="w-full border-2 border-primary-600 text-primary-600 py-2 rounded-lg hover:bg-primary-50 transition-colors">
              Get Started
            </button>
          </div>
          <div className="bg-primary-600 text-white p-6 rounded-xl shadow-lg transform scale-105">
            <div className="text-center mb-4">
              <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                MOST POPULAR
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-3xl font-bold mb-1">$0.99<span className="text-lg">/month</span></p>
            <p className="text-sm opacity-80 mb-4">or ₹99/month in India</p>
            <ul className="space-y-2 mb-6">
              <li>✅ Unlimited uploads</li>
              <li>✅ All features</li>
              <li>✅ Priority support</li>
              <li>❌ AI chat tutor</li>
            </ul>
            <button className="w-full bg-white text-primary-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe Now
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Premium+</h3>
            <p className="text-3xl font-bold text-gray-900 mb-1">$2.99<span className="text-lg">/month</span></p>
            <p className="text-sm text-gray-500 mb-4">or ₹199/month in India</p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>✅ Everything in Pro</li>
              <li>✅ AI chat tutor</li>
              <li>✅ Offline mode</li>
              <li>✅ Priority support</li>
            </ul>
            <button className="w-full border-2 border-primary-600 text-primary-600 py-2 rounded-lg hover:bg-primary-50 transition-colors">
              Get Premium+
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary-600 rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Study Habits?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students studying smarter with StudyAI
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 StudyAI. Built with ❤️ by Sultan Ahmed</p>
        </div>
      </footer>
    </main>
  )
}
