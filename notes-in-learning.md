# Notes in Learning

### Route groups

- Route Groups are created by wrapping a folder name in parentheses like so: (folderName)​

### What is `middleware.ts`?

- middleware.ts sets up authentication using Clerk.
- Defines protected routes, unauthenticated users are redirected to Sign Up page.
- By default, all routes including api/trpc routes are protected.
- matcher configuration in config object specifies which routes are protected.
- Modify matcher configuration to allow public access to certain routes as needed.

### Dynamic routes

- When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.

#### Catch-all Segments

- Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...segmentName].

- For example, pages/shop/[...slug].js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.
