import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
const BaseLayout = () => {
  return (
    <section className="min-h-[100vh]">
      <Header />
      <main className="min-h-[90vh] bg-slate-50">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default BaseLayout;
