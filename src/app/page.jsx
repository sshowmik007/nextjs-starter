import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-background py-24 sm:py-32 ">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base/7 font-semibold text-primary">
            Deploy faster
          </h2>
          <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
            Everything you need to deploy your app
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            {/* Releases Card */}
            <Card className="overflow-hidden border lg:col-span-4 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
              <div className="h-80 w-full overflow-hidden">
                <Image
                  alt="Releases"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-releases.png"
                  width={800}
                  height={320}
                  className="h-80 w-full object-cover object-left"
                />
              </div>
              <CardContent className="p-10">
                <h3 className="text-sm/4 font-semibold text-muted-foreground">
                  Releases
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                  Push to deploy
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida justo et nulla efficitur, maximus egestas sem
                  pellentesque.
                </p>
              </CardContent>
            </Card>

            {/* Integrations Card */}
            <Card className="overflow-hidden border lg:col-span-2 lg:rounded-tr-[2rem]">
              <div className="h-80 w-full overflow-hidden">
                <Image
                  alt="Integrations"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-integrations.png"
                  width={400}
                  height={320}
                  className="h-80 w-full object-cover"
                />
              </div>
              <CardContent className="p-10">
                <h3 className="text-sm/4 font-semibold text-muted-foreground">
                  Integrations
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                  Connect your favorite tools
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
                  massa.
                </p>
              </CardContent>
            </Card>

            {/* Security Card */}
            <Card className="overflow-hidden border lg:col-span-2 lg:rounded-bl-[2rem]">
              <div className="h-80 w-full overflow-hidden">
                <Image
                  alt="Security"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-security.png"
                  width={400}
                  height={320}
                  className="h-80 w-full object-cover"
                />
              </div>
              <CardContent className="p-10">
                <h3 className="text-sm/4 font-semibold text-muted-foreground">
                  Security
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                  Advanced access control
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia.
                </p>
              </CardContent>
            </Card>

            {/* Performance Card */}
            <Card className="overflow-hidden border lg:col-span-4 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
              <div className="h-80 w-full overflow-hidden">
                <Image
                  alt="Performance"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-performance.png"
                  width={800}
                  height={320}
                  className="h-80 w-full object-cover object-left"
                />
              </div>
              <CardContent className="p-10">
                <h3 className="text-sm/4 font-semibold text-muted-foreground">
                  Performance
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                  Lightning-fast builds
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                  Sed congue eros non finibus molestie. Vestibulum euismod augue
                  vel commodo vulputate. Maecenas at augue sed elit dictum
                  vulputate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
