# BikeFlow

Bike workshop management system (Next.js 14 + TypeScript + Tailwind CSS + lucide-react).

## Запуск проекта

Требуется Node.js версии 18+ (скачать: https://nodejs.org).

Если используете PowerShell на Windows и видите ошибку про "running scripts is disabled" —
сначала выполните один раз в PowerShell **от имени администратора**:
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Дальше в обычном PowerShell/CMD, находясь ВНУТРИ папки bikeflow:

```
npm install
npm run dev
```

Откройте в браузере (не в терминале!):
```
http://localhost:3000
http://localhost:3000/reparaties
```

## Структура проекта

- `app/` — страницы: Dashboard (/), Nieuwe reparatie (/reparaties), Klanten, Fietsen,
  Onderdelen, Werkzaamheden, Facturen, Reparatiegeschiedenis, Rapporten, Instellingen
- `components/` — Sidebar, PageHeader, KlantCard, FietsCard, WerkzaamhedenCard,
  OnderdelenCard, OpmerkingCard, PricingSummary, QuickActionsBar и другие

## Важное техническое примечание

`PageHeader` — клиентский компонент ("use client"), а часть страниц — серверные.
Иконки из lucide-react передаются в него **уже как готовый JSX-элемент**
(`icon={<Home className="..." />}`), а не как ссылка на функцию-компонент
(`icon={Home}`). Это обязательное правило в Next.js App Router: функции нельзя
передавать напрямую через границу сервер → клиент. При добавлении новых страниц
следуйте этому же паттерну.
