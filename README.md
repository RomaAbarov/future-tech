https://future-tech-psi.vercel.app

Многостраничное приложение на Next15. Технологии в проекте:

Home page: Главная страница с просмотром блогов, отзывов. Экспериментальный Tab(на примере shadcn), проставление лайка(server actions, useOptimistic). Работает последний блог секции all, id=4.
Blog page: Просмотр страница определенного блога(dynamic routes).
News page: Просморт новостей.
Podcast page: Просморт видео.
Resources page: Просмотр ресурсов. Экспериментальный Tab
Contacts page: Просморт контактов и отправка данных(server actions, zod). Кастомный аккордион.

В качестве бд используется файл db.json(route handlers). Для перевода px в rem postcss-pxtorem. Настройка svg - svgr/webpack.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
