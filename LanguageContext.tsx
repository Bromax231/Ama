'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations = {
  en: {
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'home.hero.title': 'Support Syria with Style',
    'home.hero.subtitle': 'Wear your solidarity and make a difference',
    'home.hero.cta': 'Shop Now',
    'home.featured.title': 'Featured Products',
    'home.featured.viewProduct': 'View Product',
    'products.title': 'Our Products',
    'products.viewDetails': 'View Details',
    'products.size': 'Size',
    'products.selectSize': 'Select Size',
    'products.quantity': 'Quantity',
    'products.buyNow': 'Buy Now',
    'products.syria-hoodie.name': 'Syria Limited Edition Hoodie',
    'products.syria-hoodie.description': 'Show your support with our premium quality hoodie',
    'products.syria-hoodie.price': '16.00',
    'products.syria-tshirt.name': 'Syria Freedom T-Shirt',
    'products.syria-tshirt.description': 'Comfortable and meaningful t-shirt for Syria supporters',
    'products.syria-tshirt.price': '12.00',
    'about.title': 'About Us',
    'about.content1': 'We are dedicated to raising awareness and supporting the Syrian cause through our clothing line.',
    'about.content2': 'Our products are designed to spark conversations and show solidarity.',
    'about.content3': 'Every purchase contributes to humanitarian efforts in Syria.',
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
  },
  ar: {
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'home.hero.title': 'ادعم سوريا بأناقة',
    'home.hero.subtitle': 'البس تضامنك وأحدث فرقًا',
    'home.hero.cta': 'تسوق الآن',
    'home.featured.title': 'المنتجات المميزة',
    'home.featured.viewProduct': 'عرض المنتج',
    'products.title': 'منتجاتنا',
    'products.viewDetails': 'عرض التفاصيل',
    'products.size': 'الحجم',
    'products.selectSize': 'اختر الحجم',
    'products.quantity': 'الكمية',
    'products.buyNow': 'اشتر الآن',
    'products.syria-hoodie.name': 'هودي سوريا إصدار محدود',
    'products.syria-hoodie.description': 'أظهر دعمك بهودي عالي الجودة',
    'products.syria-hoodie.price': '16.00',
    'products.syria-tshirt.name': 'تيشيرت الحرية السوري',
    'products.syria-tshirt.description': 'تيشيرت مريح وذو معنى لداعمي سوريا',
    'products.syria-tshirt.price': '12.00',
    'about.title': 'من نحن',
    'about.content1': 'نحن مكرسون لزيادة الوعي ودعم القضية السورية من خلال خط ملابسنا.',
    'about.content2': 'منتجاتنا مصممة لإثارة المحادثات وإظهار التضامن.',
    'about.content3': 'كل عملية شراء تساهم في الجهود الإنسانية في سوريا.',
    'contact.title': 'اتصل بنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
  },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const userLanguage = navigator.language.split('-')[0]
    setLanguage(userLanguage === 'ar' ? 'ar' : 'en')
  }, [])

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

