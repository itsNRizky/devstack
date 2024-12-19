import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session = await auth();
  console.log(session || "no session");
  return (
    <>
      <h1 className="h1-bold pt-[100px] font-space-grotesk">
        Novian Rizky Perdana
      </h1>
    </>
  );
}
