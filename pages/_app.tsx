import { PostsProvider } from "@/hooks/usePostsContext";
import { AppLayout } from "@/layouts/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostsProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </PostsProvider>
  );
}
