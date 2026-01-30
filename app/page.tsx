import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-6xl font-bold">A better way to track your job application.</h1>
            <p className="text-muted-foreground mb-10 text-xl">Capture, organize and mange your job search in one place.</p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8 text-lg font-medium">
                  Start for free <ArrowRight className="ml-2"/>
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">free forever. No credit card required</p>
            </div>
          </div>
        </section>
        {/* Website preview Section */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="organize" className="mx-auto max-w-6xl flex items-center">
              <TabsList className="flex gap-1 justify-center mb-8 bg-white">
                <TabsTrigger className="preview-tabs-button data-[state=active]:bg-primary data-[state=active]:text-white" value="organize">Organize Applications</TabsTrigger>
                <TabsTrigger className="preview-tabs-button data-[state=active]:bg-primary data-[state=active]:text-white" value="hired">Get Hired</TabsTrigger>
                <TabsTrigger className="preview-tabs-button data-[state=active]:bg-primary data-[state=active]:text-white" value="boards">Manage Boards</TabsTrigger>
              </TabsList>
              <TabsContent value="organize" className="preview-tabs-images">
                <Image src="/hero-images/hero1.png" alt="Organize Applications" width={1200} height={800}/>
              </TabsContent>
              <TabsContent value="hired" className="preview-tabs-images">
                <Image src="/hero-images/hero2.png" alt="Organize Applications" width={1200} height={800}/>
              </TabsContent>
              <TabsContent value="boards" className="preview-tabs-images">
                <Image src="/hero-images/hero3.png" alt="Organize Applications" width={1200} height={800}/>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
}
