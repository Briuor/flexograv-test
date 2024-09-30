import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="App bg-[#4a4a4a]">
      <Layout>
        {/* <MainContent /> */}
        <p>teste</p>
      </Layout>

    </div>
  );
}

export default App;
