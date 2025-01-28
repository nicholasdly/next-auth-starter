import Link from "next/link";

import { logout } from "@/auth/actions";
import { getCurrentSession } from "@/auth/session";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const { session, user } = await getCurrentSession();

  return (
    <main className="mx-auto flex h-dvh max-w-md flex-col items-center justify-center gap-4 p-4">
      {session ? (
        <>
          <p>You are logged in.</p>
          <pre className="max-w-full overflow-x-scroll whitespace-pre rounded border bg-muted px-3 py-2 leading-snug text-muted-foreground">
            <code className="font-mono text-xs font-medium">
              {JSON.stringify(user, null, 2)}
            </code>
          </pre>
          <Button size="sm" variant="outline" onClick={logout}>
            Sign out
          </Button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <Button size="sm" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
        </>
      )}
    </main>
  );
}
