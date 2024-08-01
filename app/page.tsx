import HomePage from "./home";

export default function Home() {
  return (
    <main>
      <div className="xl:hidden text-center text-2xl font-medium">
        Please view on a desktop screen. <br /> Mobile and tablet design not
        ready yet.
      </div>
      <div className="hidden xl:block">
        <HomePage />
      </div>
    </main>
  );
}
