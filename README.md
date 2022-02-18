# ReactBaseSetup

```
echo "# ReactBaseSetup" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Sivamani-18/ReactBaseSetup.git
git push -u origin main
```


# Step - 1 Github Setup

## Web Browser
- Create a new repository
- Clone repository to local

## Locally
- Open Project to Text Editor
- Run terminal git init


# Step - 2 Base Setup
- Open Project to Text Editor
- Add .gitignore file
### Run terminal

#### React JS 
```
npx create-react-app my-app
cd my-app
npm start
```
#### React typescript
```
npx create-react-app my-app --template typescript

# or

yarn create react-app my-app --template typescript
```
- Add node_modules in .gitignore file
### Add React and typescript in our project
#### Run terminal
```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# or

yarn add typescript @types/node @types/react @types/react-dom @types/jest
```
### React Router
#### Installation
```
npm install react-router-dom@6
```
#### Configuring Routes
```
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
```
