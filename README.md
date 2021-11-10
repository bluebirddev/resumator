# Resumator

### To hopefully, easily, generate a uniform resume

---

To install:

```
npm i
```

Add a user to the `src/people` directory, like so: `{username}.tsx`.

To see how the resume will look, run:

```
npm run start --person={username}
```

To generate the resume pdf, run this while the previous operation is running:

```
npm run generate {WHATEVER_YOU_WANT_THE_TITLE_OF_THE_PDF_TO_BE}
```
