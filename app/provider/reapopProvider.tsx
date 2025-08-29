"use client";

import { useEffect, useState } from "react";
import NotificationsSystem, {
  NotificationsProvider,
  useNotifications,
  bootstrapTheme,
} from "reapop";

export default function ReapopProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return (
    <NotificationsProvider>
      {children}
      {isClient && <Notifications />}
    </NotificationsProvider>
  );
}

function Notifications() {
  const { notifications, dismissNotification } = useNotifications();

  return (
    <NotificationsSystem
      notifications={notifications}
      dismissNotification={dismissNotification}
      theme={bootstrapTheme}
    />
  );
}
