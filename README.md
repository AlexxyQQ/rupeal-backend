# rupeal

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.js
```

This project was created using `bun init` in bun v1.1.15. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


# Folder Strecture

```
project-root/
│
├── src/
│   ├── config/
│   │   ├── config.js
│   │   └── db.js
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── controllers/
│   │   │   │   └── authController.js
│   │   │   ├── models/
│   │   │   │   └── userModel.js
│   │   │   ├── routes/
│   │   │   │   └── authRoutes.js
│   │   │   ├── services/
│   │   │   │   └── authService.js
│   │   │   ├── validators/
│   │   │   │   └── authValidator.js
│   │   │   └── tests/
│   │   │       └── auth.test.js
│   │   │
│   │   ├── post/
│   │   │   ├── controllers/
│   │   │   │   └── postController.js
│   │   │   ├── models/
│   │   │   │   └── postModel.js
│   │   │   ├── routes/
│   │   │   │   └── postRoutes.js
│   │   │   ├── services/
│   │   │   │   └── postService.js
│   │   │   ├── validators/
│   │   │   │   └── postValidator.js
│   │   │   └── tests/
│   │   │       └── post.test.js
│   │   │
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   └── notFound.js
│   │
│   ├── utils/
│   │   ├── logger.js
│   │   └── AppError.js
│   │
│   └── app.js
│
├── node_modules/
│
├── .env
├── .gitignore
├── package.json
└── README.md
