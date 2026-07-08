"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DEMO_ACCOUNTS = [
  { label: "Admin (HR)", username: "admin", password: "admin" },
  { label: "Employee", username: "ahmad.faiz", password: "password123" },
];

export function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Unable to log in.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  function fillDemo(account: (typeof DEMO_ACCOUNTS)[number]) {
    setUsername(account.username);
    setPassword(account.password);
    setError(null);
  }

  return (
    <div className="w-full max-w-sm space-y-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <Card>
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            HP
          </div>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Log in to your HR Pilot workspace</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                autoComplete="username"
                placeholder="e.g. ahmad.faiz"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            {error && (
              <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Log in
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="rounded-xl border bg-muted/40 p-4 text-sm">
        <p className="mb-1 font-medium">Demo credentials</p>
        <p className="mb-3 text-xs text-muted-foreground">
          This is a practice app with simple authentication - click a card below to autofill.
        </p>
        <div className="space-y-2">
          {DEMO_ACCOUNTS.map((account) => (
            <button
              key={account.username}
              type="button"
              onClick={() => fillDemo(account)}
              className="flex w-full items-center justify-between rounded-lg border bg-background px-3 py-2 text-left transition-colors hover:border-primary/50 hover:bg-primary/5"
            >
              <span className="font-medium">{account.label}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {account.username} / {account.password}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
