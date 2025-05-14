import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "./useAuthStore";

export function MyBookings() {
  const token = useAuthStore((state) => state.token);
  const {
    isPending,
    isError,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch("http://127.0.0.1:8000/api/user", {
        method: "get",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const user = await response.json();
      return user;
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h1>My bookings</h1>
      <p>The logged in user was created at {user.created_at}</p>
    </div>
  );
}
