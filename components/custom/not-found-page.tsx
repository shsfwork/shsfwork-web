import { buttonVariants } from "@shsfwork/components/custom/3d-button";
import BackButton from "@shsfwork/components/custom/back-button";
import Section from "@shsfwork/components/semantic-elements/section";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <Section id="not-found" className="text-center space-y-4">
      <div className="animate-appear opacity-0 delay-300 space-y-4">
        <h1 className="text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 ">
          404
        </h1>
        <p className="text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          Oops! Page not found.
        </p>
        <p className="text-lg font-light text-gray-500 dark:text-gray-400">
          It looks like the page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>

      <div className="mt-6 flex items-center justify-center flex-wrap gap-4  animate-appear opacity-0 delay-500">
        <BackButton />

        <Link href="/" className={buttonVariants({ variant: "bone" })}>
          Go to home
        </Link>
      </div>
    </Section>
  );
}
