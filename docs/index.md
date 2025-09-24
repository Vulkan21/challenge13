# Добро пожаловать на мой статический сайт!

Это мой первый статический сайт, созданный с помощью **MkDocs** и автоматически развернутый на **GitHub Pages**.

## О проекте

Данный проект демонстрирует:

- Использование MkDocs для создания статических сайтов
- Автоматический деплой через GitHub Actions
- Современный Material Design с темной и светлой темой
- Поддержка Markdown для написания контента

## Возможности

### Подсветка синтаксиса

```python
def hello_world():
    print("Hello, World!")
    return "MkDocs работает отлично!"

if __name__ == "__main__":
    message = hello_world()
    print(message)
```

### Блоки с предупреждениями

!!! note "Примечание"
    Это пример информационного блока в MkDocs.

!!! warning "Внимание" 
    Убедитесь, что все настройки GitHub Actions корректны.

!!! success "Успех"
    Сайт успешно развернут и работает!

## Структура проекта

```
project/
├── .github/
│   └── workflows/
│       ├── actions.yml
│       └── blank.yml
├── docs/
│   └── index.md
├── .gitignore
└── mkdocs.yml
```

---

*Создано с ❤️ используя MkDocs и GitHub Pages*