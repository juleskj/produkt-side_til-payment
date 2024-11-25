import { getSubs } from "@/lib/supabase";

async function page() {
  const subs = await getSubs();
  return (
    <div>
      <h1></h1>
      <ul>
        {subs.map((sub) => (
          <li key={sub.id} className="border border-black py-2 px-1">
            {sub.name} <br />
            {sub.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
