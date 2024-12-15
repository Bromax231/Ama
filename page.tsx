'use client'
import { Button } from '@/components/ui/button'
import Layout from '@/components/layout'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <Layout>
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8">{t('contact.title')}</h1>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              {t('contact.send')}
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

