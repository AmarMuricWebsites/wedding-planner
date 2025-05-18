import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GallerySection() {
  return (
    <div className="py-8">
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-pink-50 p-1">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-500 data-[state=active]:shadow-sm"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="rustic"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-500 data-[state=active]:shadow-sm"
            >
              Rustic
            </TabsTrigger>
            <TabsTrigger
              value="elegant"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-500 data-[state=active]:shadow-sm"
            >
              Elegant
            </TabsTrigger>
            <TabsTrigger
              value="beach"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-500 data-[state=active]:shadow-sm"
            >
              Beach
            </TabsTrigger>
            <TabsTrigger
              value="garden"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-500 data-[state=active]:shadow-sm"
            >
              Garden
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-10">
                  <span className="text-white font-medium">
                    Wedding {i + 1}
                  </span>
                </div>
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Wedding+${
                    i + 1
                  }`}
                  alt={`Wedding gallery image ${i + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full aspect-square group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="rustic" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-10">
                  <span className="text-white font-medium">Rustic {i + 1}</span>
                </div>
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Rustic+${
                    i + 1
                  }`}
                  alt={`Rustic wedding image ${i + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full aspect-square group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="elegant" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-10">
                  <span className="text-white font-medium">
                    Elegant {i + 1}
                  </span>
                </div>
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Elegant+${
                    i + 1
                  }`}
                  alt={`Elegant wedding image ${i + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full aspect-square group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="beach" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-10">
                  <span className="text-white font-medium">Beach {i + 1}</span>
                </div>
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Beach+${
                    i + 1
                  }`}
                  alt={`Beach wedding image ${i + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full aspect-square group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="garden" className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-10">
                  <span className="text-white font-medium">Garden {i + 1}</span>
                </div>
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Garden+${
                    i + 1
                  }`}
                  alt={`Garden wedding image ${i + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full aspect-square group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex justify-center mt-8">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-pink-200 bg-white hover:bg-pink-50 h-10 px-6 py-2 shadow-sm hover:shadow transition-all duration-300">
          View Full Gallery
        </button>
      </div>
    </div>
  );
}
