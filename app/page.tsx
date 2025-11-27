import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import HeadlineSlider from "@/components/HeadlineSlider";
import Determination from "@/components/Determination";
import Solutions from "@/components/Solutions";
import Aspiration from "@/components/Aspiration";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Introduction />
      <HeadlineSlider />
      <Determination />
      <Solutions />
      <Aspiration />
    </main>
  );
}
