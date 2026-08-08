import Link from "next/link";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-6 px-6 text-center">
      <LogoMark className="h-6 w-6 text-accent" />
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        This page drifted away.
      </h1>
      <p className="max-w-md text-muted">
        The page you are looking for has moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        Back home
      </Link>
    </main>
  );
}
