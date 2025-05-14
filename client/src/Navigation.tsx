import { Link } from "react-router";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { ThemeButton } from "./ThemeButton";
import { useAuthStore } from "./useAuthStore";

export function Navigation() {
  const name = useAuthStore((state) => state.user?.name);
  const logout = useAuthStore((state) => state.logout);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <nav className="border-b z-50 shadow-lg rounded-full sticky top-5 mx-auto max-w-6xl w-11/12">
      <Card className="lg:p-0 lg:rounded-full rounded-full lg:shadow-lg shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex lg:flex-row flex-col gap-3 justify-between items-center lg:h-16">
            <div className="flex items-center space-x-8">
              <span className="text-xl font-bold">Cinema</span>
              <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Screenings
              </span>
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Movies
              </Link>
              <Link
                to={"/my-bookings"}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                My Bookings
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <span className="text-muted-foreground">Welcome, {name}</span>
                  <Button onClick={() => logout()} variant="outline">
                    Logout
                  </Button>{" "}
                </>
              ) : (
                <>
                  <Link to={"/login"}>Login</Link>
                  <Button>Register</Button>
                </>
              )}
              <ThemeButton />
            </div>
          </div>
        </div>
      </Card>
    </nav>
  );
}
