export const seo = {
  title: 'Cookie | 开发者、设计师、细节控、创始人',
  description:
    '我叫 Cookie，一名开发者，设计师，细节控',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
