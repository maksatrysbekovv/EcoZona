EcoZona

EcoZona — это готовый к продакшену веб-сайт для бронирования отелей, созданный с использованием современных веб-технологий. Приложение представляет собой полностью функциональный и адаптивный сервис для бронирования отелей.
Backend API: staybooker-express-api￼

⸻

🚀 Основные возможности

* Готовность к продакшену: Разработан с учётом реальных требований production-среды.
* Современный стек технологий: Используются React, Tailwind CSS, MirageJS (для мокирования API) и Cypress (для e2e тестирования).
* Skeleton Loading: Используются skeleton-экраны для улучшения UX во время загрузки данных.
* Адаптивный дизайн: Полностью отзывчивый интерфейс, реализованный на Tailwind CSS.
* Полное покрытие тестами: Широкий набор тестов на Cypress для проверки всей функциональности.
* Будущая интеграция backend: Планируется подключение backend на Express.js.

⸻

⚡ Быстрый старт

Следуйте этим шагам, чтобы запустить проект локально для разработки и тестирования.

Требования

* Node.js
* npm или yarn

⸻

Установка

1. Клонируйте репозиторий:

git clone https://github.com/iZooGooD/stay-booker-pro.git

2. Перейдите в папку проекта:

cd stay-booker-pro

3. Установите зависимости:

npm install
# или
yarn install

4. Запустите проект:

npm start
# или
yarn start

После этого приложение будет доступно по адресу:
👉 http://localhost:3000

⸻

🧪 Запуск тестов

Для обеспечения стабильности и надёжности проекта используются тесты на Cypress.

Запуск тестов:

npm test
# или
npx cypress open

Откроется интерфейс Cypress, где можно запускать отдельные тесты или весь набор.

⸻

🛠 Качество кода и workflow

Husky (pre-commit хуки)

Проект использует Husky для проверки кода перед каждым коммитом.
Перед коммитом автоматически запускаются проверки, чтобы убедиться, что код соответствует стандартам.

⸻

GitHub Actions

Настроен CI/CD workflow с тремя основными задачами:

1. Build — проверка сборки проекта при каждом push и pull request в ветку master
2. Code Quality (Prettier) — проверка форматирования кода
3. Run Tests — запуск тестов для проверки стабильности

⸻

Непрерывная интеграция

Автоматизация процессов сборки, тестирования и проверки кода помогает:

* поддерживать стабильность проекта
* быстро находить ошибки
* обеспечивать высокое качество кода

⸻

🤝 Вклад в проект (Contributing)

Мы приветствуем вклад в развитие EcoZona!
Вы можете создавать issue или отправлять pull request.

⸻

Качество кода и линтинг

Мы используем ESLint для поддержания качества кода.

Перед коммитом или созданием Pull Request выполните:

npm run lint-fix

Команда автоматически исправит большинство ошибок.
Если останутся ошибки — исправьте их вручную.

⚠️ Поддержание единого стиля кода важно для проекта.

⸻

Пропуск проверки (не рекомендуется)

В исключительных случаях можно пропустить проверку:

git commit -m "Ваше сообщение" -n

Но лучше этого избегать — это может ухудшить качество кода.

⸻

🔮 Планы на будущее

* Интеграция backend на Express.js
* Расширение функциональности бронирования

⸻


















# EcoZona

EcoZona is a production-ready hotel booking website built with modern web technologies. It is designed to be a fully functional and responsive web application for hotel booking services. For the backend api checkout: [staybooker-express-api](https://github.com/iZooGooD/stay-booker-hotel-booking-express-api)

## Key Features

- **Production-Ready**: Crafted with production requirements in mind.
- **Modern Tech Stack**: Built using React, Tailwind CSS, MirageJS for mocking APIs, and Cypress for end-to-end testing.
- **Skeleton Loading**: Implements skeleton screens for an enhanced user experience during data loading.
- **Responsive Design**: Fully responsive interface built purely with Tailwind CSS.
- **Comprehensive Test Coverage**: Extensive test cases using Cypress to cover every functionality, ensuring robust and reliable code.
- **Future Backend Integration**: Planned integration with a backend built using Express.js.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn

### Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/iZooGooD/stay-booker-pro.git
   ```

2. Navigate to the project directory:

   ```bash
   cd stay-booker-pro
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Running the Tests

To ensure the reliability and stability of the application, comprehensive test suites have been written using Cypress.

To run the tests:

```bash
npm test
# or
npx cypress open
```

This command will open the Cypress test runner, where you can execute specific tests or the entire test suite.

## Code Quality and Workflow

### Husky for Pre-Commit Hooks

EcoZona uses Husky to manage pre-commit hooks, ensuring that code quality and formatting standards are maintained. Before each commit, Husky runs various checks to make sure that the committed code adheres to defined standards.

### GitHub Workflow

The project is equipped with a GitHub Actions workflow to automate the testing, building, and code quality checks. The workflow consists of three primary jobs:

1. **Build**: Ensures that the application builds correctly on each push and pull request to the `master` branch.

2. **Code Quality - Prettier**: Checks code formatting using Prettier. This step helps maintain a consistent coding style and format across the project.

3. **Run Tests**: Executes the test suites to ensure all tests pass. This step is crucial for identifying issues early and maintaining the reliability of the application.

### Continuous Integration and Code Quality

This automated workflow ensures that each change to the codebase is built, tested, and checked for code quality, thereby maintaining the overall health and reliability of the application. It encourages a culture of continuous integration and frequent, reliable delivery of high-quality software.

It would be most appropriate to include the linting instructions in the "Contributing" section of your documentation. This approach helps to ensure that contributors are aware of the coding standards and practices expected for your project right from the start. By integrating linting guidelines with contribution instructions, you emphasize the importance of code quality as an integral part of the contribution process.

Here's how you can seamlessly incorporate it into the "Contributing" section:

---

## Contributing

We welcome contributions to EcoZona! If you have suggestions or would like to contribute code, please feel free to create issues or submit pull requests.

### Code Quality and Linting

As part of our commitment to maintain high code quality, we use ESLint for linting. Before submitting a Pull Request or committing any changes, please ensure you run the following command:

```bash
npm run lint-fix
```

This will automatically fix many common linting errors. If there are errors that can't be auto-fixed, ESLint will report them, and you should manually address these issues. Maintaining a consistent coding standard is crucial for the project.

If you need to bypass the linting check in a special case, you can use the `-n` parameter with `git commit`. However, we strongly advise against skipping lint checks as it can compromise code quality:

```bash
git commit -m "Your commit message" -n
```

## Future Scope

- Backend integration with Express.js for a complete full-stack experience.
- Additional features and improvements to the booking process.
