import { router, Stack } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}

function MainLayout() {

  const { setAuth } = useAuth()

  const queryClient = new QueryClient();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session.user)
        router.replace('/(panel)/startScreen/page')
        return;
      }

      setAuth(null)
      router.replace('/(auth)/signin/page')
    })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/signin/page"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/signup/page"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(panel)/profile/page"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="(panel)/startScreen/page"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(panel)/formStrip/page"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(panel)/formStripFinal/page"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(panel)/Strip/page"
          options={{ headerShown: false }}
        />
      </Stack>
    </QueryClientProvider>

  )
}